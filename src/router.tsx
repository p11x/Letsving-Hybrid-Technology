import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense, ReactNode } from 'react';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ui/ErrorBoundary';
import Logo from './components/ui/Logo';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const IndustryDetailPage = lazy(() => import('./pages/IndustryDetailPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));

const SuspenseWrapper = ({ children }: { children: ReactNode }) => (
  <Suspense
    fallback={
      <div 
        className="min-h-screen bg-[#0A1428] flex flex-col items-center justify-center p-6 text-center"
        role="status"
        aria-live="polite"
        aria-label="Loading page content"
      >
        <Logo variant="symbol" size="lg" animated={true} />
        <p className="mt-4 text-xs font-mono tracking-[0.25em] text-[#38BDF8] uppercase animate-pulse">
          Loading // System Initializing
        </p>
      </div>
    }
  >
    {children}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <SuspenseWrapper><HomePage /></SuspenseWrapper> },
      { path: 'about', element: <SuspenseWrapper><AboutPage /></SuspenseWrapper> },
      { path: 'services', element: <SuspenseWrapper><ServicesPage /></SuspenseWrapper> },
      { path: 'services/:slug', element: <SuspenseWrapper><ServiceDetailPage /></SuspenseWrapper> },
      { path: 'industries', element: <SuspenseWrapper><IndustriesPage /></SuspenseWrapper> },
      { path: 'industries/:slug', element: <SuspenseWrapper><IndustryDetailPage /></SuspenseWrapper> },
      { path: 'careers', element: <SuspenseWrapper><CareersPage /></SuspenseWrapper> },
      { path: 'contact', element: <SuspenseWrapper><ContactPage /></SuspenseWrapper> },
      { path: 'privacy-policy', element: <SuspenseWrapper><PrivacyPolicyPage /></SuspenseWrapper> },
      { path: 'terms-of-service', element: <SuspenseWrapper><TermsOfServicePage /></SuspenseWrapper> },
      { path: '*', element: <SuspenseWrapper><NotFoundPage /></SuspenseWrapper> },
    ],
  },
]);
