import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const heroImages = [
  "/assets/pipes.jpg",
  "/assets/sheets-plates.jpg",
  "/assets/round-bars.jpg",
  "/assets/flanges.jpg",
  "/assets/angles.jpg"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 transition-opacity duration-1000"
        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-background mb-6">
          <span className="block text-primary text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest uppercase mb-3 text-emerald-400">
            NATIONAL STEEL &amp; ALLOYS
          </span>
          Leading Supplier of
          <span className="block text-primary mt-1">Steel &amp; Alloys</span>
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
      </div>
    </section>
  );
}
