import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { CtaSection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sprout,
  Building2,
  PackageOpen,
  Truck,
  FileCheck,
  Globe,
  Wheat,
  Package,
  ShoppingCart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Kataelyon Group",
  description:
    "Explore our comprehensive services in agriculture, construction materials, processed foods, logistics, import/export, and tender bidding.",
};

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Sprout,
      title: "Supply of Agricultural Goods",
      description:
        "We provide high-quality agricultural products year-round, sourced from local farms and distributed through efficient storage and delivery systems.",
    },
    {
      icon: Building2,
      title: "Supply of Construction Material",
      description:
        "We deliver reliable, high-quality construction materials such as cement and reinforcement, ensuring timely supply through efficient logistics and distribution networks.",
    },
    {
      icon: PackageOpen,
      title: "Supply of Processed Foods",
      description:
        "We offer a range of high-quality processed foods such as sugar, edible oil, and rice, delivered fresh and ready to meet market needs.",
    },
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: "Import and Export",
      description:
        "We facilitate smooth import and export of goods, ensuring quality control and regulatory compliance for international trade.",
    },
    {
      icon: FileCheck,
      title: "Tenders",
      description:
        "We actively participate in tender bids, providing competitive offers and reliable service for large-scale projects.",
    },
    {
      icon: Truck,
      title: "Logistics",
      description:
        "We offer efficient logistics solutions, ensuring timely and secure transport of goods from source to destination.",
    },
  ];

  return (
    <>
      <Navbar />

      <HeroSection
        subtitle="What We Do"
        title="Our Services"
        description="Comprehensive solutions across multiple sectors to drive Ethiopia's economic growth and community development."
      />

      {/* Core Services */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              Core Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Primary Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our main service lines focus on delivering essential goods and
              materials that support Ethiopia's development and growth.
            </p>
          </div>

          <ServicesGrid services={mainServices} />
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              Extended Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Supporting services that enhance our core offerings and provide
              comprehensive solutions.
            </p>
          </div>

          <ServicesGrid services={additionalServices} />
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a full range of services focused on quality, efficiency,
              and community support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="text-center border-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Wheat className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Agriculture
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strengthening value chains and improving food security through
                  reliable supply of agricultural goods.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                  <Package className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Construction
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Supporting infrastructure development with quality materials
                  and efficient delivery systems.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Trading</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Facilitating commerce through import/export, logistics, and
                  comprehensive trading solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Work Together?"
        description="Contact us to discuss how our services can support your projects and business needs."
        ctaText="Contact Us"
        ctaHref="/contact"
        variant="dark"
      />

      <Footer />
    </>
  );
}
