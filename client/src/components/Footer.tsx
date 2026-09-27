import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/logo-removebg-preview.png" alt="NATIONAL STEEL & ALLOYS" className="h-12 w-auto" />
            </div>
            <h3 className="text-primary font-bold text-lg mb-2">NATIONAL STEEL & ALLOYS</h3>
            <p className="text-background/80 text-sm mb-2">GST No.: 27AJJPN4917B2Z9</p>
            <p className="text-background/80 text-sm">CEO: Champak Sain</p>
          </div>

          {/* Quick Links & Products - Side by Side on Mobile */}
          <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-1 lg:col-span-2 md:grid-cols-2">
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
                <li>
                  <Link href="/products">
                    <span className="hover:text-primary cursor-pointer transition-colors">Stainless Steel</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <span className="hover:text-primary cursor-pointer transition-colors">Alloy Steel</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <span className="hover:text-primary cursor-pointer transition-colors">Carbon Steel</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <span className="hover:text-primary cursor-pointer transition-colors">Mild Steel</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <span className="hover:text-primary cursor-pointer transition-colors">Pipes & Tubes</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <span className="hover:text-primary cursor-pointer transition-colors">Sheets & Plates</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <a href="tel:9769339987" className="hover:text-primary transition-colors block" data-testid="text-phone">9769339987</a>
                  <a href="tel:02267436635" className="hover:text-primary transition-colors block">022 6743 6635</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:info@nationalsteelalloys.com" className="text-background/90 hover:text-primary transition-colors block font-medium" data-testid="link-email">
                    info@nationalsteelalloys.com
                  </a>
                  <a href="mailto:nationalstainless@yahoo.com" className="text-background/70 hover:text-primary transition-colors text-xs block">
                    nationalstainless@yahoo.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FaInstagram className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/national_steel_alloys/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-colors"
                  data-testid="link-footer-instagram"
                >
                  @national_steel_alloys
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/place/National+Steel+And+Alloys/@18.9607373,72.8283202,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cf43a4fda459:0x341ceceeca195176!8m2!3d18.9607373!4d72.8283202!16s%2Fg%2F11b80c5_z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-colors" 
                  data-testid="text-address"
                >
                  45/49, Gulam Mohammad Building, M.S. Bawan Patel Road, Ramagalli, Mumbai-400 004
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/70">
          <p>&copy; {new Date().getFullYear()} NATIONAL STEEL & ALLOYS. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span>
              Developed by{" "}
              <a 
                href="https://www.linkedin.com/in/narendrakumar7878/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary font-semibold hover:underline transition-all"
              >
                Narendra Prajapati
              </a>
            </span>
            <div className="flex items-center gap-2">
              <a 
                href="https://www.linkedin.com/in/narendrakumar7878/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/n_b_parmar_6677/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                title="Instagram"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/narendrakumar7878" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
