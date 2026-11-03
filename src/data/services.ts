import React from 'react';
import { 
  Code, 
  Monitor, 
  Cloud, 
  Zap, 
  Briefcase, 
  Lightbulb,
  LucideIcon 
} from 'lucide-react';

import SoftwareDevIllustration from '../components/illustrations/SoftwareDevIllustration';
import ITServicesIllustration from '../components/illustrations/ITServicesIllustration';
import CloudTechIllustration from '../components/illustrations/CloudTechIllustration';
import DigitalTransformIllustration from '../components/illustrations/DigitalTransformIllustration';
import EnterpriseSolutionsIllustration from '../components/illustrations/EnterpriseSolutionsIllustration';
import TechConsultingIllustration from '../components/illustrations/TechConsultingIllustration';

export interface ServiceProcessStep {
  step: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  icon: LucideIcon;
  illustration: React.ComponentType<{ className?: string }>;
  description: string;
  shortDescription: string;
  longDescription: string;
  keyFeatures: string[];
  process: ServiceProcessStep[];
  technologies: string[];
  benefits: string[];
  faq: ServiceFAQ[];
}

const rawServices: Omit<ServiceItem, 'description'>[] = [
  {
    slug: "software-development",
    title: "Software Development",
    icon: Code,
    illustration: SoftwareDevIllustration,
    shortDescription: "End-to-end bespoke software engineered for scalable performance, fault-tolerant reliability, and enterprise operational agility.",
    longDescription: "We engineer robust, scalable software solutions that drive your business forward. From sophisticated web platforms to complex backend integrations, our development teams utilize modern frameworks and agile methodologies to deliver secure, high-performance applications tailored precisely to your operational needs.",
    keyFeatures: [
      "Custom Enterprise Web & Mobile Applications",
      "High-Throughput Distributed Microservices",
      "RESTful & GraphQL API Architecture",
      "Legacy Codebase Refactoring & Migration",
      "Automated Testing & Continuous QA Pipelines",
      "Strict Security Auditing & Compliance Standards"
    ],
    process: [
      { step: "Discovery & Blueprint", description: "In-depth operational audit, technical debt analysis, and system architecture planning." },
      { step: "Architecture & Design", description: "Creating blueprints for scalable, secure technical foundations and schema models." },
      { step: "Agile Sprints", description: "Bi-weekly iteration cycles with continuous integration, automated testing, and review demos." },
      { step: "Zero-Downtime Rollout", description: "Blue-green deployment strategies with post-launch telemetry and monitoring." }
    ],
    technologies: ["React", "TypeScript", "Node.js", "Go", "Python", "PostgreSQL", "Docker", "Kubernetes"],
    benefits: [
      "Accelerated time-to-market with production-grade engineering",
      "Zero vendor lock-in with clean modular architecture",
      "Measurable performance gains and minimal maintenance overhead",
      "Built-in enterprise compliance and data governance"
    ],
    faq: [
      {
        question: "How do you ensure IP security and code ownership?",
        answer: "All intellectual property, proprietary algorithms, and repository commits belong 100% to your organization from day one under binding legal agreements."
      },
      {
        question: "Can your team integrate with our existing engineering department?",
        answer: "Yes, our developers seamlessly embed within your internal sprint cadence, Slack channels, and Git workflows as specialized pods or staff augmentations."
      }
    ]
  },
  {
    slug: "it-services",
    title: "IT Services & Support",
    icon: Monitor,
    illustration: ITServicesIllustration,
    shortDescription: "Reliable enterprise IT infrastructure management, proactive cybersecurity, 24/7 technical operations, and resilient disaster recovery.",
    longDescription: "Our comprehensive IT services ensure your technological backbone is secure, resilient, and always available. We provide end-to-end infrastructure management, proactive monitoring, and expert technical support to eliminate downtime and protect your critical business assets.",
    keyFeatures: [
      "Hybrid & On-Premises Infrastructure Setup",
      "Network Engineering & Zero-Trust Security",
      "24/7/365 Proactive NOC Monitoring & Incident Response",
      "Disaster Recovery & Automated Backup Topology",
      "Identity & Access Management (IAM / SSO)",
      "Compliance Audits (SOC 2, ISO 27001, HIPAA)"
    ],
    process: [
      { step: "Infrastructure Audit", description: "Thorough penetration testing, network mapping, and single-point-of-failure analysis." },
      { step: "Remediation & Hardening", description: "Deploying enterprise firewalls, automated backup vaults, and unified IAM." },
      { step: "24/7 NOC Active Telemetry", description: "Round-the-clock monitoring of CPU, memory, latency, and anomalous ingress traffic." },
      { step: "Quarterly Optimization", description: "Continual capacity forecasting, cost rationalization, and policy updates." }
    ],
    technologies: ["Terraform", "Ansible", "Cisco", "Cloudflare", "OpenVPN", "Datadog", "Prometheus", "Grafana"],
    benefits: [
      "Guaranteed 99.99% infrastructure uptime SLA",
      "Sub-15 minute critical incident response times",
      "Significant reduction in ongoing operational overhead",
      "Comprehensive disaster mitigation with sub-hour RTO/RPO"
    ],
    faq: [
      {
        question: "What is your typical SLA for emergency response?",
        answer: "Critical P1 production incidents trigger immediate automated alerts with senior engineer response within 15 minutes 24/7/365."
      },
      {
        question: "Do you manage both cloud and on-premise hardware?",
        answer: "Yes, we specialize in true hybrid environments, connecting physical data center racks with AWS, GCP, and Azure VPCs."
      }
    ]
  },
  {
    slug: "cloud-technologies",
    title: "Cloud Solutions",
    icon: Cloud,
    illustration: CloudTechIllustration,
    shortDescription: "Future-ready multi-cloud architecture, seamless automated migrations, serverless execution, and DevOps CI/CD pipeline automation.",
    longDescription: "Leverage the infinite scalability of the cloud to reduce operational overhead and accelerate innovation. We design, deploy, and manage distributed cloud architectures on AWS, Azure, and Google Cloud, empowering your organization to adapt instantly to shifting market demands.",
    keyFeatures: [
      "Multi-Cloud & Hybrid Migration Strategy",
      "Kubernetes & Container Orchestration",
      "Infrastructure-as-Code (IaC) Pipelines",
      "FinOps & Systematic Cloud Cost Optimization",
      "Serverless Microservices Architecture",
      "Geo-Distributed Edge CDN Acceleration"
    ],
    process: [
      { step: "Workload Assessment", description: "Cataloging workloads, dependency mapping, and TCO cost benchmarking." },
      { step: "Cloud Blueprinting", description: "Designing secure VPC landing zones with automated compliance guardrails." },
      { step: "Staged Migration", description: "Phased data synchronization and containerized workload migration with zero downtime." },
      { step: "FinOps Continuous Tuning", description: "Ongoing right-sizing, reserved capacity purchasing, and spot instance integration." }
    ],
    technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Kubernetes", "Helm", "Terraform", "GitHub Actions", "ArgoCD"],
    benefits: [
      "Average 30–45% reduction in recurring cloud infrastructure expenses",
      "Elastic auto-scaling capable of absorbing massive traffic spikes",
      "Immutable infrastructure with reproducible declarative deployments",
      "Hardened security posture meeting military-grade encryption standards"
    ],
    faq: [
      {
        question: "How do you prevent unexpected cloud billing spikes?",
        answer: "We deploy automated budget guardrails, hard cost kill-switches, and automated daily anomaly detection across all cloud accounts."
      },
      {
        question: "Can we migrate without taking our current systems offline?",
        answer: "Yes, our dual-write and strangler-fig migration patterns ensure continuous operational continuity with zero scheduled downtime."
      }
    ]
  },
  {
    slug: "digital-transformation",
    title: "Digital Innovation",
    icon: Zap,
    illustration: DigitalTransformIllustration,
    shortDescription: "Modernize legacy systems, automate complex business workflows, and unlock previously siloed enterprise data streams.",
    longDescription: "Navigate the shift from rigid legacy systems to agile, data-driven operational models. We guide holistic digital transformations that bridge the gap between old and new, automating manual processes and unlocking previously inaccessible data insights.",
    keyFeatures: [
      "Legacy Core Modernization",
      "End-to-End Business Process Automation",
      "Enterprise Data Pipelines & Business Intelligence",
      "API-Driven Partner Integration",
      "Omnichannel Digital Experience Design",
      "Organizational Change Enablement & Training"
    ],
    process: [
      { step: "Silo Mapping", description: "Auditing paper, spreadsheet, and legacy bottleneck operations across business units." },
      { step: "Digital Target State", description: "Designing user-centric unified dashboards and automated event pipelines." },
      { step: "Modular Refactoring", description: "Replacing fragile monolith components with fast, resilient modern micro-apps." },
      { step: "Data Culture Enablement", description: "Equipping operations and leadership with real-time actionable KPI dashboards." }
    ],
    technologies: ["Node.js", "GraphQL", "Apache Kafka", "Snowflake", "dbt", "Next.js", "Redis", "Elasticsearch"],
    benefits: [
      "Eradication of manual repetitive data entry workflows",
      "Instant executive visibility into operational metrics and revenue",
      "Significantly improved customer satisfaction and retention rates",
      "Future-proof architecture ready for AI model integration"
    ],
    faq: [
      {
        question: "How long does an enterprise transformation project take?",
        answer: "We deliver measurable value in modular 6-week milestones rather than multi-year waterfall roadmaps, proving ROI at every step."
      },
      {
        question: "How do you handle employees resistant to new software?",
        answer: "We involve end-users directly during early prototyping and provide hands-on video tutorials, comprehensive documentation, and training sessions."
      }
    ]
  },
  {
    slug: "enterprise-solutions",
    title: "Enterprise Solutions",
    icon: Briefcase,
    illustration: EnterpriseSolutionsIllustration,
    shortDescription: "Robust platforms designed for complex organizational workflows, ERP/CRM integration, and unified supply chain visibility.",
    longDescription: "Unify your organization's data and operations under robust, integrated enterprise platforms. Whether it's ERP, CRM, or bespoke core systems, we build solutions that tear down departmental silos, providing real-time visibility and control across your entire business.",
    keyFeatures: [
      "ERP & CRM System Customization",
      "Master Data Management & Validation",
      "Global Supply Chain Portals",
      "Secure Role-Based Access Control (RBAC)",
      "High-Volume Transaction Processing",
      "Audit Trail & Compliance Archival"
    ],
    process: [
      { step: "Workflow Mapping", description: "Documenting complex cross-departmental operations and data flows." },
      { step: "Platform Selection & Design", description: "Choosing or building the right central hub for your business needs." },
      { step: "Secure Integration", description: "Connecting disjointed third-party systems via secure enterprise APIs." },
      { step: "Structured Rollout", description: "Staged deployment with comprehensive user training and sandbox testing." }
    ],
    technologies: ["PostgreSQL", "Kafka", "Java Spring Boot", "TypeScript", "React", "Docker", "Redis", "Elastic"],
    benefits: [
      "Elimination of cross-departmental communication latency",
      "Auditable real-time data integrity across global operations",
      "Custom security boundaries for internal and external stakeholders",
      "Scalable infrastructure designed for decades of sustained growth"
    ],
    faq: [
      {
        question: "Can you connect with legacy ERPs like SAP or Oracle?",
        answer: "Yes, we construct secure bi-directional middleware adapters and webhooks that interface directly with legacy database tables or SOAP/REST interfaces."
      }
    ]
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    icon: Lightbulb,
    illustration: TechConsultingIllustration,
    shortDescription: "Strategic technical leadership, fractional CTO advisory, technical debt audits, and agile organizational roadmapping.",
    longDescription: "Make informed, high-ROI technology investments with our expert advisory services. We act as your strategic technical partner, helping you evaluate new technologies, assess technical debt, and build clear, actionable roadmaps that align with your long-term business objectives.",
    keyFeatures: [
      "Technical Due Diligence for M&A",
      "Enterprise Tech Stack Audits",
      "Fractional CTO & VPE Advisory",
      "Agile Engineering Transformation",
      "Cybersecurity Governance & Posture Review",
      "Cloud Cost & Vendor Contract Negotiation"
    ],
    process: [
      { step: "Executive Assessment", description: "Evaluating existing technical debt, team capabilities, and strategic goals." },
      { step: "Gap & Vulnerability Analysis", description: "Identifying critical risks, software bottlenecks, and architectural debt." },
      { step: "Strategic Roadmap", description: "Delivering a prioritized, phased implementation plan with estimated ROI." },
      { step: "Execution Guidance", description: "Guiding internal engineering leadership and ensuring stakeholder alignment." }
    ],
    technologies: ["AWS Architecture", "Enterprise Security", "Microservices", "Agile", "DevSecOps", "CI/CD"],
    benefits: [
      "Avoid costly multi-million dollar tech stack missteps",
      "Objective, vendor-agnostic technology evaluations",
      "Clear executive roadmaps aligning technology with business valuation",
      "Rapid turnaround on technical due diligence for acquisitions"
    ],
    faq: [
      {
        question: "Do you offer fractional CTO retainers?",
        answer: "Yes, we provide fractional CTO and technical advisory services for growing organizations seeking senior architectural leadership without full-time executive overhead."
      }
    ]
  }
];

export const services: ServiceItem[] = rawServices.map(s => ({
  ...s,
  description: s.shortDescription
}));

export default services;

