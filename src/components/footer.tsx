import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <Image
              src="/logo-white.png"
              alt="Kataelyon Group"
              width={400}
              height={120}
              className="h-24 w-auto"
            />
            <p className="text-sm text-background/80 leading-relaxed">
              Dedicated to enhancing the quality of life in Ethiopia and Africa
              through sustainable practices in agriculture, construction,
              trading, and waste management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="group inline-flex items-center gap-1 text-sm text-background/80 hover:text-accent transition-colors"
                >
                  Home
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-1 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-1 text-sm text-background/80 hover:text-accent transition-colors"
                >
                  About Us
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-1 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-1 text-sm text-background/80 hover:text-accent transition-colors"
                >
                  Services
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-1 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="group inline-flex items-center gap-1 text-sm text-background/80 hover:text-accent transition-colors"
                >
                  Partners
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-1 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1 text-sm text-background/80 hover:text-accent transition-colors"
                >
                  Contact
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-1 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent uppercase tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-background/80">
                  <div>+251 978 700 044</div>
                  <div>+251 987 729 191</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@kataelyon.et"
                  className="group inline-flex items-center gap-1 text-sm text-background/80 hover:text-accent transition-colors"
                >
                  info@kataelyon.et
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-1 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <address className="text-sm text-background/80 not-italic">
                  Addis Ababa, Bole Sub City, Woreda 07
                  <br />
                  Yerer Building 3rd Floor, House #9999
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-sm text-background/60">
                © {currentYear} Kataelyon Group. All rights reserved.
              </p>
              <p className="text-xs text-background/50">
                Built by{" "}
                <a
                  href="https://yoletent.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  YOLET Labs
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </p>
            </div>
            <p className="text-sm text-background/60 italic">
              Dream Big, Start Small
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
