import SEO from "@/components/SEO";
import { Phone, Mail, MapPin, Clock, Building2, FileText, User, Share2, MessageCircle, ArrowRight } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const whatsappUrl = "https://wa.me/919769339987?text=Hello%20NATIONAL%20STEEL%20%26%20ALLOYS,%20I%20want%20to%20inquire%20about%20your%20products.";

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact NATIONAL STEEL & ALLOYS",
    "description": "Contact info, email, phone and location for NATIONAL STEEL & ALLOYS in Mumbai.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "NATIONAL STEEL & ALLOYS",
      "email": "info@nationalsteelalloys.com",
      "telephone": "+919769339987",
      "sameAs": ["https://www.instagram.com/national_steel_alloys/"]
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us - NATIONAL STEEL & ALLOYS"
        description="Get in touch with NATIONAL STEEL & ALLOYS. Email: info@nationalsteelalloys.com, Mobile: +91 9769339987. Office at M.S. Bawan Patel Road, Ramagalli, Mumbai-400 004."
        keywords="Contact National Steel Alloys, info@nationalsteelalloys.com, Steel supplier contact Mumbai, Champak Sain contact, Instagram national_steel_alloys"
        jsonLd={contactSchema}
      />

      <div className="relative bg-foreground text-background py-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/SS 304 PIPE MAMTA STEEL TRADERS.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/75 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-background/90">
            Get in touch with us for all your steel and alloy requirements across India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          <Card className="p-6 hover-elevate border-t-4 border-t-primary">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Phone & WhatsApp</h3>
                <p className="text-muted-foreground mb-1">
                  <a href="tel:9769339987" className="hover:text-primary transition-colors font-semibold">
                    Mobile: 9769339987
                  </a>
                </p>
                <p className="text-muted-foreground mb-3">
                  <a href="tel:02267436635" className="hover:text-primary transition-colors">
                    Tel: 022 6743 6635
                  </a>
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:underline"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-elevate border-t-4 border-t-primary">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Email Address</h3>
                <p className="text-sm font-semibold mb-1">
                  <a 
                    href="mailto:info@nationalsteelalloys.com" 
                    className="text-primary hover:underline transition-colors break-all"
                    data-testid="link-primary-email"
                  >
                    info@nationalsteelalloys.com
                  </a>
                </p>
                <p className="text-xs text-muted-foreground">
                  Secondary:{" "}
                  <a 
                    href="mailto:nationalstainless@yahoo.com" 
                    className="hover:text-primary transition-colors break-all"
                  >
                    nationalstainless@yahoo.com
                  </a>
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-elevate border-t-4 border-t-primary">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                <p className="text-muted-foreground mb-1 font-medium">Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p className="text-xs text-muted-foreground">Sunday: Closed (Inquiries answered on Monday)</p>
              </div>
            </div>
          </Card>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Company Details & Social Media Box */}
          <div className="lg:col-span-6 space-y-8">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Company Details</h2>
                  <p className="text-xs text-muted-foreground">NATIONAL STEEL & ALLOYS</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-muted/40">
                  <Building2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Registered Company</p>
                    <p className="font-bold text-foreground">NATIONAL STEEL & ALLOYS</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-muted/40">
                  <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">GST Registration No.</p>
                    <p className="font-bold text-foreground" data-testid="text-gst">27AJJPN4917B2Z9</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-muted/40">
                  <User className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Chief Executive Officer (CEO)</p>
                    <p className="font-bold text-foreground" data-testid="text-ceo">Champak Sain</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-muted/40">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Official Email</p>
                    <a href="mailto:info@nationalsteelalloys.com" className="font-bold text-primary hover:underline break-all">
                      info@nationalsteelalloys.com
                    </a>
                  </div>
                </div>

                {/* Social Media Details Section */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <FaInstagram className="w-6 h-6 text-pink-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Official Social Media</p>
                    <a
                      href="https://www.instagram.com/national_steel_alloys/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-foreground hover:text-pink-600 transition-colors flex items-center gap-1 mt-0.5"
                      data-testid="link-instagram-company"
                    >
                      @national_steel_alloys
                      <Share2 className="w-3.5 h-3.5 ml-1 text-muted-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Location</h2>
              </div>
              <div className="space-y-3">
                <a 
                  href="https://www.google.com/maps/place/National+Steel+And+Alloys/@18.9607373,72.8283202,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cf43a4fda459:0x341ceceeca195176!8m2!3d18.9607373!4d72.8283202!16s%2Fg%2F11b80c5_z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base leading-relaxed hover:text-primary transition-colors block text-muted-foreground"
                >
                  <strong className="text-foreground block mb-1">NATIONAL STEEL & ALLOYS</strong>
                  45/49, Gulam Mohammad Building,<br />
                  M.S. Bawan Patel Road, Ramagalli,<br />
                  Mumbai-400 004, Maharashtra, India
                </a>
              </div>
            </Card>
          </div>

          {/* Instant Connect Box via WhatsApp & Direct Phone */}
          <div className="lg:col-span-6">
            <Card className="p-8 shadow-lg border-2 border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-background to-background h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-6">
                  <FaWhatsapp className="w-10 h-10 text-[#25D366]" />
                </div>
                <h2 className="text-3xl font-extrabold mb-3 text-foreground">Instant Sales & Quote Desk</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Get instant pricing, mill test certificates, freight estimation, and stock availability directly on WhatsApp. Click below to start chatting with our technical sales team right away!
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all text-lg"
                    data-testid="button-[#25D366]-connect"
                  >
                    <FaWhatsapp className="w-6 h-6 fill-current" />
                    Chat Directly on WhatsApp
                  </a>

                  <a
                    href="tel:9769339987"
                    className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-6 rounded-xl shadow-md transition-all text-lg"
                    data-testid="button-call-direct"
                  >
                    <Phone className="w-5 h-5" />
                    Call Sales: +91 9769339987
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-muted/40 border border-border text-xs text-muted-foreground space-y-2">
                <p className="font-semibold text-foreground text-sm"> Why Chat on WhatsApp?</p>
                <p>• Receive instant PDF catalog and material test reports (MTC EN 10204 3.1).</p>
                <p>• Share custom dimensions and drawings for quick cut-to-size quotes.</p>
                <p>• Real-time All India express dispatch status updates.</p>
              </div>
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
}
