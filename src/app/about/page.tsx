import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ValuesSection } from '@/components/values-section'
import { CtaSection } from '@/components/cta-section'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Eye, Recycle, Shield, Lightbulb, Users, HandshakeIcon, Award, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Kataelyon Group',
  description:
    'Learn about Kataelyon Business Group - our mission, vision, values, and commitment to building Ethiopia\'s future through sustainable practices.',
}

export default function AboutPage() {
  const coreValues = [
    {
      icon: Recycle,
      title: 'Sustainability',
      description:
        'We are committed to environmentally responsible practices that ensure the long-term health of our communities and natural resources.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description:
        'We conduct our business with the highest ethical standards, fostering trust and transparency with our stakeholders.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We embrace creativity and continuous improvement, seeking innovative solutions that drive efficiency and progress in all our operations.',
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description:
        'We prioritize the well-being of the communities we serve by creating jobs, supporting local economies, and enhancing quality of life.',
    },
    {
      icon: HandshakeIcon,
      title: 'Collaboration',
      description:
        'We believe in the power of partnerships and teamwork, working together with government, businesses, and communities to achieve shared goals.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We strive for the highest standards in quality and performance, ensuring our products and services contribute positively to stakeholders.',
    },
    {
      icon: Heart,
      title: 'Respect',
      description:
        'We honor the diverse cultures, traditions, and perspectives within Ethiopia and Africa, promoting inclusivity and understanding.',
    },
  ]

  return (
    <>
      <Navbar />

      <HeroSection
        subtitle="Who We Are"
        title="About Kataelyon Group"
        description="A young company committed to driving sustainable growth and economic opportunity across Ethiopia."
      />

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Kataelyon Business Group is a young company committed to driving sustainable growth
              and economic opportunity across Ethiopia. We strive to set a standard for a modern,
              efficient, and nation-building business model.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We aim to strengthen value chains in agriculture, improve food security, and create
              robust job opportunities for local communities. Through innovation, strategic
              partnerships, and a commitment to excellence, we are dedicated to transforming
              Ethiopia's agricultural and trade sectors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Together, we are building a future where prosperity and stability will uplift all,
              establishing Ethiopia as a stronghold in African economic development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <Card className="border-2">
              <CardContent className="p-8 lg:p-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kataelyon Business Group is dedicated to enhancing the quality of life in
                  Ethiopia and Africa by spearheading initiatives in agriculture, construction,
                  trading, and waste management. We strive to be a cornerstone of national
                  development, creating sustainable job opportunities and economic stability while
                  fostering innovation and responsible practices that benefit our communities and
                  support the government's vision for growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 lg:p-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading national asset and a catalyst for transformative development in
                  Ethiopia and Africa, empowering communities through sustainable practices,
                  economic opportunities, and innovative solutions. We envision a prosperous future
                  where our efforts contribute to a stable economy and a thriving society, making a
                  lasting impact on the lives of citizens and the environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Kataelyon Way - Core Values */}
      <ValuesSection values={coreValues} title="The Kataelyon Way" subtitle="Our Core Values" />

      {/* Company Goals */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              Our Goals
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Building for the Future
            </h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">Year 1: Foundation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Establish robust operational foundations, launching facilities for animal feed and
                  grain storage while building a distribution network for cement. Develop logistics
                  framework ensuring efficiency and reliability in delivering high-quality products
                  to local farmers and construction projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">Years 2-3: Expansion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Expand operations to include infrastructure development and manufacturing of
                  construction materials such as steel and cement. Explore renewable energy
                  solutions and waste management initiatives to enhance sustainability across all
                  operations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">Long-term Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Foster community engagement and training programs to create job opportunities and
                  contribute to local development, positioning Kataelyon Business Group as a key
                  player in nation-building and a catalyst for transformative change in Ethiopia and
                  Africa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CtaSection
        title="Join Us in Building Ethiopia's Future"
        description="Partner with Kataelyon Group to create sustainable solutions and economic opportunities."
        ctaText="Get In Touch"
        ctaHref="/contact"
        variant="dark"
      />

      <Footer />
    </>
  )
}
