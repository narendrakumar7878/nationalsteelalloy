import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-background mb-6">
          Leading Supplier of
          <span className="block text-primary mt-2">Steel & Alloys</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-background/90 max-w-3xl mx-auto mb-8">
          Premium quality Stainless Steel, Alloy Steel, Carbon Steel, and Mild Steel products. 
          Trusted by industries across Mumbai and beyond for over two decades.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button size="lg" className="text-base px-8" data-testid="button-hero-quote">
              <Phone className="w-5 h-5 mr-2" />
              Get a Quote
            </Button>
          </Link>
          <Link href="/products">
            <Button size="lg" variant="outline" className="text-base px-8 bg-background/10 backdrop-blur-sm border-primary text-background hover:bg-primary hover:text-foreground" data-testid="button-hero-products">
              View Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">20+</div>
            <div className="text-background/80 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-background/80 mt-1">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-background/80 mt-1">Quality Assured</div>
          </div>
        </div>
      </div>
    </section>
  );
}
