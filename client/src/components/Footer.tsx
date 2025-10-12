import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/logo.png" alt="NATIONAL STEEL & ALLOYS" className="h-12 w-auto" />
            </div>
            <h3 className="text-primary font-bold text-lg mb-2">NATIONAL STEEL & ALLOYS</h3>
            <p className="text-background/80 text-sm mb-2">GST No.: 27AJJPN4917B2Z9</p>
            <p className="text-background/80 text-sm">CEO: Champak Sain</p>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                    <span className="text-background/80 hover:text-primary cursor-pointer transition-colors text-sm" data-testid={`footer-link-${item.toLowerCase()}`}>
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Stainless Steel</li>
              <li>Alloy Steel</li>
              <li>Carbon Steel</li>
              <li>Mild Steel</li>
              <li>Pipes & Tubes</li>
              <li>Sheets & Plates</li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p data-testid="text-phone">9769339987</p>
                  <p>022 6743 6635</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:nationalstainless@yahoo.com" className="text-background/80 hover:text-primary transition-colors" data-testid="link-email">
                  nationalstainless@yahoo.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-background/80" data-testid="text-address">
                  45/49, Gulam Mohammad Building, M.S. Bawan Patel Road, Ramagalli, Mumbai-400 004
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} NATIONAL STEEL & ALLOYS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
