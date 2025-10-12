import { useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Building2, FileText, User } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us - NATIONAL STEEL & ALLOYS";
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-background/90">
            Get in touch with us for all your steel and alloy requirements
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 hover-elevate">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-muted-foreground mb-1">
                  <a href="tel:9769339987" className="hover:text-primary transition-colors">
                    Mobile: 9769339987
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <a href="tel:02267436635" className="hover:text-primary transition-colors">
                    Tel: 022 6743 6635
                  </a>
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-elevate">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a 
                  href="mailto:nationalstainless@yahoo.com" 
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  nationalstainless@yahoo.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-elevate">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                <p className="text-muted-foreground mb-1">Mon - Sat: 9 AM - 6 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Location</h2>
            </div>
            <div className="space-y-2">
              <p className="text-lg leading-relaxed">
                45/49, Gulam Mohammad Building,<br />
                M.S. Bawan Patel Road, Ramagalli,<br />
                Mumbai-400 004, Maharashtra, India
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Company Details</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Company Name</p>
                  <p className="font-semibold">NATIONAL STEEL & ALLOYS</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">GST Number</p>
                  <p className="font-semibold">27AJJPN4917B2Z9</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">CEO</p>
                  <p className="font-semibold">Champak Sain</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
