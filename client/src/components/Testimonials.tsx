import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    text: "NATIONAL STEEL & ALLOYS has been our trusted supplier for over 5 years. Their quality products and timely delivery have helped us maintain our production schedules consistently."
  },
  {
    name: "Priya Sharma",
    location: "Pune",
    text: "Excellent service and competitive pricing! The team is very knowledgeable and always helps us find the right steel grades for our specific requirements."
  },
  {
    name: "Anil Patel",
    location: "Ahmedabad",
    text: "We've been sourcing our structural steel from NATIONAL STEEL & ALLOYS for years. Their product quality is unmatched, and the documentation is always perfect."
  },
  {
    name: "Suresh Menon",
    location: "Mumbai",
    text: "Outstanding quality and service! They always have the materials we need in stock, and their technical support team is extremely helpful."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by industries across India for quality steel products and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-elevate">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-sm text-muted-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
