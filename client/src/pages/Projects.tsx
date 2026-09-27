import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import { ArrowRight, Building2 } from "lucide-react";

const projects = [
  {
    title: "Chemical Plant Reactor Installation",
    category: "Manufacturing",
    description: "Supplied SS 316L high-corrosion resistant plates and seamless pipes for a major chemical processing plant in Gujarat.",
    productId: "ss-plate",
    productName: "SS 316L Plate & Pipes",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
  },
  {
    title: "Commercial High-Rise Infrastructure",
    category: "Infrastructure",
    description: "Carbon steel structural components and IS2062 plates supplied for a 45-story commercial building project in Mumbai.",
    productId: "carbon-steel",
    productName: "Carbon Steel IS2062",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800"
  },
  {
    title: "Offshore Refinery & Gas Pipeline",
    category: "Energy",
    description: "High-pressure ASTM A106 carbon steel seamless pipes & ANSI B16.5 weld neck flanges for offshore oil & gas pipeline.",
    productId: "cs-flanges",
    productName: "CS Flanges & Pipes",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800"
  },
  {
    title: "Mining Bucket Liners & Excavator Wear Plates",
    category: "Mining",
    description: "Hardox 400 & EN24 wear-resistant steel plates for heavy-duty earthmoving equipment manufacturing in Jharkhand.",
    productId: "alloy-steel",
    productName: "Hardox Wear Plates",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800"
  },
  {
    title: "Dairy & Food Processing Facility",
    category: "Food Industry",
    description: "Hygienic 2B finish SS 304 stainless steel sheets & electro-polished tubes for milk processing & bottling line.",
    productId: "ss-sheet",
    productName: "SS 304 Hygienic Sheets",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
  },
  {
    title: "Thermal Power Station Turbine Overhaul",
    category: "Power Generation",
    description: "Specialized heat-resistant SS 321H round bars & alloy steel EN19 turbine components supplied for power plant.",
    productId: "ss-round-bar",
    productName: "SS 321H Round Bars",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800"
  }
];

export default function Projects() {
  const [, setLocation] = useLocation();

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Industrial Projects Delivered by NATIONAL STEEL & ALLOYS",
    "itemListElement": projects.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "CreativeWork",
        "name": p.title,
        "description": p.description
      }
    }))
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Industrial Projects & Client Success - NATIONAL STEEL & ALLOYS"
        description="Explore major engineering, construction, oil & gas, mining, and chemical projects supplied with premium steel and alloy products by NATIONAL STEEL & ALLOYS."
        keywords="Steel projects India, Chemical plant SS plates, Mining Hardox plates, Power plant alloy steel, NATIONAL STEEL & ALLOYS projects"
        jsonLd={projectsSchema}
      />

      <div className="relative bg-foreground text-background py-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/flanges.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/75 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Projects & Applications</h1>
          <p className="text-xl text-background/90">
            Proven track record of supplying certified steel & alloy materials across major Indian industries
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground text-base leading-relaxed">
            For over two decades, NATIONAL STEEL & ALLOYS has been the primary vendor of choice for complex structural, chemical, power, and infrastructure projects across India. Click any project to view product details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate cursor-pointer group"
              onClick={() => setLocation(`/product/${project.productId}`)}
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-foreground/80 backdrop-blur-sm text-background">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs font-semibold text-primary flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" /> Product: {project.productName}
                  </span>
                  <span className="text-xs font-bold text-foreground flex items-center group-hover:translate-x-1 transition-transform">
                    View Specs <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-muted/30 p-8 rounded-xl border border-border">
          <h2 className="text-2xl font-bold mb-6 text-center">Industries We Serve Across India</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
              <p className="font-semibold text-foreground">Heavy Manufacturing</p>
            </div>
            <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
              <p className="font-semibold text-foreground">Infrastructure & EPC</p>
            </div>
            <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
              <p className="font-semibold text-foreground">Oil & Gas Refineries</p>
            </div>
            <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
              <p className="font-semibold text-foreground">Thermal & Hydro Power</p>
            </div>
            <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
              <p className="font-semibold text-foreground">Chemical & Petrochemical</p>
            </div>
            <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
              <p className="font-semibold text-foreground">Pharma & Food Processing</p>
            </div>
            <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
              <p className="font-semibold text-foreground">Mining & Heavy Earthmoving</p>
            </div>
            <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
              <p className="font-semibold text-foreground">Marine & Offshore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
