import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}

export default function SEO({ title, description, canonicalUrl }: SEOProps) {
  const fullTitle = `${title} | Letsving Hybrid Technology`;
  const domain = 'https://letsvinghybridtechnology.com';
  const url = canonicalUrl ? `${domain}${canonicalUrl}` : domain;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/assets/hero-1.jpg`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${domain}/assets/hero-1.jpg`} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
