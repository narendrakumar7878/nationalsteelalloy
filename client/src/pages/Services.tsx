import { useEffect } from "react";
import { Wrench, Truck, FileCheck, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Custom Cutting & Fabrication",
    description: "Precision cutting and fabrication services tailored to your exact specifications and requirements."
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Reliable and timely delivery of products across Mumbai and pan-India with proper handling and care."
  },
  {
    icon: FileCheck,
    title: "Material Testing & Certification",
    description: "Complete material test certificates and quality documentation for all our products."
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Consultation",
    description: "Expert technical support to help you choose the right materials for your specific applications."
  }
];

export default function Services() {
  useEffect(() => {
    document.title = "Services - NATIONAL STEEL & ALLOYS";
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-background/90">
            Comprehensive solutions for all your steel and alloy needs
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.title} className="bg-card p-8 rounded-lg border border-card-border hover-elevate">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted/30 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Product Range</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Pipes & Tubes (Welded & Seamless)</li>
                <li>• Sheets & Plates</li>
                <li>• Round Bars & Flat Bars</li>
                <li>• Square Bars & Hollow Bars</li>
                <li>• Forged Bars</li>
                <li>• Fittings & Flanges</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Material Grades</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Stainless Steel (304, 316, 310, 321, etc.)</li>
                <li>• Alloy Steel (EN19, C45, Hardox, etc.)</li>
                <li>• Carbon Steel (EN8, EN24, 100CR6, etc.)</li>
                <li>• Mild Steel (IS2062 series)</li>
                <li>• Special & Exotic Grades</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-foreground text-background p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Value-Added Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Quality Assurance</h3>
              <p className="text-sm text-background/80">
                All products come with complete test certificates and quality documentation
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Inventory Management</h3>
              <p className="text-sm text-background/80">
                Extensive stock availability for immediate delivery requirements
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Custom Solutions</h3>
              <p className="text-sm text-background/80">
                Tailored solutions to meet your specific project requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
