import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Industrial Plant Installation",
    category: "Manufacturing",
    description: "Supply of stainless steel pipes and fittings for a major chemical processing plant in Maharashtra",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
  },
  {
    title: "Commercial Construction",
    category: "Infrastructure",
    description: "Carbon steel structural components for a large commercial building project in Mumbai",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800"
  },
  {
    title: "Oil & Gas Pipeline",
    category: "Energy",
    description: "High-grade alloy steel pipes for oil and gas pipeline infrastructure project",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800"
  },
  {
    title: "Mining Equipment",
    category: "Mining",
    description: "Hardox wear-resistant steel plates for heavy-duty mining equipment manufacturing",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800"
  },
  {
    title: "Food Processing Unit",
    category: "Food Industry",
    description: "Hygienic stainless steel products for food processing and packaging facility",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
  },
  {
    title: "Power Plant Components",
    category: "Power Generation",
    description: "Specialized alloy steel components for thermal power generation facility",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800"
  }
];

export default function Projects() {
  useEffect(() => {
    document.title = "Projects - NATIONAL STEEL & ALLOYS";
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-background/90">
            Successful delivery of quality steel products across diverse industries
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            Over the years, we have successfully supplied premium steel and alloy products to numerous 
            projects across various sectors including manufacturing, construction, energy, and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer" data-testid={`card-project-${index}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-muted/30 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <p className="font-semibold">Manufacturing</p>
            </div>
            <div className="p-4">
              <p className="font-semibold">Construction</p>
            </div>
            <div className="p-4">
              <p className="font-semibold">Oil & Gas</p>
            </div>
            <div className="p-4">
              <p className="font-semibold">Power Generation</p>
            </div>
            <div className="p-4">
              <p className="font-semibold">Chemical Processing</p>
            </div>
            <div className="p-4">
              <p className="font-semibold">Food Industry</p>
            </div>
            <div className="p-4">
              <p className="font-semibold">Mining</p>
            </div>
            <div className="p-4">
              <p className="font-semibold">Infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
