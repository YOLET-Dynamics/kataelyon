import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className={`relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center ${
        backgroundImage ? 'bg-cover bg-center bg-no-repeat' : 'bg-gradient-to-br from-background via-background to-muted'
      }`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-foreground/70 backdrop-blur-sm" />
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          {subtitle && (
            <div className="inline-block">
              <span className="text-sm font-bold uppercase tracking-wider text-accent px-4 py-1.5 bg-accent/10 rounded-full">
                {subtitle}
              </span>
            </div>
          )}
          
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight ${backgroundImage ? 'text-background' : 'text-foreground'}`}>
            {title}
          </h1>
          
          {description && (
            <p className={`text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed ${backgroundImage ? 'text-background/90' : 'text-muted-foreground'}`}>
              {description}
            </p>
          )}
          
          {ctaText && ctaHref && (
            <div className="pt-4">
              <Button asChild size="lg" className="text-base px-8 py-6 group">
                <Link href={ctaHref}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
