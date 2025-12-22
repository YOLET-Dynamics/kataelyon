import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { CtaSection } from '@/components/cta-section'
import { Card, CardContent } from '@/components/ui/card'
import { FileText, Handshake, Building2, Heart, Users, Target, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Partners | Kataelyon Group',
  description:
    'Kataelyon Group is proud to partner with leading organizations across Ethiopia, delivering quality products and services to support their missions.',
}

export default function PartnersPage() {
  const partners = [
    {
      name: 'Ethiopian Red Cross Society',
      service: 'Stationery Items',
      description:
        'Supporting humanitarian efforts across Ethiopia with comprehensive office supplies and stationery materials.',
      icon: Heart,
      category: 'Humanitarian',
    },
    {
      name: 'Alemayehu Ketema General Contractor',
      service: 'Stationery Items',
      description:
        'Providing reliable stationery and office supplies to support construction project management and operations.',
      icon: Building2,
      category: 'Construction',
    },
    {
      name: 'Gudina Tumsa Foundation',
      service: 'Stationery Items',
      description:
        'Equipping educational and community initiatives with quality stationery materials to empower learning and development.',
      icon: Users,
      category: 'Foundation',
    },
    {
      name: 'F.D.R.E Ministry of Defense',
      subtitle: 'Defence Construction Materials Manufacturing Enterprise',
      service: 'Construction Materials',
      description:
        'Supplying high-quality construction materials to support national defense infrastructure and development projects.',
      icon: Shield,
      category: 'Government',
    },
  ]

  const partnershipValues = [
    {
      icon: Target,
      title: 'Reliability',
      description: 'Consistent quality and timely delivery for every project.',
    },
    {
      icon: Handshake,
      title: 'Trust',
      description: 'Building long-term relationships based on integrity and transparency.',
    },
    {
      icon: FileText,
      title: 'Quality',
      description: 'Premium products that meet the highest standards and specifications.',
    },
  ]

  return (
    <>
      <Navbar />

      <HeroSection
        subtitle="Our Collaborations"
        title="Trusted Partners"
        description="Working together with leading organizations to deliver quality products and drive positive impact across Ethiopia."
      />

      {/* Partners Showcase */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              Our Network
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Organizations We Work With
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proud to support leading institutions with reliable products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {partners.map((partner, index) => {
              const Icon = partner.icon
              return (
                <Card
                  key={index}
                  className="group border-2 hover:border-accent hover:shadow-xl transition-all duration-300 card-hover-lift"
                >
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-8 w-8 text-primary group-hover:text-background transition-colors" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent px-3 py-1 rounded-full bg-accent/10">
                        {partner.category}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground leading-tight">
                        {partner.name}
                      </h3>
                      {partner.subtitle && (
                        <p className="text-sm text-muted-foreground italic">
                          {partner.subtitle}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FileText className="h-4 w-4 text-accent" />
                        <span className="font-medium">{partner.service}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              Partnership Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Why Organizations Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We bring more than products—we bring commitment, quality, and partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipValues.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-2 text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center space-y-2">
              <div className="text-5xl lg:text-6xl font-bold text-primary">4+</div>
              <div className="text-lg text-muted-foreground">
                Trusted Partners
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-5xl lg:text-6xl font-bold text-accent">100%</div>
              <div className="text-lg text-muted-foreground">
                Client Satisfaction
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-5xl lg:text-6xl font-bold text-primary">4</div>
              <div className="text-lg text-muted-foreground">
                Sectors Served
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <CtaSection
        title="Ready to Partner With Us?"
        description="Join our network of trusted organizations. Let's work together to achieve your goals with quality products and reliable service."
        ctaText="Get In Touch"
        ctaHref="/contact"
        variant="dark"
      />

      <Footer />
    </>
  )
}

