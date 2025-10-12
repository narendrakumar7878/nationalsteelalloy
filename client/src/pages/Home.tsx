import { useEffect } from "react";
import { Link } from "wouter";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Truck, Award } from "lucide-react";

const products = [
  {
    title: "Sheets & Plates",
    category: "Stainless Steel",
    description: "High-quality stainless steel sheets and plates in various grades and thicknesses",
    image: "/assets/sheets-plates.jpg",
    grades: "Available: 304, 304L, 316, 316L, 310, 321, 347, 904L"
  },
  {
    title: "Pipes",
    category: "Stainless Steel",
    description: "Premium stainless steel pipes - welded and seamless for industrial applications",
    image: "/assets/pipes.jpg",
    grades: "Grades: 304, 316, 310, 321 - Welded & Seamless"
  },
  {
    title: "Round Bars",
    category: "Stainless Steel",
    description: "Precision-engineered stainless steel round bars for manufacturing",
    image: "/assets/round-bars.jpg",
    grades: "Grades: 303, 304, 316, 321H, 347"
  },
  {
    title: "Flanges",
    category: "Stainless Steel",
    description: "High-quality stainless steel flanges for piping connections",
    image: "/assets/flanges.jpg",
    grades: "ANSI B16.5, DIN, BS Standards"
  },
  {
    title: "Angles",
    category: "Structural Steel",
    description: "Durable steel angles for construction and structural applications",
    image: "/assets/angles.jpg",
    grades: "IS2062, ASTM A36, EN Standards"
  }
];

const features = [
  {
    icon: CheckCircle,
    title: "Premium Quality",
    description: "All products meet international standards and specifications"
  },
  {
    icon: Shield,
    title: "Certified Products",
    description: "Complete documentation and material test certificates provided"
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description: "Fast and reliable delivery across Mumbai and pan-India"
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "Over 20 years of trusted service in the steel industry"
  }
];

export default function Home() {
  useEffect(() => {
    document.title = "NATIONAL STEEL & ALLOYS - Leading Steel Supplier in Mumbai";
  }, []);

  return (
    <div>
      <Hero />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About NATIONAL STEEL & ALLOYS</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              As a leading importer, stockist, and supplier, we provide premium quality steel and alloy products 
              to industries across India. Our commitment to quality and customer satisfaction has made us a 
              trusted name in the steel industry for over two decades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Product Range</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive selection of steel and alloy products for every industrial need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} onClick={() => console.log(`Clicked: ${product.title}`)} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button size="lg" data-testid="button-view-all-products">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ProductGallery />

      <section className="py-20 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-background/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a quote or to discuss your steel and alloy requirements
          </p>
          <Link href="/contact">
            <Button size="lg" variant="default" data-testid="button-cta-contact">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
