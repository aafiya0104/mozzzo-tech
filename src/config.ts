// ============================================================================
// Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Mozzzo - Professional Websites & Apps That Grow Your Business",
  description: "We build fast, mobile-friendly websites and apps for businesses. From design to launch, we handle everything—hosting, domain, CRM setup, and AI tools.",
  language: "en",
};

// ============================================================================
// Navigation Configuration
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  items: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  logo: "MOZZZO",
  items: [
    { label: "Services", href: "#services" },
    { label: "Works", href: "#works" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
};

// ============================================================================
// Hero Section Configuration
// ============================================================================

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  servicesLabel: string;
  copyright: string;
}

export const heroConfig: HeroConfig = {
  title: "MOZZZO",
  subtitle: "Professional Websites & Apps That Grow Your Business",
  backgroundImage: "/hero-main.jpg",
  servicesLabel: "Web Development | Mobile Apps | AI Solutions",
  copyright: "© 2026 Mozzzo Digital Agency",
};

// ============================================================================
// About Section Configuration
// ============================================================================

export interface AboutConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  authorImage: string;
  authorName: string;
  authorBio: string;
}

export const aboutConfig: AboutConfig = {
  titleLine1: "We build digital experiences",
  titleLine2: "that transform businesses and drive growth.",
  description: "Mozzzo is a full-service digital agency specializing in custom websites, mobile apps, and AI-powered solutions. We handle everything from design to launch, including hosting, domain setup, CRM integration, and ongoing support, so you can focus on running your business.",
  image1: "/about-1.jpg",
  image1Alt: "Mozzzo Digital Agency Workspace",
  image2: "/about-2.jpg",
  image2Alt: "Web Development in Action",
  authorImage: "/photographer.jpg",
  authorName: "Marcus Chen",
  authorBio: "Founder & Lead Developer with 10+ years of experience building digital products for startups and enterprises. Passionate about creating technology that makes a real impact.",
};

// ============================================================================
// Works Section Configuration
// ============================================================================

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface WorksConfig {
  title: string;
  subtitle: string;
  projects: WorkItem[];
}

export const worksConfig: WorksConfig = {
  title: "Our Craft",
  subtitle: "A showcase of our finest digital work.",
  projects: [
    {
      id: 1,
      title: "Maison Elegance",
      category: "E-Commerce",
      image: "/work-1.jpg"
    },
    {
      id: 2,
      title: "Nexus Digital",
      category: "Agency Website",
      image: "/work-2.jpg"
    },
    {
      id: 3,
      title: "Vertex SaaS",
      category: "Web Application",
      image: "/work-3.jpg"
    },
    {
      id: 4,
      title: "HealthConnect",
      category: "Mobile App",
      image: "/work-4.jpg"
    },
  ],
};

// ============================================================================
// Services Section Configuration
// ============================================================================

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  title: "Our Services",
  subtitle: "Complete digital solutions tailored to your business needs.",
  services: [
    {
      id: "01",
      title: "Custom Website Development",
      description: "Fast-loading, mobile-responsive websites built with modern technology. We create sites that look professional, rank on Google, and turn visitors into customers.",
      image: "/service-1.jpg"
    },
    {
      id: "02",
      title: "Mobile & Web Apps",
      description: "Custom applications for iOS, Android, and web browsers. Perfect for booking systems, customer portals, internal tools, or product catalogs.",
      image: "/service-2.jpg"
    },
    {
      id: "03",
      title: "Brand Identity & Logo Design",
      description: "Professional logos, color schemes, and brand guidelines that make your business memorable. We create visual identities that stand out and build trust.",
      image: "/service-3.jpg"
    },
    {
      id: "04",
      title: "Free Domain and Free Hosting",
      description: "We include a free domain name (.com, .net, or .co) and one year of premium, secure hosting with 99.9% uptime for every website project.",
      image: "/service-1.jpg"
    },
    {
      id: "05",
      title: "AI Integration & Automation",
      description: "Add chatbots, automated customer support, and smart features to your website. Save time by automating repetitive tasks with AI technology.",
      image: "/service-4.jpg"
    },
  ],
};

// ============================================================================
// Testimonials Section Configuration
// ============================================================================

export interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export interface TestimonialsConfig {
  title: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  title: "Client Voices",
  testimonials: [
    {
      id: 1,
      name: "Sarah Mitchell",
      title: "CEO, Bloom Boutique",
      quote: "Mozzzo transformed our online presence completely. Our new e-commerce site increased sales by 150% in just three months. Their attention to detail and ongoing support is exceptional.",
      image: "/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "David Park",
      title: "Founder, TechStart Inc",
      quote: "The team at Mozzzo delivered our SaaS platform ahead of schedule and exceeded all expectations. Their technical expertise and creative problem-solving made all the difference.",
      image: "/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      title: "Marketing Director, Apex Corp",
      quote: "Working with Mozzzo was a game-changer for our brand. They understood our vision immediately and created a website that truly represents who we are.",
      image: "/testimonial-3.jpg"
    },
  ],
};

// ============================================================================
// Pricing Section Configuration
// ============================================================================

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  unit: string;
  featured: boolean;
  features: string[];
}

export interface PricingConfig {
  title: string;
  subtitle: string;
  ctaButtonText: string;
  plans: PricingPlan[];
}

export const pricingConfig: PricingConfig = {
  title: "Investment",
  subtitle: "Transparent pricing for every stage of your business growth.",
  ctaButtonText: "Get Started",
  plans: [
    {
      id: 1,
      name: "Starter",
      price: 999,
      unit: "one-time",
      featured: false,
      features: [
        "5-page professional website",
        "Mobile-responsive design",
        "Free domain (.com/.net)",
        "1 year hosting included",
        "Basic SEO setup",
        "Contact form integration"
      ]
    },
    {
      id: 2,
      name: "Business",
      price: 2499,
      unit: "one-time",
      featured: true,
      features: [
        "Everything in Starter",
        "10+ pages with custom design",
        "Professional logo design",
        "CRM integration",
        "WhatsApp Business setup",
        "AI chatbot integration",
        "Advanced SEO optimization",
        "6 months support"
      ]
    },
    {
      id: 3,
      name: "Enterprise",
      price: 4999,
      unit: "one-time",
      featured: false,
      features: [
        "Everything in Business",
        "Custom web application",
        "Mobile app (iOS/Android)",
        "Advanced AI automation",
        "Third-party integrations",
        "Priority 24/7 support",
        "Dedicated account manager",
        "12 months maintenance"
      ]
    },
  ],
};

// ============================================================================
// FAQ Section Configuration
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  title: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  title: "FAQ",
  faqs: [
    {
      question: "How long does it take to build a website?",
      answer: "Most websites are completed within 2-4 weeks, depending on complexity. Simple sites can be ready in as little as 1 week, while more complex projects with custom features may take 6-8 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What's included in the free domain and hosting?",
      answer: "Our Starter and Business packages include a free domain name (.com, .net, or .co) and one year of premium hosting with 99.9% uptime guarantee, SSL certificate, daily backups, and 24/7 monitoring. After the first year, hosting renews at competitive market rates."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Absolutely! We offer various support packages ranging from basic maintenance to comprehensive care plans. All our websites come with initial support periods, and you can extend or upgrade support at any time. We handle updates, security patches, and any technical issues."
    },
    {
      question: "Can you help with existing websites or only new builds?",
      answer: "We do both! Whether you need a complete redesign, feature additions to your current site, performance optimization, or migration to a new platform, our team can help. We'll assess your existing site and recommend the best approach for your goals and budget."
    },
    {
      question: "What AI and automation features do you offer?",
      answer: "We integrate various AI solutions including intelligent chatbots, automated customer support, lead qualification, appointment scheduling, email automation, and custom AI workflows tailored to your business processes. These tools save time and improve customer experience."
    },
  ],
};

// ============================================================================
// Blog Section Configuration
// ============================================================================

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
}

export interface BlogConfig {
  title: string;
  subtitle: string;
  allPostsLabel: string;
  readMoreLabel: string;
  readTimePrefix: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  title: "Insights",
  subtitle: "Latest thoughts on web design, development, and digital strategy.",
  allPostsLabel: "All Posts",
  readMoreLabel: "Read More",
  readTimePrefix: "Read ",
  posts: [
    {
      id: 1,
      title: "10 Web Design Trends Shaping 2024",
      excerpt: "From AI-powered personalization to immersive 3D experiences, discover the design trends that are defining the future of web development.",
      readTime: "5 min",
      date: "Dec 15, 2024",
      image: "/blog-1.jpg",
      category: "Design"
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Customer Service",
      excerpt: "Explore how businesses are using AI chatbots and automation to provide 24/7 support while reducing costs and improving satisfaction.",
      readTime: "7 min",
      date: "Dec 8, 2024",
      image: "/blog-2.jpg",
      category: "Technology"
    },
  ],
};

// ============================================================================
// Contact Section Configuration
// ============================================================================

export interface ContactFormOption {
  value: string;
  label: string;
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypeOptions: ContactFormOption[];
  messageLabel: string;
  submitButtonText: string;
  image: string;
}

export const contactConfig: ContactConfig = {
  title: "Let's    Build    Together",
  subtitle: "Ready to transform your digital presence? Let's discuss your project.",
  nameLabel: "Name *",
  emailLabel: "Email *",
  projectTypeLabel: "Project Type",
  projectTypePlaceholder: "Select project type...",
  projectTypeOptions: [
    { value: "website", label: "Website Development" },
    { value: "app", label: "Mobile/Web App" },
    { value: "branding", label: "Brand Identity" },
    { value: "ai", label: "AI Integration" },
    { value: "other", label: "Other" },
  ],
  messageLabel: "Tell us about your project",
  submitButtonText: "Send Message",
  image: "/contact.jpg",
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterConfig {
  marqueeText: string;
  marqueeHighlightChars: string[];
  navLinks1: FooterLink[];
  navLinks2: FooterLink[];
  ctaText: string;
  ctaHref: string;
  copyright: string;
  tagline: string;
}

export const footerConfig: FooterConfig = {
  marqueeText: "Let's Build Something Amazing!",
  marqueeHighlightChars: ["B", "A"],
  navLinks1: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Works", href: "#works" },
    { label: "About", href: "#about" },
  ],
  navLinks2: [
    { label: "Instagram", href: "#", icon: "Instagram" },
    { label: "LinkedIn", href: "#", icon: "Linkedin" },
    { label: "Twitter", href: "#", icon: "Twitter" },
  ],
  ctaText: "Start Your Project",
  ctaHref: "#contact",
  copyright: "© 2026 Mozzzo Digital Agency. All rights reserved.",
  tagline: "Crafted with passion in Mumbai",
};
