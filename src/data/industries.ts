import React from 'react';
import { 
  LineChart, 
  ShieldCheck, 
  GraduationCap, 
  HeartPulse, 
  Film, 
  Pickaxe, 
  ShoppingCart, 
  Truck, 
  Plane, 
  Landmark, 
  Zap,
  LucideIcon
} from 'lucide-react';

import { 
  FinanceIllustration,
  InsuranceIllustration,
  EducationIllustration,
  HealthcareIllustration,
  MediaIllustration,
  OilGasIllustration,
  RetailIllustration,
  LogisticsIllustration,
  TravelIllustration,
  PublicSectorIllustration,
  EnergyIllustration
} from '../components/illustrations/IndustryIllustrations';

export interface IndustryItem {
  title: string;
  slug: string;
  illustration: React.ComponentType<{ className?: string }>;
  description: string;
  icon: LucideIcon;
  fullDescription: string;
  solutions: string[];
  challenges: string[];
  relevantServices: string[];
}

export const industries: IndustryItem[] = [
  {
    title: "Finance",
    slug: "finance",
    illustration: FinanceIllustration,
    description: "Secure financial applications, dashboards, payment workflows, and compliance-aware digital products.",
    icon: LineChart,
    fullDescription: "In an era of rapid fintech disruption, financial institutions must balance agility with uncompromising security. We build compliance-first platforms that streamline operations, handle complex transactional data in real-time, and deliver seamless, secure experiences to your customers.",
    solutions: ["Core Banking Integrations", "Real-time Trading Dashboards", "Automated Compliance Workflows", "Secure Payment Gateways", "Fraud Detection Systems"],
    challenges: ["Strict regulatory compliance (PCI-DSS, SOC2)", "Legacy system integration bottlenecks", "Real-time data processing at scale", "Sophisticated security threats"],
    relevantServices: ["software-development", "cloud-technologies", "enterprise-solutions"]
  },
  {
    title: "Insurance",
    slug: "insurance",
    illustration: InsuranceIllustration,
    description: "Custom InsurTech applications that connect backend data with user-friendly customer portals.",
    icon: ShieldCheck,
    fullDescription: "Transform the way policies are managed and claims are processed. We design custom InsurTech solutions that bridge the gap between complex underwriting data and intuitive, self-service customer portals, accelerating workflows from quote to claim.",
    solutions: ["Self-Service Policyholder Portals", "Automated Claims Processing", "Underwriting Rules Engines", "Agent Broker Dashboards", "Telematics Data Integration"],
    challenges: ["Slow, manual claims processing", "Disjointed broker and customer experiences", "Heavy reliance on paper-based underwriting", "Siloed policy data"],
    relevantServices: ["digital-transformation", "enterprise-solutions", "technology-consulting"]
  },
  {
    title: "Education",
    slug: "education",
    illustration: EducationIllustration,
    description: "Learning management systems and education platforms built for students and administrators.",
    icon: GraduationCap,
    fullDescription: "Empower learners and educators with scalable, interactive educational platforms. From custom Learning Management Systems (LMS) to virtual classrooms, we build technologies that make education more accessible, trackable, and engaging.",
    solutions: ["Custom Learning Management Systems (LMS)", "Virtual Classroom Infrastructure", "Student Information Systems (SIS)", "Gamified E-Learning Platforms", "Automated Assessment Tools"],
    challenges: ["Low student engagement in digital environments", "Complex student data management", "Scaling infrastructure for remote learning", "Integration with legacy university systems"],
    relevantServices: ["software-development", "cloud-technologies"]
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    illustration: HealthcareIllustration,
    description: "Healthcare solutions focused on privacy, usability, and efficient care delivery.",
    icon: HeartPulse,
    fullDescription: "Enhance patient outcomes and operational efficiency with secure health-tech solutions. We build HIPAA-compliant portals, telemedicine platforms, and interoperable data systems that put patient care front and center while streamlining administrative burdens.",
    solutions: ["Telehealth & Virtual Care Platforms", "Patient Portals & Scheduling", "EHR/EMR Integrations", "Medical Device IoT Dashboards", "Healthcare Analytics"],
    challenges: ["Strict data privacy laws (HIPAA/GDPR)", "Fragmented patient records", "High administrative overhead", "Lack of interoperability between care systems"],
    relevantServices: ["software-development", "enterprise-solutions", "digital-transformation"]
  },
  {
    title: "Media & Entertainment",
    slug: "media-entertainment",
    illustration: MediaIllustration,
    description: "Scalable media solutions for content delivery and interactive user experiences.",
    icon: Film,
    fullDescription: "Captivate your audience with high-performance digital platforms capable of handling massive spikes in traffic. We build content delivery networks, streaming platforms, and interactive media apps designed for seamless global distribution.",
    solutions: ["High-Volume Video Streaming", "Digital Asset Management (DAM)", "Subscription Billing Systems", "Interactive Fan Portals", "Content Delivery Architecture"],
    challenges: ["Handling unpredictable traffic spikes", "Global content latency", "Complex digital rights management (DRM)", "Subscription churn and billing logic"],
    relevantServices: ["cloud-technologies", "software-development"]
  },
  {
    title: "Oil & Gas Mining",
    slug: "oil-gas-mining",
    illustration: OilGasIllustration,
    description: "Software for remote asset tracking, field operations, and complex data visualization.",
    icon: Pickaxe,
    fullDescription: "Bring operational visibility to the most remote environments. We develop ruggedized software solutions for field data collection, predictive maintenance, and real-time asset tracking to maximize yield and ensure worker safety.",
    solutions: ["Predictive Maintenance Dashboards", "Remote Asset Tracking (IoT)", "Field Worker Mobility Apps", "Geospatial Data Visualization", "Supply Chain Command Centers"],
    challenges: ["Unreliable connectivity in remote sites", "Massive IoT data ingestion", "High risk and safety compliance", "Siloed operational data"],
    relevantServices: ["enterprise-solutions", "cloud-technologies", "it-services"]
  },
  {
    title: "Retail & Ecommerce",
    slug: "retail-ecommerce",
    illustration: RetailIllustration,
    description: "High-performance ecommerce solutions integrated with inventory and marketing tools.",
    icon: ShoppingCart,
    fullDescription: "Drive conversions and build brand loyalty with omnichannel retail experiences. We connect custom storefronts with powerful backend inventory, CRM, and fulfillment systems to create a unified commerce ecosystem.",
    solutions: ["Headless Ecommerce Platforms", "Omnichannel Inventory Management", "Custom Point of Sale (POS) Integrations", "Personalization Engines", "Supply Chain Automation"],
    challenges: ["Fragmented customer journeys", "Real-time inventory sync failures", "Slow page load times impacting conversion", "Integrating multiple sales channels"],
    relevantServices: ["software-development", "digital-transformation"]
  },
  {
    title: "Logistics & Distribution",
    slug: "logistics-distribution",
    illustration: LogisticsIllustration,
    description: "Unified logistics tools for tracking, reporting, and operations management.",
    icon: Truck,
    fullDescription: "Optimize every link in your supply chain. We engineer platforms that provide real-time visibility into fleets, warehouses, and freight, reducing bottlenecks and enabling data-driven routing and capacity planning.",
    solutions: ["Fleet Tracking & Routing Algorithms", "Warehouse Management Systems (WMS)", "Freight Forwarding Portals", "Automated Dispatch Systems", "Supply Chain Analytics"],
    challenges: ["Lack of real-time visibility", "Inefficient routing and fuel waste", "Manual dispatching errors", "Warehouse space optimization"],
    relevantServices: ["enterprise-solutions", "cloud-technologies"]
  },
  {
    title: "Travel & Hospitality",
    slug: "travel-hospitality",
    illustration: TravelIllustration,
    description: "Customer-facing products and back-office tools for reservations, payments, and support.",
    icon: Plane,
    fullDescription: "Deliver unforgettable guest experiences from booking to checkout. We build custom booking engines, loyalty platforms, and back-office management systems that streamline operations for airlines, hotels, and travel providers.",
    solutions: ["Custom Booking Engines", "Loyalty & Rewards Platforms", "Property Management Systems (PMS)", "Dynamic Pricing Algorithms", "Concierge Mobile Apps"],
    challenges: ["Handling complex dynamic pricing", "Integrating with global distribution systems (GDS)", "Fragmented guest profiles", "High customer support volumes"],
    relevantServices: ["software-development", "digital-transformation"]
  },
  {
    title: "Public Sector",
    slug: "public-sector",
    illustration: PublicSectorIllustration,
    description: "Secure portals, case management systems, and public data-sharing platforms.",
    icon: Landmark,
    fullDescription: "Modernize citizen services with accessible, secure, and transparent digital platforms. We help government agencies digitize workflows, ensuring high accessibility standards, robust security, and seamless public engagement.",
    solutions: ["Citizen Self-Service Portals", "Digital Case Management", "Open Data Dashboards", "Secure GovCloud Migrations", "Accessibility-First Web Properties"],
    challenges: ["Strict accessibility compliance (WCAG)", "Rigid procurement and legacy systems", "High security and data sovereignty requirements", "Low citizen trust in digital tools"],
    relevantServices: ["technology-consulting", "it-services", "digital-transformation"]
  },
  {
    title: "Energy And Utilities",
    slug: "energy-utilities",
    illustration: EnergyIllustration,
    description: "Digital tools for resource allocation, predictive maintenance, and customer service.",
    icon: Zap,
    fullDescription: "Navigate the transition to a modern, decentralized grid. We build data-intensive platforms that optimize resource allocation, manage smart grid IoT data, and empower consumers with transparent usage analytics.",
    solutions: ["Smart Grid Data Visualization", "Consumer Usage Portals", "Outage Management Systems", "Renewable Energy Forecasting", "Field Service Dispatching"],
    challenges: ["Integrating legacy grid infrastructure with smart tech", "Managing massive streams of meter data", "Balancing grid loads dynamically", "Improving consumer transparency"],
    relevantServices: ["enterprise-solutions", "cloud-technologies"]
  }
];

export default industries;
