import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { ValuesSection } from "@/components/values-section";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Monitor,
  Droplets,
  Building2,
  FileText,
  Car,
  Wheat,
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
      icon: Monitor,
      title: "Computer 💻, Printer 🖨️ & Servers",
      description:
        "Complete range of computers, printers, and server solutions for all your business and computing needs.",
      image: "/service-imgs/computers.jpeg",
    },
    {
      icon: Droplets,
      title: "Sanitary & Cosmetics",
      description:
        "Comprehensive sanitary supplies and personal care products for commercial and institutional use.",
      image: "/service-imgs/sanitary.jpeg",
    },
    {
      icon: Building2,
      title: "Construction Materials",
      description:
        "Full spectrum of construction materials from basic supplies to finishing touches and hardware.",
      image: "/service-imgs/construction.jpeg",
    },
    {
      icon: FileText,
      title: "Stationery Materials",
      description:
        "Complete office supplies including writing instruments, paper products, and organizational tools.",
      image: "/service-imgs/stationery.jpeg",
    },
    {
      icon: Car,
      title: "Vehicle Parts",
      description:
        "Genuine automotive spare parts and accessories for reliable vehicle maintenance and repair.",
      image: "/service-imgs/vehicle.jpeg",
    },
    {
      icon: Wheat,
      title: "Agricultural Products",
      description:
        "High-quality grains and packaged food products distributed through efficient supply chains.",
      image: "/service-imgs/agricultural.jpeg",
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
        ctaText="Get In Touch"
        ctaHref="/contact"
        backgroundImage="/img-1.png"
      />

      {/* Why Kataelyon Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="text-sm font-bold uppercase tracking-wider text-accent">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                A Cornerstone of National Development
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kataelyon Business Group is dedicated to enhancing the quality of life in Ethiopia and Africa by spearheading initiatives in agriculture, construction, trading, and waste management.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We strive to be a cornerstone of national development, creating sustainable job opportunities and economic stability while fostering innovation and responsible practices that benefit our communities and support the government's vision for growth.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">Local Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Supporting Ethiopian farmers and communities
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground">Quality First</h3>
                  <p className="text-sm text-muted-foreground">
                    Highest standards in all operations
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern solutions for traditional sectors
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating jobs and economic opportunity
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/nature-1.jpg"
                alt="Ethiopian Landscape"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              What We Supply
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Product Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality products across six key categories for business, institutional, and commercial needs.
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

      {/* How We Work Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/nature-3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven approach to delivering quality and building lasting partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-background font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-foreground">Consultation</h3>
                <p className="text-muted-foreground">
                  We listen to your needs and assess project requirements to deliver tailored solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-background font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-foreground">Planning</h3>
                <p className="text-muted-foreground">
                  Strategic planning with efficient logistics and quality sourcing from trusted partners.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-background font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground">Execution</h3>
                <p className="text-muted-foreground">
                  Timely delivery with high-quality standards and transparent communication throughout.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-background font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-foreground">Partnership</h3>
                <p className="text-muted-foreground">
                  Ongoing support and collaboration to ensure long-term success and community impact.
                </p>
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
