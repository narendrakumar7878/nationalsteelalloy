import { useLocation, Link } from "wouter";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import { productsData } from "@/data/products";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Truck, Award, Sparkles } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Premium Quality",
    description: "All products meet international ASTM, ASME, EN & DIN specifications"
  },
  {
    icon: Shield,
    title: "Certified MTC 3.1",
    description: "Complete documentation and original Mill Test Certificates provided"
  },
  {
    icon: Truck,
    title: "All India Express Delivery",
    description: "Fast doorstep logistics across Mumbai, Maharashtra & nationwide"
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "Over 20 years of trusted service under leadership of Champak Sain"
  }
];

export default function Home() {
  const [, setLocation] = useLocation();

  // Pick top 4 featured products
  const featuredProducts = productsData.slice(0, 4);

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${window.location.origin}/#organization`,
        "name": "NATIONAL STEEL & ALLOYS",
        "legalName": "NATIONAL STEEL & ALLOYS",
        "alternateName": [
          "NATIONAL STEEL AND ALLOYS",
          "National Steel Alloys",
          "National Steel & Alloys Mumbai",
          "National Steel Mumbai",
          "Champak Sain National Steel"
        ],
        "url": window.location.origin,
        "logo": `${window.location.origin}/assets/logo-removebg-preview.png`,
        "email": "info@nationalsteelalloys.com",
        "telephone": "+919769339987",
        "vatID": "27AJJPN4917B2Z9",
        "sameAs": [
          "https://www.instagram.com/national_steel_alloys/",
          "https://www.google.com/maps/place/National+Steel+And+Alloys/@18.9607373,72.8283202,17z"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${window.location.origin}/#website`,
        "name": "NATIONAL STEEL & ALLOYS",
        "url": window.location.origin,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${window.location.origin}/products?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <div>
      <SEO
        title="NATIONAL STEEL & ALLOYS - Official Website | Steel & Alloy Supplier Mumbai"
        description="NATIONAL STEEL & ALLOYS is India's leading importer, stockist, and supplier of Stainless Steel, Alloy Steel, Carbon Steel, Aluminium & Fasteners in Mumbai. CEO Champak Sain."
        keywords="NATIONAL STEEL & ALLOYS, NATIONAL STEEL AND ALLOYS, National Steel Alloys, National Steel & Alloys Mumbai, National Steel Mumbai, Champak Sain, Stainless Steel Supplier Mumbai, Alloy Steel Stockist, Steel Supplier India"
        jsonLd={homeSchema}
      />

      <Hero />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 inline-block">
              Trusted Since 2004
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">About NATIONAL STEEL & ALLOYS</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed">
              As a premier importer, stockist, manufacturer, and supplier, NATIONAL STEEL & ALLOYS provides 
              top-tier Stainless Steel, Alloy Steel, Carbon Steel, Aluminium, Copper, and Fastener products to engineering, 
              chemical, power, and construction sectors across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 bg-muted/20 rounded-xl border border-border/50 hover-elevate">
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
            <div className="inline-flex items-center gap-1 text-xs font-semibold text-primary mb-2">
              <Sparkles className="w-4 h-4" /> Click Any Card to View Full Details & Specifications
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Our Featured Product Range</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive selection of steel plates, seamless pipes, round bars, and flanges available with express delivery nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                category={product.category}
                description={product.description}
                image={product.image}
                grades={product.grades}
                onClick={() => setLocation(`/product/${product.id}`)}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button size="lg" className="rounded-full shadow-md px-8" data-testid="button-view-all-products">
                View All Products & Grades
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ProductGallery />

      <Testimonials />

      <section className="py-20 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Custom Sizes or Emergency Delivery?</h2>
          <p className="text-background/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact our sales desk at info@nationalsteelalloys.com or call +91 9769339987 for instant mill quotes and cut-to-length material.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="default" className="rounded-full px-8" data-testid="button-cta-contact">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
