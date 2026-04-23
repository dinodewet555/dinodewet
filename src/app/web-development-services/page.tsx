import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Globe,
  ShoppingBag,
  Layers,
  RefreshCw,
  AppWindow,
  Wrench,
  Zap,
  Search,
  Target,
  BarChart2,
  MapPin,
  Briefcase,
  UserCheck,
  CheckCircle,
  ChevronDown,
  Monitor,
  Smartphone,
  Lock,
  TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services | Fast, Scalable, High-Converting Websites",
  description:
    "Professional web development services for startups, local businesses, ecommerce, SaaS, and B2B. Custom websites built for speed, SEO, and conversions using Next.js, WordPress, and Shopify.",
  keywords: [
    "Web Development Services",
    "Custom Website Development",
    "WordPress Development",
    "Ecommerce Development",
    "Next.js Developer",
    "Website Redesign",
    "Landing Page Development",
    "Web Application Development",
    "Dino de Wet",
    "Cape Town Web Developer",
    "South Africa Web Development",
  ],
  alternates: {
    canonical: "https://dinodewet.co.za/web-development-services",
  },
  openGraph: {
    title: "Web Development Services | Fast, Scalable, High-Converting Websites",
    description:
      "Professional web development services for startups, local businesses, ecommerce, SaaS, and B2B. Custom websites built for speed, SEO, and conversions.",
    url: "https://dinodewet.co.za/web-development-services",
    images: [
      {
        url: "/images/semantic-seo-services.png",
        width: 1200,
        height: 630,
        alt: "Web Development Services — Fast, Scalable, High-Converting Websites",
      },
    ],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.co.za/web-development-services#webpage",
      "url": "https://dinodewet.co.za/web-development-services",
      "name": "Web Development Services | Fast, Scalable, High-Converting Websites",
      "description":
        "Professional web development services for startups, local businesses, ecommerce, SaaS, and B2B. Custom websites built for speed, SEO, and conversions.",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "about": { "@id": "https://dinodewet.co.za/web-development-services#service" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dinodewet.co.za",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Web Development Services",
            "item": "https://dinodewet.co.za/web-development-services",
          },
        ],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://dinodewet.co.za/web-development-services#service",
      "name": "Web Development Services",
      "url": "https://dinodewet.co.za/web-development-services",
      "description":
        "End-to-end web development services including custom website builds, WordPress development, ecommerce, landing pages, web applications, redesigns, and ongoing maintenance — all built for performance, SEO, and conversions.",
      "provider": { "@id": "https://dinodewet.co.za/#person" },
      "areaServed": "Worldwide",
      "serviceType": "Web Development",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Service Catalogue",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Website Development",
              "description": "Bespoke design and development with brand-aligned layouts and fully responsive builds.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WordPress Development",
              "description": "Custom themes, plugin configuration, and content management systems built for ease of use.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ecommerce Development",
              "description": "Shopify and WooCommerce store builds with product catalogues and secure checkout flows.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Landing Page Development",
              "description": "Conversion-focused landing pages with fast deployment and A/B testing readiness.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Redesign Services",
              "description": "UX upgrades, visual refresh, and performance improvements for existing websites.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Application Development",
              "description": "Portals, dashboards, booking systems, and internal business tools.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Maintenance and Support",
              "description": "Ongoing updates, security patches, backups, and technical fixes.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.co.za/web-development-services#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does a website project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Timelines vary by scope. A focused landing page or small business website typically takes 2–3 weeks. A multi-page lead generation site runs 4–6 weeks. A full ecommerce build or custom web application can take 8–14 weeks depending on the number of integrations, custom features, and content volume.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you build WordPress websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. WordPress development is a core service. Builds include custom theme development, plugin selection and configuration, performance optimisation, security hardening, and a CMS setup that allows the client to manage content without developer access.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you redesign my current website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Website redesign projects begin with a UX and performance audit of the existing site, identifying structural, visual, and technical improvements. The redesign addresses layout, load speed, mobile experience, conversion paths, and brand clarity — while preserving or improving existing SEO equity.",
          },
        },
        {
          "@type": "Question",
          "name": "Will my website be mobile-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Every website is built mobile-first. Responsive design is not a feature that gets added at the end — it shapes every layout decision from the wireframe stage. Sites are tested across multiple device sizes and browsers before launch.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you provide hosting and maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Hosting guidance is provided as part of every project and appropriate hosting environments are recommended based on the platform and performance requirements. Ongoing maintenance and support packages are available to cover updates, security patches, backups, and technical fixes after launch.",
          },
        },
      ],
    },
  ],
};

const coreServices = [
  {
    icon: Code2,
    title: "Custom Website Development",
    tag: "Bespoke",
    description:
      "Off-the-shelf templates are built for nobody in particular. A custom website is built around your specific business — your offers, your audience, your conversion goals, and your brand. Every element is coded with purpose, producing a faster, more credible, and more effective digital asset than a drag-and-drop alternative.",
    bullets: [
      "Bespoke design and coding",
      "Brand-aligned layouts",
      "Fully responsive builds",
    ],
  },
  {
    icon: Globe,
    title: "WordPress Development",
    tag: "CMS",
    description:
      "WordPress powers over 40% of the web for a reason. When built correctly — with a custom theme, a curated plugin stack, and a clean information architecture — it gives businesses a powerful, manageable content platform. The emphasis is on lean builds that are fast, secure, and easy for non-technical teams to maintain without developer dependency.",
    bullets: [
      "Custom theme development",
      "Plugin selection and configuration",
      "Easy content management setup",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Development",
    tag: "Commerce",
    description:
      "An ecommerce website is a revenue system, not just a product catalogue. Builds are structured to move buyers efficiently from discovery through to checkout — with clean product page architecture, logical category structures, trust signals at key friction points, and checkout flows engineered to reduce abandonment.",
    bullets: [
      "Shopify store builds",
      "WooCommerce development",
      "Product catalogue architecture",
      "Secure checkout flows",
    ],
  },
  {
    icon: Target,
    title: "Landing Page Development",
    tag: "Conversion",
    description:
      "A landing page has one job: convert. These builds are stripped of distraction, structured around a single audience and a single offer, and optimised for the specific traffic source driving visitors to them. Fast to deploy, measurable from day one, and ready for A/B testing to improve conversion rates over time.",
    bullets: [
      "Conversion-focused layouts",
      "Fast deployment",
      "A/B testing ready",
    ],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign Services",
    tag: "Rebuild",
    description:
      "An outdated website erodes trust faster than having no website at all. Redesign projects start with an honest audit of what is costing the existing site — in speed, in conversions, in search visibility, and in brand perception. What gets rebuilt is faster, cleaner, better structured, and measurably more effective than what it replaces.",
    bullets: [
      "UX and structure upgrades",
      "Visual and brand refresh",
      "Performance improvements",
    ],
  },
  {
    icon: AppWindow,
    title: "Web Application Development",
    tag: "Applications",
    description:
      "Some business problems require more than a website — they need a custom digital tool. Whether that is a client portal, an internal dashboard, a booking system, or an automated workflow interface, web application development creates purpose-built software that runs in the browser and integrates with the business systems already in use.",
    bullets: [
      "Portals and dashboards",
      "Booking systems",
      "Internal business tools",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance and Support",
    tag: "Ongoing",
    description:
      "A website that isn't maintained degrades. Plugins fall out of date, security vulnerabilities open, performance drifts, and content grows stale. Maintenance packages ensure none of this happens — covering regular updates, security patching, backup management, and ongoing technical fixes so the site continues to perform at the level it was built for.",
    bullets: [
      "Regular updates",
      "Security patches",
      "Backup management",
      "Ongoing technical fixes",
    ],
  },
];

const technologies = [
  {
    category: "CMS Platforms",
    items: ["WordPress", "Webflow", "Shopify"],
  },
  {
    category: "Front-End",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    category: "Back-End",
    items: ["PHP", "Node.js", "REST APIs", "Database systems"],
  },
  {
    category: "Performance & SEO",
    items: ["Core Web Vitals", "Schema markup", "Structured data", "Semantic HTML"],
  },
];

const industries = [
  {
    icon: MapPin,
    industry: "Local Businesses",
    description:
      "Local businesses compete on trust, visibility, and accessibility. Websites are built as lead generation systems — with clear service areas, booking or contact functionality, local schema markup, and page structures that help search engines understand precisely what is offered and where. The goal is qualified local enquiries, not just traffic.",
    bullets: ["Lead generation structure", "Booking and contact functionality"],
  },
  {
    icon: ShoppingBag,
    industry: "Ecommerce Brands",
    description:
      "Every percentage point of conversion rate improvement on an ecommerce site has a direct revenue impact. Builds prioritise category page clarity, product page completeness, checkout flow efficiency, and trust signal placement — turning browsers into buyers through thoughtful architecture rather than just visual design.",
    bullets: ["Store builds and migrations", "Conversion rate optimisation"],
  },
  {
    icon: BarChart2,
    industry: "SaaS Companies",
    description:
      "SaaS websites need to do a specific job: explain a complex product clearly, build credibility fast, and move the right visitor toward a trial or demo. Builds include feature pages, pricing page architecture, integration showcases, and demo funnels that reduce the distance between landing and activation.",
    bullets: ["Product and feature pages", "Demo and trial funnels"],
  },
  {
    icon: Briefcase,
    industry: "B2B Companies",
    description:
      "B2B buyers spend more time researching before contacting. Service pages need depth, authority signals, and clear differentiation. Lead capture systems — forms, gated resources, consultation schedulers — are built into the architecture so the site works as a sales tool, not just a credential document.",
    bullets: ["Service and solution pages", "Lead capture systems"],
  },
  {
    icon: UserCheck,
    industry: "Professional Services",
    description:
      "Lawyers, accountants, consultants, and healthcare providers live and die by trust and credibility. Websites for professional service businesses are structured to demonstrate expertise, communicate credentials, and make the first step — a call, a booking, or an enquiry — as frictionless as possible.",
    bullets: ["Lawyers, accountants, consultants", "Healthcare providers"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery and Planning",
    description:
      "Every project begins with a detailed discovery process. We map your business goals, define the target audience, identify the features and integrations required, and establish the success metrics the project will be measured against. Nothing is built until the strategy is clear.",
    bullets: ["Goals and success metrics", "Audience definition", "Required features and integrations"],
  },
  {
    step: "02",
    title: "UX Wireframes and Structure",
    description:
      "Before a single line of code is written, the information architecture and user journey are mapped in wireframe form. Navigation logic, conversion paths, mobile-first layout priorities, and page hierarchy are validated at this stage — making the development phase faster and the final build more effective.",
    bullets: ["Navigation architecture", "Conversion path design", "Mobile-first layouts"],
  },
  {
    step: "03",
    title: "Design and Branding",
    description:
      "Visual design translates the wireframe structure into a brand experience. Typography, colour, spacing, imagery treatment, and component design are established to create an interface that is distinctive, trustworthy, and consistent across every page and device size.",
    bullets: ["Visual identity alignment", "Interface and component design"],
  },
  {
    step: "04",
    title: "Development and Integrations",
    description:
      "The approved designs are built into clean, performant code. CRM and email integrations are connected, contact forms are configured, analytics tracking is installed, and third-party tools are integrated so the website functions as a complete business system from launch.",
    bullets: ["Front-end and back-end development", "CRM and form integrations", "Analytics and tracking setup"],
  },
  {
    step: "05",
    title: "Testing and Launch",
    description:
      "Before anything goes live, the site goes through structured testing: speed benchmarks against Core Web Vitals targets, cross-browser and cross-device checks, form submission testing, link validation, and a full QA review. Launch happens only when every test passes.",
    bullets: ["Speed and Core Web Vitals testing", "Cross-browser and device checks", "Full QA review"],
  },
  {
    step: "06",
    title: "Support and Growth",
    description:
      "Launch is the beginning, not the end. Post-launch support covers technical maintenance, content updates, and iterative improvements. As traffic data and user behaviour become available, conversion rate improvements and SEO enhancements are applied to keep the site improving over time.",
    bullets: ["Ongoing updates and maintenance", "CRO improvements", "SEO enhancements"],
  },
];

const whyUs = [
  {
    icon: Zap,
    title: "Built for Performance",
    description:
      "Speed is not an aesthetic preference — it is a business metric. Slow websites lose visitors before they have the chance to convert. Every build targets the fastest possible load times, with Core Web Vitals scores that meet or exceed Google's thresholds for both ranking and user experience quality.",
  },
  {
    icon: Search,
    title: "Built for SEO",
    description:
      "Clean semantic HTML, crawlable site architecture, schema-ready page structures, and properly implemented metadata are built into every project from the start. SEO is not retrofitted after development — it shapes how the site is coded.",
  },
  {
    icon: Target,
    title: "Built for Conversions",
    description:
      "A website that doesn't convert is an expensive brochure. Every layout decision — CTA placement, form design, heading hierarchy, content structure, and user journey flow — is made with the conversion goal in mind, not just visual preference.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description:
      "Businesses grow. Websites need to grow with them. Architecture decisions are made with scalability in mind: modular templates, flexible content structures, and platforms chosen for their ability to handle new pages, new features, and new markets without requiring a full rebuild.",
  },
];

const features = [
  { icon: Smartphone, label: "Mobile responsive design" },
  { icon: Lock, label: "SSL security" },
  { icon: Monitor, label: "Contact forms" },
  { icon: BarChart2, label: "Analytics setup" },
  { icon: Zap, label: "Speed optimisation" },
  { icon: Globe, label: "CMS access" },
  { icon: Search, label: "Basic on-page SEO setup" },
  { icon: RefreshCw, label: "Backup systems" },
];

const pricing = [
  {
    title: "Starter Website Package",
    detail: "Small business",
    description:
      "A clean, fast, mobile-first website for small businesses that need a credible online presence, clear service information, and a working lead capture system. Includes up to 5 pages, contact form, analytics, and basic on-page SEO setup.",
  },
  {
    title: "Growth Website Package",
    detail: "Lead generation",
    description:
      "A multi-page website built as a lead generation system — with service pages, location or industry-specific landing pages, conversion-optimised CTAs, and an information architecture designed to grow organic traffic over time.",
  },
  {
    title: "Ecommerce Package",
    detail: "Product stores",
    description:
      "A full ecommerce build on Shopify or WooCommerce. Includes product catalogue architecture, category page structure, checkout flow optimisation, payment integration, and launch-ready SEO foundations.",
  },
  {
    title: "Custom Development Plan",
    detail: "Advanced builds",
    description:
      "Fully scoped builds for projects requiring advanced features, custom integrations, web applications, multi-market deployments, or API-driven functionality. Pricing and timeline determined after a detailed discovery session.",
  },
];

const faqs = [
  {
    question: "How long does a website project take?",
    answer:
      "Timelines vary by scope. A focused landing page or small business website typically takes 2–3 weeks. A multi-page lead generation site runs 4–6 weeks. A full ecommerce build or custom web application can take 8–14 weeks depending on the number of integrations, custom features, and content volume.",
  },
  {
    question: "Do you build WordPress websites?",
    answer:
      "Yes. WordPress development is a core service. Builds include custom theme development, plugin selection and configuration, performance optimisation, security hardening, and a CMS setup that allows the client to manage content without developer access.",
  },
  {
    question: "Can you redesign my current website?",
    answer:
      "Yes. Website redesign projects begin with a UX and performance audit of the existing site, identifying structural, visual, and technical improvements. The redesign addresses layout, load speed, mobile experience, conversion paths, and brand clarity — while preserving or improving existing SEO equity.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Every website is built mobile-first. Responsive design is not a feature that gets added at the end — it shapes every layout decision from the wireframe stage. Sites are tested across multiple device sizes and browsers before launch.",
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer:
      "Hosting guidance is provided as part of every project and appropriate hosting environments are recommended based on the platform and performance requirements. Ongoing maintenance and support packages are available to cover updates, security patches, backups, and technical fixes after launch.",
  },
];

export default function WebDevelopmentServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-0 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-ambient" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end pb-0">
            <AnimatedSection className="pb-20">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-6"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                Service
              </p>
              <h1
                className="font-heading font-bold text-white mb-6"
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Web Development Services That Build Fast, Scalable, High-Converting Websites
              </h1>
              <p
                style={{
                  color: "#a1a1a1",
                  maxWidth: "520px",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                  fontFamily: "var(--font-body)",
                  marginBottom: "2.5rem",
                }}
              >
                A website is your most important business asset — or your biggest missed opportunity. Professional web development services produce sites that load fast, rank well, convert visitors, and scale with the business. Built for startups, local businesses, ecommerce brands, SaaS companies, and B2B.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Get a Quote <ArrowRight size={14} />
                </Link>
                <Link
                  href="#services"
                  className="btn-secondary inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  View Services
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200} className="relative pb-20">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Performance", value: "Core Web Vitals" },
                  { label: "Architecture", value: "SEO-Ready" },
                  { label: "Design", value: "Mobile-First" },
                  { label: "Purpose", value: "Conversion-Led" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border p-6"
                    style={{
                      borderColor: "#1f1f1f",
                      background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.015)",
                    }}
                  >
                    <p
                      className="font-heading font-bold text-white mb-1"
                      style={{ fontSize: "1.15rem", letterSpacing: "-0.02em" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Are Web Development Services */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                Foundation
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                What Are Web Development Services?
              </h2>
              <p
                className="mb-5"
                style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
              >
                Web development services are the end-to-end process of planning, designing, building, and maintaining websites and web applications that serve specific business objectives. The outcomes are tangible: better user experience, faster load speeds, more qualified leads, and a stronger foundation for organic search visibility.
              </p>
              <p
                style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
              >
                Professional web development goes beyond making a site look presentable. It produces a digital system structured for the way users navigate, the way search engines crawl, and the way businesses convert interest into action.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="flex flex-col gap-4">
                <div
                  className="rounded-xl border p-6"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <h3
                    className="font-heading font-semibold text-white mb-3"
                    style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
                  >
                    What does a web development agency do?
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Build custom websites aligned to business goals",
                      "Improve site functionality and user experience",
                      "Maintain performance, security, and uptime",
                      "Integrate business tools and third-party systems",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={14} color="#ffffff" className="mt-0.5 flex-shrink-0" />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="rounded-xl border p-6"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <h3
                    className="font-heading font-semibold text-white mb-3"
                    style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
                  >
                    Why do businesses need professional web development?
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      "DIY sites constrain growth and signal low credibility",
                      "Slow sites reduce conversions and increase bounce rate",
                      "Poor UX damages trust and hurts search rankings",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={14} color="#ffffff" className="mt-0.5 flex-shrink-0" />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Services
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Our Web Development Services
            </h2>
            <p
              className="mb-16"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "560px",
              }}
            >
              From first build to ongoing growth — a complete development service covering every stage and type of web project a business needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 80}>
                  <div
                    className="card-hover p-8 rounded-xl border h-full"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center border"
                        style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}
                      >
                        <Icon size={18} color="#ffffff" strokeWidth={1.5} />
                      </div>
                      <span
                        className="text-xs font-medium uppercase tracking-widest px-2.5 py-1 rounded border"
                        style={{
                          color: "#a1a1a1",
                          borderColor: "#2a2a2a",
                          background: "rgba(255,255,255,0.03)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {service.tag}
                      </span>
                    </div>
                    <h3
                      className="font-heading font-semibold text-white mb-3"
                      style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm mb-5"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
                      {service.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#ffffff" }} />
                          <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                            {b}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms and Technologies */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Stack
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Platforms and Technologies We Use
            </h2>
            <p
              className="mb-16"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "540px",
              }}
            >
              The right technology is the one that best serves the project's requirements — for performance, maintainability, scalability, and the client's ability to manage their own content. These are the platforms and technologies used across projects.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((group, i) => (
              <AnimatedSection key={group.category} delay={i * 80}>
                <div
                  className="rounded-xl border p-6 h-full"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <p
                    className="text-xs font-medium uppercase tracking-widest mb-5"
                    style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                  >
                    {group.category}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#ffffff" }} />
                        <p className="text-sm font-medium text-white" style={{ fontFamily: "var(--font-body)" }}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Industries
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Industries We Serve
            </h2>
            <p
              className="mb-16"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "540px",
              }}
            >
              Every industry has different audience behaviour, conversion dynamics, and digital requirements. The approach is tailored to what the business actually needs — not applied from a generic template.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.industry} delay={i * 80}>
                  <div
                    className="card-hover p-8 rounded-xl border h-full"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center border mb-5"
                      style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}
                    >
                      <Icon size={18} color="#ffffff" strokeWidth={1.5} />
                    </div>
                    <h3
                      className="font-heading font-semibold text-white mb-3"
                      style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
                    >
                      {item.industry}
                    </h3>
                    <p
                      className="text-sm mb-4"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
                      {item.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#ffffff" }} />
                          <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                            {b}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Process
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Our Web Development Process
            </h2>
            <p
              className="mb-16"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "540px",
              }}
            >
              A structured six-step process designed to eliminate ambiguity, reduce revision cycles, and produce a finished site that meets its objectives from the first day it goes live.
            </p>
          </AnimatedSection>

          <div className="flex flex-col gap-4">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 70}>
                <div
                  className="rounded-xl border p-8"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    <div>
                      <p
                        className="font-heading font-bold mb-2"
                        style={{
                          fontSize: "3rem",
                          color: "rgba(255,255,255,0.08)",
                          letterSpacing: "-0.04em",
                          lineHeight: 1,
                        }}
                      >
                        {step.step}
                      </p>
                      <h3
                        className="font-heading font-semibold text-white"
                        style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}
                      >
                        Step {step.step}: {step.title}
                      </h3>
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
                      {step.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#ffffff" }} />
                          <p className="text-xs font-medium" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                            {b}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Why Us
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Why Choose Our Web Development Agency?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 100}>
                  <div
                    className="card-hover p-8 rounded-xl border h-full"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center border mb-5"
                      style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}
                    >
                      <Icon size={18} color="#ffffff" strokeWidth={1.5} />
                    </div>
                    <h3
                      className="font-heading font-semibold text-white mb-3"
                      style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Included */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                Included
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                Features Included in Every Website
              </h2>
              <p
                style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
              >
                Every project ships with the essentials in place — not as paid extras. These are the baseline capabilities that make a website a functional, secure, and measurable business asset from day one.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.label}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-lg border"
                      style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                    >
                      <Icon size={14} color="#a1a1a1" strokeWidth={1.5} className="flex-shrink-0" />
                      <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                        {feature.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Outcomes
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Results You Can Expect
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                result: "More qualified leads",
                detail:
                  "Pages structured around clear offers and intent-aligned copy attract the right visitors and move them toward contact.",
              },
              {
                result: "Better conversion rates",
                detail:
                  "Conversion-led layout design, strategic CTA placement, and frictionless user journeys turn more visitors into customers.",
              },
              {
                result: "Faster website speed",
                detail:
                  "Lean code, optimised assets, and appropriate hosting produce load times that satisfy both users and Core Web Vitals benchmarks.",
              },
              {
                result: "Lower bounce rate",
                detail:
                  "When a site loads fast, communicates clearly, and answers the visitor's question immediately, they stay longer.",
              },
              {
                result: "Higher search visibility",
                detail:
                  "Clean semantic structure, crawlable architecture, and schema-ready pages give organic performance a strong technical foundation.",
              },
              {
                result: "Stronger brand trust",
                detail:
                  "A professional, fast, well-structured website signals competence and credibility to every visitor — before they read a single word.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.result} delay={i * 80}>
                <div
                  className="rounded-xl border p-6 h-full"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                >
                  <p
                    className="font-heading font-semibold text-white mb-2"
                    style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}
                  >
                    {item.result}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}
                  >
                    {item.detail}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Pricing
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Pricing Models
            </h2>
            <p
              className="mb-16"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "520px",
              }}
            >
              Projects are scoped and priced based on what is actually needed — not padded packages. Exact investment is confirmed after a discovery conversation where requirements are fully understood.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricing.map((plan, i) => (
              <AnimatedSection key={plan.title} delay={i * 100}>
                <div
                  className="card-hover p-8 rounded-xl border h-full"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className="font-heading font-semibold text-white"
                      style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}
                    >
                      {plan.title}
                    </h3>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded border flex-shrink-0 ml-3"
                      style={{
                        color: "#a1a1a1",
                        borderColor: "#2a2a2a",
                        background: "rgba(255,255,255,0.03)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {plan.detail}
                    </span>
                  </div>
                  <p
                    className="text-sm mb-6"
                    style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                  >
                    {plan.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Enquire <ArrowRight size={13} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Proof
            </p>
            <h2
              className="font-heading font-bold text-white mb-6"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Results and Case Studies
            </h2>
            <p
              className="mb-12"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "560px",
              }}
            >
              Verified project metrics — including conversion rate improvements, speed benchmarks, traffic growth after redesigns, and ecommerce revenue changes — are shared during the discovery process. The most relevant examples are matched to your industry and project type.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                metric: "Conversion Rate",
                outcome: "Increase in enquiry and lead form submissions post-launch",
                context: "Local service business redesign",
              },
              {
                metric: "Speed Improvement",
                outcome: "Significant reduction in load time and Core Web Vitals uplift",
                context: "WordPress rebuild — Next.js migration",
              },
              {
                metric: "Traffic Growth",
                outcome: "Growth in organic sessions following technical redesign",
                context: "B2B professional services",
              },
              {
                metric: "Ecommerce Revenue",
                outcome: "Revenue increase after checkout flow and category page rebuild",
                context: "WooCommerce ecommerce store",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.metric} delay={i * 80}>
                <div
                  className="rounded-xl border p-6 h-full"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                >
                  <p
                    className="text-xs font-medium uppercase tracking-widest mb-4"
                    style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                  >
                    {item.metric}
                  </p>
                  <p
                    className="font-heading font-semibold text-white mb-3"
                    style={{ fontSize: "0.95rem", lineHeight: 1.4, letterSpacing: "-0.01em" }}
                  >
                    {item.outcome}
                  </p>
                  <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    {item.context}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              FAQ
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.question} delay={i * 60}>
                <details
                  className="group rounded-xl border overflow-hidden"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <summary
                    className="flex items-start justify-between gap-4 p-6 cursor-pointer list-none"
                    style={{ userSelect: "none" }}
                  >
                    <h3
                      className="font-heading font-semibold text-white"
                      style={{ fontSize: "1rem", letterSpacing: "-0.01em", lineHeight: 1.4 }}
                    >
                      {faq.question}
                    </h3>
                    <ChevronDown
                      size={16}
                      color="#a1a1a1"
                      className="flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-6 pb-6">
                    <p
                      className="text-sm"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-6"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Get Started
            </p>
            <h2
              className="font-heading font-bold text-white mb-5"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Get a Custom Web Development Quote
            </h2>
            <p
              className="mb-10"
              style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
            >
              Every project starts with a conversation about what the business actually needs — not a service menu to choose from. Book a consultation, request a written proposal, or describe your project and receive a scoped plan tailored to your goals, timeline, and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Book a Consultation <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Request a Proposal
              </Link>
            </div>
            <p
              className="mt-8 text-xs"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Consultations are free. A written proposal with scope, timeline, and investment is provided before any commitment is required.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
