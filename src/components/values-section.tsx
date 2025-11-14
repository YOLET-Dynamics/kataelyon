import { Card, CardContent } from '@/components/ui/card'
import { type LucideIcon } from 'lucide-react'

export interface Value {
  icon: LucideIcon
  title: string
  description: string
}

interface ValuesSectionProps {
  values: Value[]
  title?: string
  subtitle?: string
}

export function ValuesSection({ values, title, subtitle }: ValuesSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            {subtitle && (
              <span className="text-sm font-bold uppercase tracking-wider text-accent">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
