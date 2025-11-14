import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { ValuesSection } from "@/components/values-section";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sprout,
  Building2,
  PackageOpen,
  Recycle,
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  Shield,
  HandshakeIcon,
  Award,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const mainServices = [
    {
      icon: Sprout,
      title: "Agriculture",
      description:
        "High-quality agricultural products year-round, sourced from local farms with efficient storage and delivery systems.",
    },
    {
      icon: Building2,
      title: "Construction",
      description:
        "Reliable construction materials including cement and reinforcement, delivered through efficient logistics networks.",
    },
    {
      icon: PackageOpen,
      title: "Trading",
      description:
        "Import and export facilitation, tender participation, and comprehensive logistics solutions for seamless operations.",
    },
  ];

  const coreValues = [
    {
      icon: Recycle,
      title: "Sustainability",
      description:
        "Committed to environmentally responsible practices for long-term community and resource health.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Conducting business with the highest ethical standards, fostering trust and transparency.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Embracing creativity and continuous improvement to drive efficiency and progress.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Creating jobs and supporting local economies to enhance quality of life for all citizens.",
    },
    {
      icon: HandshakeIcon,
      title: "Collaboration",
      description:
        "Working together with government, businesses, and communities for shared goals.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Striving for the highest standards in quality and performance across all operations.",
    },
    {
      icon: Heart,
      title: "Respect",
      description:
        "Honoring diverse cultures and perspectives, promoting inclusivity across Ethiopia and Africa.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        subtitle="Building Ethiopia's Future"
        title="Dream Big, Start Small"
        description="Dedicated to enhancing the quality of life in Ethiopia and Africa through sustainable practices in agriculture, construction, trading, and waste management."
        ctaText="Explore Our Services"
        ctaHref="/services"
      />

      {/* Mission Statement */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              A Cornerstone of National Development
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We strive to be a catalyst for transformative development,
              creating sustainable job opportunities and economic stability
              while fostering innovation and responsible practices that benefit
              our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions across multiple sectors to drive
              Ethiopia's economic growth.
            </p>
          </div>

          <ServicesGrid services={mainServices} />

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection
        values={coreValues}
        title="The Kataelyon Way"
        subtitle="Our Core Values"
      />

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="text-center border-none shadow-none bg-transparent">
              <CardContent className="pt-6 space-y-2">
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl lg:text-5xl font-bold text-foreground">
                  3+
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Core Sectors
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-none bg-transparent">
              <CardContent className="pt-6 space-y-2">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl lg:text-5xl font-bold text-foreground">
                  100%
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Community Focused
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-none bg-transparent">
              <CardContent className="pt-6 space-y-2">
                <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl lg:text-5xl font-bold text-foreground">
                  7
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Core Values
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Build Together?"
        description="Partner with us to create sustainable solutions for Ethiopia's future."
        ctaText="Get In Touch"
        ctaHref="/contact"
        variant="dark"
      />

      <Footer />
    </>
  );
}
