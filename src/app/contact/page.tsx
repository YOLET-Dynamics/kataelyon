"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {

  const showContactInfo = () => {
    toast.info("Contact Form Coming Soon", {
      description: (
        <div className="space-y-2 mt-2">
          <p className="text-sm">For now, please reach us directly:</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-3.5 w-3.5" />
              <span>+251 978 700 044</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-3.5 w-3.5" />
              <span>+251 987 729 191</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-3.5 w-3.5" />
              <span>kolu.gudina11@gmail.com</span>
            </div>
          </div>
        </div>
      ),
      duration: 8000,
    });
  };

  return (
    <>
      <Navbar />

      <HeroSection
        subtitle="Get In Touch"
        title="Contact Us"
        description="Ready to partner with us? Reach out to discuss how we can support your projects and business needs."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Let's Build Together
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're interested in our services, want to explore
                  partnership opportunities, or have questions about our work,
                  we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-2">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Phone</h3>
                      <p className="text-muted-foreground">+251 978 700 044</p>
                      <p className="text-muted-foreground">+251 987 729 191</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Email</h3>
                      <a
                        href="mailto:kolu.gudina11@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        kolu.gudina11@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">
                        Office Location
                      </h3>
                      <address className="text-muted-foreground not-italic">
                        Addis Ababa, Bole Sub City
                        <br />
                        Woreda 07, Yerer Building 3rd Floor
                        <br />
                        House Number 9999
                      </address>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-muted border-none">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground italic">
                    "Dream Big, Start Small" - We're committed to building
                    lasting partnerships and creating value for all
                    stakeholders.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      maxLength={100}
                      disabled
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        maxLength={255}
                        disabled
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+251 XXX XXX XXX"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Organization</Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      maxLength={200}
                      disabled
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest *</Label>
                    <Select disabled>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="agriculture">
                          Agricultural Goods
                        </SelectItem>
                        <SelectItem value="construction">
                          Construction Materials
                        </SelectItem>
                        <SelectItem value="processed-foods">
                          Processed Foods
                        </SelectItem>
                        <SelectItem value="import-export">
                          Import/Export
                        </SelectItem>
                        <SelectItem value="logistics">Logistics</SelectItem>
                        <SelectItem value="tenders">Tenders</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      maxLength={2000}
                      disabled
                    />
                  </div>

                  <Button
                    type="button"
                    size="lg"
                    className="w-full group"
                    onClick={showContactInfo}
                  >
                    Contact Us
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Click the button above to see our contact information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
