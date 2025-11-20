import { Card, CardContent } from '@/components/ui/card'
import { type LucideIcon } from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  details?: string[]
}

interface ServicesGridProps {
  services: Service[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {services.map((service, index) => {
        const Icon = service.icon
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
        )
      })}
    </div>
  )
}
