import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-foreground border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="/assets/logo-removebg-preview.png" alt="NATIONAL STEEL & ALLOYS Logo" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-primary font-bold text-sm sm:text-base leading-tight">NATIONAL STEEL & ALLOYS</span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-${link.label.toLowerCase()}`}>
                <Button
                  variant="ghost"
                  className={`text-background hover:text-primary ${
                    location === link.href ? "text-primary" : ""
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-background p-2 focus:outline-none"
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-primary" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Overlay Mobile Menu (Items Centered & Body Scroll Locked) */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 lg:hidden bg-foreground/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center p-6 border-t border-border/50 animate-in fade-in duration-200">
          <div className="w-full max-w-sm flex flex-col items-center justify-center space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="w-full">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full py-3.5 px-6 rounded-xl text-center font-bold text-xl tracking-wide transition-all ${
                    location === link.href 
                      ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                      : "text-background/90 hover:bg-primary/20 hover:text-primary"
                  }`}
                  data-testid={`mobile-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
