import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Shield,
  FileText,
  Users,
  BarChart3,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Droplets,
  Wind,
  TreePine,
  Globe,
  Award,
  Clock,
  Star,
  Send,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const GDPRCompliance = lazy(() => import("./pages/GDPRCompliance"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));

/* ─── Hook: animate elements on scroll ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Data ─── */
const SERVICES = [
  {
    icon: FileText,
    title: "Environmental Impact Assessment",
    desc: "Comprehensive EIA studies for industrial, commercial, and infrastructure projects. We guide you through every regulatory step.",
    tags: ["EIA", "Due Diligence", "Permitting"],
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    desc: "Stay ahead of evolving environmental legislation. We audit, monitor, and ensure your operations meet all national and EU requirements.",
    tags: ["EU Directives", "ISO 14001", "Auditing"],
  },
  {
    icon: Droplets,
    title: "Water & Waste Management",
    desc: "Design and implementation of water treatment solutions, waste reduction strategies, and circular economy programs.",
    tags: ["Water Quality", "Waste Reduction", "Circular Economy"],
  },
  {
    icon: Wind,
    title: "Air Quality & Emissions",
    desc: "Monitoring, reporting, and mitigation strategies for air pollutants and greenhouse gas emissions across all industry sectors.",
    tags: ["GHG Reporting", "Emissions Trading", "Monitoring"],
  },
  {
    icon: TreePine,
    title: "Biodiversity & Habitat",
    desc: "Ecological surveys, habitat restoration plans, and biodiversity management frameworks for responsible land use.",
    tags: ["Ecological Surveys", "Habitat Restoration", "Natura 2000"],
  },
  {
    icon: Globe,
    title: "Sustainability Strategy",
    desc: "ESG integration, carbon neutrality roadmaps, and sustainability reporting aligned with GRI and CSRD standards.",
    tags: ["ESG", "CSRD", "Carbon Neutrality"],
  },
];

const STATS = [
  { value: "15+", label: "Years of Experience" },
  { value: "320+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Expert Consultants" },
];

const PROJECTS = [
  {
    title: "Danube Industrial Park",
    category: "Environmental Impact Assessment",
    desc: "Full EIA and permitting for a 120-hectare mixed-use industrial development along the Danube corridor.",
  },
  {
    title: "GreenEnergy Wind Farm",
    category: "Biodiversity & Compliance",
    desc: "Ecological impact study and mitigation framework for a 200MW wind energy project, including bird migration analysis.",
  },
  {
    title: "Municipal Water Modernization",
    category: "Water Management",
    desc: "Redesign of wastewater treatment infrastructure serving 350,000 residents, achieving EU compliance ahead of schedule.",
  },
  {
    title: "European Logistics Hub",
    category: "Sustainability Strategy",
    desc: "Carbon neutrality roadmap and ESG integration for a major logistics operator with 12 distribution centers.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Verdalis guided us through a complex EIA process with absolute professionalism. Their expertise saved us months of delays and significant costs.",
    author: "Thomas Weber",
    company: "Weber Industrial Group",
  },
  {
    quote:
      "The sustainability strategy they designed transformed how we operate. We're now a reference point in our industry for environmental responsibility.",
    author: "Ana Dragomir",
    company: "EcoTrans Logistics",
  },
  {
    quote:
      "Their compliance team is outstanding. They identified regulatory gaps we didn't know existed and helped us resolve them before any issues arose.",
    author: "Marc Dupont",
    company: "Danube Energy S.A.",
  },
];

/* ─── Components ─── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    "About",
    "Services",
    "Projects",
    "Testimonials",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-md bg-[hsl(215,50%,23%)] flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span
              className="text-xl tracking-tight font-semibold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="text-[hsl(215,50%,23%)]">Verdalis</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm font-medium text-[hsl(215,25%,35%)] hover:text-[hsl(215,50%,23%)] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {l}
              </a>
            ))}
            <a
              href="tel:+40754900900"
              className="flex items-center gap-1.5 text-sm font-medium text-[hsl(215,25%,35%)] hover:text-[hsl(215,50%,23%)] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Phone className="w-3.5 h-3.5" />
              +40 754 900 900
            </a>
            <Button
              asChild
              size="sm"
              className="bg-[hsl(215,50%,23%)] hover:bg-[hsl(215,50%,18%)] text-white"
            >
              <a href="#contact">Get a Consultation</a>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-6 pb-6 pt-2 shadow-lg">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="block py-3 text-sm font-medium text-[hsl(215,25%,35%)] hover:text-[hsl(215,50%,23%)]"
              onClick={() => setMobileOpen(false)}
            >
              {l}
            </a>
          ))}
          <Button
            asChild
            className="w-full mt-3 bg-[hsl(215,50%,23%)] hover:bg-[hsl(215,50%,18%)]"
          >
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              Get a Consultation
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,20%,98%)] via-[hsl(210,25%,95%)] to-[hsl(152,20%,92%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23253a5c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative shapes */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-[hsl(152,35%,40%)]/5 blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-[hsl(215,50%,23%)]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <Badge
                variant="outline"
                className="mb-6 px-4 py-1.5 text-xs tracking-wide uppercase border-[hsl(152,35%,40%)]/30 text-[hsl(152,35%,30%)] bg-[hsl(152,35%,40%)]/5"
              >
                <Leaf className="w-3.5 h-3.5 mr-1.5" />
                Environmental Consulting Excellence
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold text-[hsl(215,50%,23%)] mb-6">
                Protecting the Environment.{" "}
                <span className="text-[hsl(152,35%,40%)]">
                  Empowering Business.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-[hsl(215,10%,42%)] leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Verdalis delivers expert environmental consulting — from
                regulatory compliance and impact assessments to sustainability
                strategy — helping businesses thrive responsibly.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[hsl(215,50%,23%)] hover:bg-[hsl(215,50%,18%)] text-white px-7 h-12"
                >
                  <a href="#services">
                    Our Services <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[hsl(215,50%,23%)]/20 text-[hsl(215,50%,23%)] hover:bg-[hsl(215,50%,23%)]/5 px-7 h-12"
                >
                  <a href="#contact">Schedule a Call</a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="mt-12 flex items-center gap-6 text-sm text-[hsl(215,10%,42%)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(152,35%,40%)]" />
                  ISO 14001 Certified
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(152,35%,40%)]" />
                  EU Accredited
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(152,35%,40%)]" />
                  Est. 2025
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right side — decorative illustration */}
          <FadeIn delay={0.2} className="hidden lg:block">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-[hsl(215,50%,23%)]/8 to-[hsl(152,35%,40%)]/10 p-8 flex flex-col justify-center items-center gap-6">
                {/* Stats cards floating */}
                <div className="w-full space-y-4">
                  {[
                    { icon: Award, label: "Certified Excellence", val: "ISO 14001" },
                    { icon: BarChart3, label: "Projects Completed", val: "320+" },
                    { icon: Users, label: "Expert Team", val: "40+ Specialists" },
                    { icon: Clock, label: "Established", val: "August 2025" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/80 backdrop-blur rounded-lg p-4 flex items-center gap-4 shadow-sm border border-white/60"
                      style={{
                        transform: `translateX(${i % 2 === 0 ? "0" : "20"}px)`,
                      }}
                    >
                      <div className="w-10 h-10 rounded-md bg-[hsl(215,50%,23%)]/8 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-[hsl(215,50%,23%)]" />
                      </div>
                      <div>
                        <div className="text-xs text-[hsl(215,10%,50%)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {item.label}
                        </div>
                        <div className="text-sm font-semibold text-[hsl(215,50%,23%)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {item.val}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="bg-[hsl(215,50%,23%)] py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                {s.value}
              </div>
              <div className="text-sm text-[hsl(215,30%,75%)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {s.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="rounded-xl bg-gradient-to-br from-[hsl(152,35%,92%)] to-[hsl(215,30%,92%)] aspect-[4/3] flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-16 h-16 rounded-full bg-[hsl(215,50%,23%)]/10 flex items-center justify-center mx-auto">
                    <Leaf className="w-8 h-8 text-[hsl(215,50%,23%)]" />
                  </div>
                  <p
                    className="text-lg font-semibold text-[hsl(215,50%,23%)]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Trusted since 2025
                  </p>
                  <p className="text-sm text-[hsl(215,10%,45%)] max-w-xs mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Delivering measurable environmental outcomes across Central
                    and Eastern Europe.
                  </p>
                </div>
              </div>
              {/* Accent bar */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-lg bg-[hsl(152,35%,40%)]/15 -z-10" />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(152,35%,40%)] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                About Verdalis
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(215,50%,23%)] mb-6">
                Science-Driven Consulting for a Sustainable Future
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[hsl(215,10%,42%)] leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Founded in August 2025, Verdalis is a rising environmental
                consulting firm in Central and Eastern Europe. Our
                multidisciplinary team of ecologists, engineers, and policy
                experts works at the intersection of science and regulation to
                deliver practical, effective solutions.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-[hsl(215,10%,42%)] leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We believe that environmental protection and business growth are
                not mutually exclusive. Our mission is to help organizations
                navigate complex environmental requirements while unlocking the
                strategic value of sustainability.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "EU-accredited consultancy",
                  "ISO 14001 certified processes",
                  "Cross-border project expertise",
                  "Science-based methodology",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(152,35%,40%)] mt-0.5 shrink-0" />
                    <span className="text-sm text-[hsl(215,25%,30%)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 bg-[hsl(210,20%,97%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(152,35%,40%)] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            What We Do
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(215,50%,23%)] mb-4">
            Comprehensive Environmental Services
          </h2>
          <p className="max-w-2xl mx-auto text-[hsl(215,10%,42%)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            From initial assessment through implementation and monitoring, we
            provide end-to-end environmental consulting tailored to your sector
            and scale.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <Card className="group bg-white hover:shadow-lg transition-all duration-300 border-[hsl(215,15%,90%)] h-full">
                <CardHeader className="pb-3">
                  <div className="w-11 h-11 rounded-lg bg-[hsl(215,50%,23%)]/7 flex items-center justify-center mb-3 group-hover:bg-[hsl(215,50%,23%)] transition-colors duration-300">
                    <s.icon className="w-5 h-5 text-[hsl(215,50%,23%)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg text-[hsl(215,50%,23%)]">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[hsl(215,10%,45%)] leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {s.desc}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-[10px] font-medium text-[hsl(215,10%,45%)] border-[hsl(215,15%,88%)]"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 bg-[hsl(210,20%,97%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(152,35%,40%)] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Our Work
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(215,50%,23%)] mb-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-[hsl(215,10%,42%)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            A selection of recent engagements that demonstrate our range and
            depth of environmental consulting capabilities.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="bg-white border-[hsl(215,15%,90%)] hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <Badge
                    variant="outline"
                    className="w-fit text-[10px] font-medium text-[hsl(152,35%,35%)] border-[hsl(152,35%,40%)]/25 bg-[hsl(152,35%,40%)]/5 mb-2"
                  >
                    {p.category}
                  </Badge>
                  <CardTitle className="text-xl text-[hsl(215,50%,23%)]">
                    {p.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(215,10%,45%)] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {p.desc}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-[hsl(215,50%,23%)] hover:text-[hsl(152,35%,40%)] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[hsl(215,50%,23%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(152,50%,65%)] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Client Feedback
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="bg-white/8 backdrop-blur border border-white/10 rounded-xl p-7 h-full flex flex-col">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-[hsl(45,90%,60%)] text-[hsl(45,90%,60%)]"
                    />
                  ))}
                </div>
                <p className="text-[hsl(215,20%,82%)] leading-relaxed flex-1 mb-6 text-[15px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  "{t.quote}"
                </p>
                <div>
                  <div className="text-white font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {t.author}
                  </div>
                  <div className="text-[hsl(215,20%,60%)] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {t.company}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left col — info */}
          <div className="lg:col-span-2">
            <FadeIn>
              <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(152,35%,40%)] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Get in Touch
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(215,50%,23%)] mb-6">
                Let's Discuss Your Project
              </h2>
              <p className="text-[hsl(215,10%,42%)] leading-relaxed mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Whether you need a quick compliance check or a comprehensive
                sustainability strategy, our team is ready to help. Reach out
                and we'll respond within 24 hours.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "47 Calea Victoriei, Bucharest 010063, Romania",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+40 754 900 900",
                    href: "tel:+40754900900",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "office@verdalis.eu",
                    href: "mailto:office@verdalis.eu",
                  },
                  {
                    icon: Clock,
                    label: "Working Hours",
                    value: "Mon – Fri: 08:00 – 18:00",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[hsl(215,50%,23%)]/7 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[hsl(215,50%,23%)]" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-[hsl(215,10%,50%)] mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {item.label}
                      </div>
                      {"href" in item && item.href ? (
                        <a href={item.href} className="text-sm text-[hsl(215,25%,20%)] hover:text-[hsl(152,35%,40%)] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm text-[hsl(215,25%,20%)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right col — form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.15}>
              {submitted ? (
                <div className="bg-[hsl(152,35%,40%)]/5 border border-[hsl(152,35%,40%)]/20 rounded-xl p-12 text-center">
                  <CheckCircle2 className="w-14 h-14 text-[hsl(152,35%,40%)] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[hsl(215,50%,23%)] mb-3">
                    Thank You!
                  </h3>
                  <p className="text-[hsl(215,10%,42%)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    We've received your inquiry and will get back to you within
                    24 hours. One of our consultants will review your project
                    details shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[hsl(215,25%,25%)] mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Full Name *
                      </label>
                      <Input
                        required
                        placeholder="John Smith"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="bg-[hsl(210,20%,97%)] border-[hsl(215,15%,88%)] focus:border-[hsl(215,50%,23%)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[hsl(215,25%,25%)] mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="bg-[hsl(210,20%,97%)] border-[hsl(215,15%,88%)] focus:border-[hsl(215,50%,23%)]"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[hsl(215,25%,25%)] mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Company
                      </label>
                      <Input
                        placeholder="Your Company Ltd."
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({ ...formState, company: e.target.value })
                        }
                        className="bg-[hsl(210,20%,97%)] border-[hsl(215,15%,88%)] focus:border-[hsl(215,50%,23%)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[hsl(215,25%,25%)] mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Phone
                      </label>
                      <Input
                        type="tel"
                        placeholder="+40 7XX XXX XXX"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className="bg-[hsl(210,20%,97%)] border-[hsl(215,15%,88%)] focus:border-[hsl(215,50%,23%)]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[hsl(215,25%,25%)] mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Service of Interest
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-md border border-[hsl(215,15%,88%)] bg-[hsl(210,20%,97%)] text-sm text-[hsl(215,25%,25%)] focus:outline-none focus:ring-2 focus:ring-[hsl(215,50%,23%)]/20 focus:border-[hsl(215,50%,23%)]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[hsl(215,25%,25%)] mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Project Details *
                    </label>
                    <Textarea
                      required
                      rows={5}
                      placeholder="Briefly describe your project, timeline, and any specific requirements..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="bg-[hsl(210,20%,97%)] border-[hsl(215,15%,88%)] focus:border-[hsl(215,50%,23%)] resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[hsl(215,50%,23%)] hover:bg-[hsl(215,50%,18%)] text-white h-12"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </Button>
                  <p className="text-xs text-[hsl(215,10%,55%)] text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    We'll respond within 24 hours. Your data is handled in
                    accordance with GDPR.
                  </p>
                </form>
              )}
            </FadeIn>
          </div>
        </div>

        {/* Map placeholder */}
        <FadeIn delay={0.2}>
          <div className="mt-16 rounded-xl overflow-hidden border border-[hsl(215,15%,88%)] h-80">
            <iframe
              title="Verdalis Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444384555713!2d26.0964373!3d44.4416127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4304e9a2a1%3A0x6c7f6de087a4e0e8!2sCalea%20Victoriei%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1700000000000!5m2!1sen!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[hsl(215,40%,13%)] text-[hsl(215,15%,70%)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-md bg-[hsl(152,35%,40%)] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span
                className="text-xl font-semibold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Verdalis
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Expert environmental consulting for businesses committed to
              sustainability and regulatory excellence.
            </p>
            <div className="space-y-2 mb-6 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <a href="tel:+40754900900" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +40 754 900 900
              </a>
              <a href="mailto:office@verdalis.eu" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                office@verdalis.eu
              </a>
            </div>
            <div className="flex gap-3">
              {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Services
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Company
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {[
                ["About Us", "#about"],
                ["Projects", "#projects"],
                ["Careers", "#"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Legal & Compliance
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {[
                ["Privacy Policy", "/privacy"],
                ["Terms of Service", "/terms"],
                ["Cookie Policy", "/cookies"],
                ["GDPR Compliance", "/gdpr"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <p>&copy; 2026 Verdalis Environmental Consulting. All rights reserved.</p>
          <p>
            Registered in Romania &middot; CUI: RO12345678 &middot; J40/1234/2025
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Simple Router ─── */
function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);
  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  return pathname;
}

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

/* ─── Main App ─── */
export default function App() {
  const pathname = usePathname();

  const page = (() => {
    switch (pathname) {
      case "/privacy":
        return <PrivacyPolicy />;
      case "/terms":
        return <TermsOfService />;
      case "/gdpr":
        return <GDPRCompliance />;
      case "/cookies":
        return <CookiePolicy />;
      default:
        return <HomePage />;
    }
  })();

  return <Suspense fallback={<div />}>{page}</Suspense>;
}
