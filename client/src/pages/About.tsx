import SEO from "@/components/SEO";
import { Target, TrendingUp, ShieldCheck, Truck, Award, CheckCircle2, Factory, Microchip, Layers } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About NATIONAL STEEL & ALLOYS",
    "description": "Learn about NATIONAL STEEL & ALLOYS, leading stockist and supplier of Stainless Steel, Alloy Steel, Carbon Steel & Non-Ferrous products in Mumbai.",
    "mainEntity": {
      "@type": "Organization",
      "name": "NATIONAL STEEL & ALLOYS",
      "founder": "Champak Sain",
      "vatID": "27AJJPN4917B2Z9",
      "email": "info@nationalsteelalloys.com",
      "telephone": "+919769339987",
      "sameAs": ["https://www.instagram.com/national_steel_alloys/"]
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us - NATIONAL STEEL & ALLOYS | Leading Steel Stockist Mumbai"
        description="NATIONAL STEEL & ALLOYS is a premier importer, stockist, manufacturer, and supplier of Stainless Steel, Carbon Steel, Alloy Steel & Non-Ferrous metal products in Mumbai. CEO Champak Sain."
        keywords="About National Steel Alloys, Steel Stockist Mumbai, Champak Sain, Stainless Steel Supplier India, Alloy Steel Supplier, info@nationalsteelalloys.com"
        jsonLd={aboutSchema}
      />

      {/* Header Banner */}
      <div className="relative bg-foreground text-background py-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/sheets-plates.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/75 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-background/90">
            Your Trusted Partner in Steel & Alloys Across India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Industry & Company Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl font-bold">About Industry & Our Legacy</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
              <p>
                NATIONAL STEEL & ALLOYS is one of India's largest Manufacturers, Stockists, Suppliers, Importers, and Exporters 
                of Stainless Steel, Carbon Steel, Alloy Steel, Mild Steel, High Nickel Alloys, Special Alloys, Aluminium Alloys, 
                Copper Nickel, Titanium Alloys, Duplex & Super Duplex, Tantalum, Abrasion Resistant Steel, Hadfield Manganese Steel, 
                Corten Steel, High Tensile, Quenched & Tempered Steel, Armour Steel, etc.
              </p>
              <p>
                We supply materials in various forms and shapes such as Pipes, Tubes, Plates, Sheets, Round Bars, Flanges, Bright Rods, 
                and Forged Fittings strictly adhering to ASTM, ASME, DIN, EN, BS, and IS quality benchmarks.
              </p>
            </div>
          </div>

          {/* Company Information Card (Desktop 2-Column Grid Layout) */}
          <div className="lg:col-span-6 bg-muted/30 p-6 sm:p-8 rounded-xl border border-border shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Company Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-background rounded-lg border border-border/60">
                <p className="font-semibold text-primary text-xs uppercase tracking-wider mb-1">Company Name</p>
                <p className="text-foreground font-bold">NATIONAL STEEL & ALLOYS</p>
              </div>

              <div className="p-3 bg-background rounded-lg border border-border/60">
                <p className="font-semibold text-primary text-xs uppercase tracking-wider mb-1">GST Number</p>
                <p className="text-foreground font-bold" data-testid="text-gst">27AJJPN4917B2Z9</p>
              </div>

              <div className="p-3 bg-background rounded-lg border border-border/60">
                <p className="font-semibold text-primary text-xs uppercase tracking-wider mb-1">CEO</p>
                <p className="text-foreground font-bold" data-testid="text-ceo">Champak Sain</p>
              </div>

              <div className="p-3 bg-background rounded-lg border border-border/60">
                <p className="font-semibold text-primary text-xs uppercase tracking-wider mb-1">Contact Phone</p>
                <p className="text-foreground font-semibold text-xs">Mobile: +91 9769339987</p>
                <p className="text-muted-foreground text-xs">Tel: 022 6743 6635</p>
              </div>

              <div className="p-3 bg-background rounded-lg border border-border/60">
                <p className="font-semibold text-primary text-xs uppercase tracking-wider mb-1">Email Address</p>
                <a href="mailto:info@nationalsteelalloys.com" className="text-primary hover:underline font-bold text-xs break-all">
                  info@nationalsteelalloys.com
                </a>
              </div>

              <div className="p-3 bg-background rounded-lg border border-border/60">
                <p className="font-semibold text-primary text-xs uppercase tracking-wider mb-1">Official Instagram</p>
                <a 
                  href="https://www.instagram.com/national_steel_alloys/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:underline font-bold text-xs flex items-center gap-1 mt-0.5"
                >
                  <FaInstagram className="w-4 h-4" /> @national_steel_alloys
                </a>
              </div>

              <div className="p-3 bg-background rounded-lg border border-border/60 sm:col-span-2">
                <p className="font-semibold text-primary text-xs uppercase tracking-wider mb-1">Corporate Address</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  45/49, Gulam Mohammad Building, M.S. Bawan Patel Road, Ramagalli, Mumbai-400 004, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                To empower industries with high-grade, zero-defect steel products, transparent material certification, custom precision processing, and prompt All India express delivery.
              </p>
            </div>

            <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                To expand our global footprint as the most trusted importer and exporter of specialty alloy steels while maintaining factory-direct pricing for Indian manufacturers.
              </p>
            </div>
          </div>
        </div>

        {/* NEW SECTION: Quality Infrastructure & Sourcing Standards */}
        <div className="mb-16 bg-gradient-to-br from-muted/40 via-muted/20 to-transparent p-8 sm:p-10 rounded-2xl border border-border">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full mb-2 inline-block">
              Testing & Warehouse Excellence
            </span>
            <h2 className="text-3xl font-extrabold mb-3">Quality Inspection & Infrastructure</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              At NATIONAL STEEL & ALLOYS, quality is backed by advanced non-destructive testing equipment, certified metallurgical reports, and large-scale warehouse operations in Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-background rounded-xl border border-border shadow-sm hover-elevate">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">MTC EN 10204 3.1</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Every dispatch includes original Mill Test Certificates documenting chemical composition & mechanical tensile reports.
              </p>
            </div>

            <div className="p-5 bg-background rounded-xl border border-border shadow-sm hover-elevate">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Microchip className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">PMI Testing</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Positive Material Identification (PMI) with XRF analyzers to verify exact alloy grades (304/316/EN19/Hardox) prior to dispatch.
              </p>
            </div>

            <div className="p-5 bg-background rounded-xl border border-border shadow-sm hover-elevate">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Custom Band-Saw Cutting</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                In-house automatic saw cutting, waterjet shearing, and cut-to-length custom blanking services for fast execution.
              </p>
            </div>

            <div className="p-5 bg-background rounded-xl border border-border shadow-sm hover-elevate">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Centralized Stockyard</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Extensive 50,000+ sq. ft. ready inventory stockyard in Girgaon, Mumbai ensuring 24-48 hr express All India logistics.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
          <h2 className="text-3xl font-bold mb-6">Why Choose NATIONAL STEEL & ALLOYS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3.5 bg-background rounded-lg shadow-sm border border-border/50">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium">Extensive inventory of premium stainless steel, carbon steel, and specialty alloys</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-background rounded-lg shadow-sm border border-border/50">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium">Complete Mill Test Certificates (MTC EN 10204 3.1 & 3.2) & Third Party Inspection</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-background rounded-lg shadow-sm border border-border/50">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium">Competitive factory-direct pricing with no minimum order constraints</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-background rounded-lg shadow-sm border border-border/50">
              <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium">Fast and reliable All India Express Delivery to all industrial corridors</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-background rounded-lg shadow-sm border border-border/50">
              <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium">Over 20 years of trusted industry experience under CEO Champak Sain</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-background rounded-lg shadow-sm border border-border/50">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium">In-house saw cutting, shearing, and custom length processing services</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
