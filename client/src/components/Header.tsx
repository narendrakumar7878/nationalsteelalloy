import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-50 bg-foreground border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="/assets/logo.png" alt="NATIONAL STEEL & ALLOYS Logo" className="h-10 w-auto" />
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
            <Link href="/contact">
              <Button variant="default" size="sm" className="ml-4" data-testid="button-get-quote">
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-background"
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-foreground border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-background hover:bg-primary/10 hover:text-primary transition-colors ${
                    location === link.href ? "bg-primary/20 text-primary" : ""
                  }`}
                  data-testid={`mobile-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="default" className="w-full mt-4" data-testid="button-mobile-get-quote">
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
