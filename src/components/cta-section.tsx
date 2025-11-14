import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CtaSectionProps {
  title: string;
  description?: string;
  ctaText: string;
  ctaHref: string;
  variant?: "default" | "dark";
}

export function CtaSection({
  title,
  description,
  ctaText,
  ctaHref,
  variant = "default",
}: CtaSectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-16 lg:py-24 ${isDark ? "bg-foreground" : "bg-primary"}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
            isDark ? "text-background" : "text-primary-foreground"
          }`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`text-lg sm:text-xl leading-relaxed ${
              isDark ? "text-background/80" : "text-primary-foreground/90"
            }`}
          >
            {description}
          </p>
        )}

        <div className="pt-4">
          <Button
            asChild
            size="lg"
            variant={isDark ? "default" : "secondary"}
            className="text-base px-8 py-6 group"
          >
            <Link href={ctaHref}>
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
