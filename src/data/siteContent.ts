import { Activity, Code, Database, Globe, Layers, Layout, Monitor, ShieldCheck, Smartphone, TestTube, Users, Zap, Cloud, Cpu, Lightbulb, Briefcase, LineChart, GraduationCap, HeartPulse, Film, Pickaxe, ShoppingCart, Truck, Plane, Landmark } from 'lucide-react';
import SoftwareDevIllustration from '../components/illustrations/SoftwareDevIllustration';
import ITServicesIllustration from '../components/illustrations/ITServicesIllustration';
import CloudTechIllustration from '../components/illustrations/CloudTechIllustration';
import DigitalTransformIllustration from '../components/illustrations/DigitalTransformIllustration';
import EnterpriseSolutionsIllustration from '../components/illustrations/EnterpriseSolutionsIllustration';
import TechConsultingIllustration from '../components/illustrations/TechConsultingIllustration';



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

import { industries, type IndustryItem } from './industries';
export { industries, type IndustryItem };


export const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" }
];
