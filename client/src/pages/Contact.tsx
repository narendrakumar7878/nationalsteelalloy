import { useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">Mobile: 9769339987</p>
                  <p className="text-muted-foreground">Tel: 022 6743 6635</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:nationalstainless@yahoo.com" className="text-muted-foreground hover:text-primary transition-colors">
                    nationalstainless@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    45/49, Gulam Mohammad Building,<br />
                    M.S. Bawan Patel Road, Ramagalli,<br />
                    Mumbai-400 004, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-card-border">
              <h3 className="font-bold text-lg mb-3">Company Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Company Name:</span>
                  <span className="font-medium">NATIONAL STEEL & ALLOYS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST Number:</span>
                  <span className="font-medium">27AJJPN4917B2Z9</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CEO:</span>
                  <span className="font-medium">Champak Sain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
