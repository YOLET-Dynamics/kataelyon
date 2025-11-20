import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { CtaSection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import {
  Monitor,
  Droplets,
  Building2,
  FileText,
  Car,
  Wheat,
  Truck,
  FileCheck,
  Globe,
  Package,
  ShoppingCart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Services | Kataelyon Group",
  description:
    "Comprehensive supply solutions across IT equipment, sanitary products, construction materials, stationery, vehicle parts, and agricultural products. Plus logistics, import/export, and tender services.",
};

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Monitor,
      title: "IT & Computer Equipment",
      description:
        "Complete range of computer components including GPUs, storage devices, power supplies, and peripherals. Quality hardware and accessories for all your computing needs.",
      details: [
        "Graphics Cards, Sound Cards, Storage (HDD, SSD, NVMe)",
        "Power Supply Units, Cooling Systems",
        "USB Hubs, Cables (HDMI, DisplayPort, USB, Ethernet)",
      ],
    },
    {
      icon: Droplets,
      title: "Sanitary & Cosmetics",
      description:
        "Comprehensive sanitary supplies and personal care products for commercial and institutional use, ensuring hygiene and cleanliness.",
      details: [
        "Toilet Paper, Paper Towels, Facial Tissues",
        "Hand Soaps, Sanitizers, Dispensers",
        "Waste Bins, Liners, Cleaning Equipment",
      ],
    },
    {
      icon: Building2,
      title: "Construction Materials",
      description:
        "Full spectrum of construction materials from basic supplies to finishing touches, including cement, metals, tiles, and construction chemicals.",
      details: [
        "Cement, Sand, Aggregate, Bricks, Concrete Blocks",
        "Rebar, RHS, CHS, SHS, Binding & Mesh Wires",
        "Paints, Tiles, Marble, Granite, PVC Panels",
        "Waterproofing, Adhesives, Hardware & Fixtures",
      ],
    },
    {
      icon: FileText,
      title: "Stationery Materials",
      description:
        "Complete office supplies including writing instruments, paper products, and organizational tools for businesses and institutions.",
      details: [
        "Pens, Pencils, Markers, Highlighters, Toners",
        "Printing Paper (A4, A3), Notebooks, Sticky Notes",
        "Staplers, Binders, Files, Folders, Desk Organizers",
      ],
    },
    {
      icon: Car,
      title: "Vehicle Parts & Accessories",
      description:
        "Genuine automotive spare parts and accessories including engines, transmissions, brakes, tires, and batteries for reliable vehicle maintenance.",
      details: [
        "Genuine Spare Parts (Engines, Transmissions, Brakes)",
        "Tires, Batteries, and Essential Accessories",
      ],
    },
    {
      icon: Wheat,
      title: "Agricultural Products",
      description:
        "High-quality grains and packaged food products sourced and distributed through efficient supply chains to meet market demands.",
      details: [
        "Grains: Wheat, Corn, Barley, Soybean, Teff",
        "Packaged Foods: Nido, Edible Oils, Rice",
      ],
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
        subtitle="What We Supply"
        title="Products & Services"
        description="Quality products and comprehensive business solutions for institutional, commercial, and industrial needs across Ethiopia."
      />

      {/* Core Services */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              What We Supply
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Product Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive supply solutions across six key categories, delivering quality products for business and institutional needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent"
                >
                  <CardContent className="p-6 lg:p-8 space-y-4">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-7 w-7 text-accent group-hover:text-background transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {service.details && (
                      <ul className="space-y-2 text-sm text-muted-foreground pt-2 border-t border-border">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Band */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="text-sm font-bold uppercase tracking-wider text-accent">
                Our Commitment
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Quality, Efficiency, and Community Support
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every service we provide is designed to strengthen Ethiopia's
                economy and create lasting value for communities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From agriculture to construction, trading to logistics, we
                deliver comprehensive solutions that drive national development
                and empower local businesses.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/img-3.png"
                alt="Kataelyon Services"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-background">
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

      {/* Service Capabilities */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              How We Serve You
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Beyond product supply, we provide comprehensive business solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="group text-center border-2 card-hover-lift cursor-pointer">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <Globe className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Import & Export
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Facilitating smooth international trade with quality control and regulatory compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="group text-center border-2 card-hover-lift cursor-pointer">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center transition-colors group-hover:bg-accent/20">
                  <Truck className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Logistics
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Efficient logistics solutions ensuring timely and secure delivery from source to destination.
                </p>
              </CardContent>
            </Card>

            <Card className="group text-center border-2 card-hover-lift cursor-pointer">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <FileCheck className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Tender Bidding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Competitive offers and reliable service for large-scale institutional projects.
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
