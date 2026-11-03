import { Activity, Code, Database, Globe, Layers, Layout, Monitor, ShieldCheck, Smartphone, TestTube, Users, Zap, Cloud, Cpu, Lightbulb, Briefcase, LineChart, GraduationCap, HeartPulse, Film, Pickaxe, ShoppingCart, Truck, Plane, Landmark } from 'lucide-react';
import SoftwareDevIllustration from '../components/illustrations/SoftwareDevIllustration';
import ITServicesIllustration from '../components/illustrations/ITServicesIllustration';
import CloudTechIllustration from '../components/illustrations/CloudTechIllustration';
import DigitalTransformIllustration from '../components/illustrations/DigitalTransformIllustration';
import EnterpriseSolutionsIllustration from '../components/illustrations/EnterpriseSolutionsIllustration';
import TechConsultingIllustration from '../components/illustrations/TechConsultingIllustration';

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


export const services = [
  {
    title: "Software Development",
    slug: "software-development",
    description: "End-to-end software solutions tailored to your unique business requirements.",
    features: ["Custom applications", "API integrations", "Scalable architecture"],
    icon: Code,
    illustration: SoftwareDevIllustration,
    fullDescription: "We engineer robust, scalable software solutions that drive your business forward. From sophisticated web platforms to complex backend integrations, our development teams utilize modern frameworks and agile methodologies to deliver secure, high-performance applications tailored precisely to your operational needs.",
    capabilities: [
      "Custom Web Applications",
      "Mobile App Development",
      "API Design & Integration",
      "Microservices Architecture",
      "Legacy System Migration",
      "Quality Assurance & Testing"
    ],
    process: [
      { step: "Discovery", description: "In-depth analysis of your requirements and business goals." },
      { step: "Architecture & Design", description: "Creating blueprints for scalable, secure technical foundations." },
      { step: "Development", description: "Agile engineering with regular iterations and continuous feedback." },
      { step: "Deployment", description: "Rigorous testing followed by seamless, zero-downtime release." }
    ],
    idealFor: ["Startups scaling up", "Enterprises modernizing platforms", "Product companies"]
  },
  {
    title: "IT Services",
    slug: "it-services",
    description: "Reliable IT infrastructure management and technical support.",
    features: ["Infrastructure setup", "Network security", "24/7 technical support"],
    icon: Monitor,
    illustration: ITServicesIllustration,
    fullDescription: "Our comprehensive IT services ensure your technological backbone is secure, resilient, and always available. We provide end-to-end infrastructure management, proactive monitoring, and expert technical support to eliminate downtime and protect your critical business assets.",
    capabilities: [
      "Infrastructure Setup & Management",
      "Network Design & Security",
      "24/7 Monitoring & Support",
      "Disaster Recovery Planning",
      "Hardware Procurement",
      "Identity & Access Management"
    ],
    process: [
      { step: "Assessment", description: "Auditing your current IT landscape for vulnerabilities and bottlenecks." },
      { step: "Implementation", description: "Deploying secure, resilient infrastructure hardware and policies." },
      { step: "Optimization", description: "Tuning systems for peak performance and minimal latency." },
      { step: "Management", description: "Ongoing 24/7 monitoring and proactive maintenance." }
    ],
    idealFor: ["Mid-to-large enterprises", "Healthcare providers", "Financial institutions"]
  },
  {
    title: "Cloud Technologies",
    slug: "cloud-technologies",
    description: "Future-ready cloud infrastructure for scale and efficiency.",
    features: ["Cloud migration", "Serverless architecture", "DevOps & CI/CD"],
    icon: Cloud,
    illustration: CloudTechIllustration,
    fullDescription: "Leverage the infinite scalability of the cloud to reduce operational overhead and accelerate innovation. We design, deploy, and manage distributed cloud architectures on AWS, Azure, and Google Cloud, empowering your organization to adapt instantly to shifting market demands.",
    capabilities: [
      "Cloud Migration & Strategy",
      "Serverless & Containerization",
      "DevOps Automation (CI/CD)",
      "Cloud Cost Optimization",
      "Multi-Cloud Architectures",
      "Database Modernization"
    ],
    process: [
      { step: "Readiness Assessment", description: "Evaluating workloads and mapping out the migration journey." },
      { step: "Architecture Design", description: "Structuring a secure, cost-efficient cloud topology." },
      { step: "Migration & Refactoring", description: "Moving assets and refactoring apps for cloud-native performance." },
      { step: "DevOps Integration", description: "Automating pipelines for continuous delivery and integration." }
    ],
    idealFor: ["High-growth tech companies", "E-commerce platforms", "Data-heavy enterprises"]
  },
  {
    title: "Digital Transformation",
    slug: "digital-transformation",
    description: "Modernizing legacy systems to drive innovation and growth.",
    features: ["Legacy modernization", "Process automation", "Technology consulting"],
    icon: Zap,
    illustration: DigitalTransformIllustration,
    fullDescription: "Navigate the shift from rigid legacy systems to agile, data-driven operational models. We guide holistic digital transformations that bridge the gap between old and new, automating manual processes and unlocking previously inaccessible data insights.",
    capabilities: [
      "Legacy System Modernization",
      "Business Process Automation",
      "Data Analytics & BI",
      "Change Management Support",
      "Customer Experience Redesign",
      "Digital Strategy Roadmapping"
    ],
    process: [
      { step: "Current State Analysis", description: "Mapping out existing legacy workflows and data silos." },
      { step: "Future State Visioning", description: "Defining the target digital architecture and KPIs." },
      { step: "Phased Execution", description: "Replacing modules incrementally to minimize business disruption." },
      { step: "Adoption & Training", description: "Empowering your teams to utilize the new digital tools effectively." }
    ],
    idealFor: ["Traditional manufacturing", "Government agencies", "Established retail brands"]
  },
  {
    title: "Enterprise Solutions",
    slug: "enterprise-solutions",
    description: "Robust platforms designed for complex organizational workflows.",
    features: ["ERP implementations", "CRM systems", "Data management platforms"],
    icon: Briefcase,
    illustration: EnterpriseSolutionsIllustration,
    fullDescription: "Unify your organization's data and operations under robust, integrated enterprise platforms. Whether it's ERP, CRM, or bespoke core systems, we build solutions that tear down departmental silos, providing real-time visibility and control across your entire business.",
    capabilities: [
      "ERP System Integration",
      "Custom CRM Development",
      "Master Data Management",
      "Supply Chain Portals",
      "Human Resources Information Systems",
      "Financial Dashboarding"
    ],
    process: [
      { step: "Workflow Mapping", description: "Documenting complex cross-departmental operations and data flows." },
      { step: "Platform Selection/Design", description: "Choosing or building the right central hub for your needs." },
      { step: "Integration", description: "Connecting disjointed third-party systems via secure APIs." },
      { step: "Rollout", description: "Structured deployment with comprehensive user training." }
    ],
    idealFor: ["Global corporations", "Logistics conglomerates", "Multi-national retail"]
  },
  {
    title: "Technology Consulting",
    slug: "technology-consulting",
    description: "Strategic guidance to navigate the evolving digital landscape.",
    features: ["Tech stack assessment", "Architecture planning", "Agile transformation"],
    icon: Lightbulb,
    illustration: TechConsultingIllustration,
    fullDescription: "Make informed, high-ROI technology investments with our expert advisory services. We act as your strategic technical partner, helping you evaluate new technologies, assess technical debt, and build clear, actionable roadmaps that align with your long-term business objectives.",
    capabilities: [
      "IT Strategy & Roadmapping",
      "Technical Due Diligence",
      "Agile & Lean Transformation",
      "Security & Compliance Audits",
      "Vendor & Tool Selection",
      "Fractional CTO Services"
    ],
    process: [
      { step: "Audit & Discovery", description: "Evaluating your current technical debt, processes, and tools." },
      { step: "Gap Analysis", description: "Identifying the Delta between current capabilities and business goals." },
      { step: "Strategic Roadmap", description: "Delivering a prioritized, actionable step-by-step transformation plan." },
      { step: "Executive Alignment", description: "Ensuring stakeholder buy-in and clear ROI tracking." }
    ],
    idealFor: ["Companies anticipating M&A", "Scaling startups", "Organizations with high technical debt"]
  }
];

export const industries = [
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

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" }
];
