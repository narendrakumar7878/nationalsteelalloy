import SEO from "@/components/SEO";
import { Wrench, Truck, FileCheck, HeadphonesIcon, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Custom Cutting & Processing",
    description: "Waterjet, laser, shear, and band-saw custom cut-to-size service for stainless steel plates, round bars, and tubes."
  },
  {
    icon: Truck,
    title: "All India Express Logistics",
    description: "Reliable and fast freight delivery across Mumbai, Maharashtra, Gujarat, Delhi NCR, South & East India with proper protective packaging."
  },
  {
    icon: FileCheck,
    title: "Material Testing & MTC 3.1 Certification",
    description: "Complete EN 10204 3.1 & 3.2 Mill Test Certificates, PMI testing, Ultrasonic (UT), and chemical composition reports provided."
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Consultation & Sourcing",
    description: "Expert engineering consultation to specify exact steel grades (e.g. 304L, 316L, 310S, EN19, Hardox) for critical industrial applications."
  }
];

export default function Services() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Cutting, Fabrication & Logistics Services",
    "provider": {
      "@type": "Organization",
      "name": "NATIONAL STEEL & ALLOYS",
      "telephone": "+919769339987",
      "email": "info@nationalsteelalloys.com"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Our Services - NATIONAL STEEL & ALLOYS | Cut-to-Size & MTC Certification"
        description="Steel value-added services: Custom saw/laser cutting, MTC EN 10204 3.1 testing certificates, technical grade selection, and All India express delivery."
        keywords="Steel custom cutting, MTC EN 10204 3.1 certificate, All India steel delivery, Stainless Steel fabrication Mumbai, NATIONAL STEEL & ALLOYS"
        jsonLd={servicesSchema}
      />

      <div className="relative bg-foreground text-background py-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/round-bars.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/75 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-background/90">
            Comprehensive value-added processing and supply chain solutions for steel & alloys
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.title} className="bg-card p-8 rounded-lg border border-border hover-elevate">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted/30 p-8 rounded-lg mb-16 border border-border">
          <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Product Shapes & Processing</h3>
              <ul className="space-y-2.5 text-muted-foreground text-sm">
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Pipes & Tubes (Welded, ERW & Seamless)</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Sheets, Coils & Heavy Plates (0.4mm to 150mm)</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Round Bars, Bright Rods & Hexagon Bars</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Forged Flanges & Threaded Pipe Fittings</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Cut-to-length Circles & Ring Blanks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Material Grades Handled</h3>
              <ul className="space-y-2.5 text-muted-foreground text-sm">
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Stainless Steel (304, 304L, 316, 316L, 310S, 321, 904L)</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Alloy Steel (EN19, EN24, C45, Hardox 400/500)</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Carbon Steel (EN8, EN9, ASTM A106 Gr B, IS2062)</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Non-Ferrous Alloys (Aluminium 6061/7075, Copper, Brass)</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Fasteners & Stud Bolts (Grade 8.8, 10.9, A2, A4)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-foreground text-background p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Require Custom Cut Material or Urgent Quote?</h2>
          <p className="text-background/80 text-base mb-6 max-w-2xl mx-auto">
            Our technical team is ready to process your exact specifications with express dispatch options.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8">
              Contact Sales Desk
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
