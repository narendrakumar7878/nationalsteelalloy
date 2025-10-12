import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  grades?: string;
  onClick?: () => void;
}

export default function ProductCard({ title, category, description, image, grades, onClick }: ProductCardProps) {
  return (
    <Card 
      className="hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 overflow-hidden group" 
      onClick={onClick}
      data-testid={`card-product-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={`${title} - NATIONAL STEEL & ALLOYS`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            {category}
          </Badge>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-3">{description}</p>
        {grades && (
          <p className="text-xs text-muted-foreground/80 mb-3 line-clamp-2">{grades}</p>
        )}
        <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
          View Details
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </CardContent>
    </Card>
  );
}
