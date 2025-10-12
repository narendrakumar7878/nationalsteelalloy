import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    url: "/assets/pipes.jpg",
    title: "Stainless Steel Pipes",
    description: "Premium quality stainless steel pipes and tubes"
  },
  {
    url: "/assets/sheets-plates.jpg",
    title: "Sheets & Plates",
    description: "High-quality steel sheets and plates in various grades"
  },
  {
    url: "/assets/round-bars.jpg",
    title: "Round Bars",
    description: "Precision-engineered stainless steel round bars"
  },
  {
    url: "/assets/flanges.jpg",
    title: "Flanges",
    description: "Quality stainless steel flanges for industrial use"
  },
  {
    url: "/assets/angles.jpg",
    title: "Steel Angles",
    description: "Structural steel angles for construction"
  }
];

export default function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Product Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive range of premium steel and alloy products
          </p>
        </div>

        <div 
          className="relative aspect-[16/9] md:aspect-[21/9] max-w-6xl mx-auto rounded-lg overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <img
            src={galleryImages[currentIndex].url}
            alt={galleryImages[currentIndex].title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end">
            <div className="p-8 text-background">
              <h3 className="text-2xl font-bold mb-2">{galleryImages[currentIndex].title}</h3>
              <p className="text-background/90">{galleryImages[currentIndex].description}</p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-background"
            onClick={goToPrevious}
            data-testid="button-gallery-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-background"
            onClick={goToNext}
            data-testid="button-gallery-next"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-background/50"
                }`}
                data-testid={`button-gallery-dot-${index}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
