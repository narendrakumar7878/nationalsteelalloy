import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

interface GalleryImage {
  url: string;
  title: string;
  productId?: string;
}

const allGalleryImages: GalleryImage[] = [
  { url: "/assets/pipes.jpg", title: "Stainless Steel Pipes & Tubes", productId: "ss-304-pipe" },
  { url: "/assets/sheets-plates.jpg", title: "Sheets & Plates", productId: "ss-plate" },
  { url: "/assets/round-bars.jpg", title: "Round Bars & Bright Rods", productId: "ss-round-bar" },
  { url: "/assets/flanges.jpg", title: "SS & CS Flanges", productId: "cs-flanges" },
  { url: "/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg", title: "Alloy Steel Products", productId: "alloy-steel" },
  { url: "/assets/ALLOYS STEEL  MAMTA STEEL TRADERS2.jpg", title: "Alloy Steel Premium", productId: "alloy-steel" },
  { url: "/assets/SS 304 PLATE  MAMTA STEEL TRADERS.jpg", title: "SS 304 Industrial Plate", productId: "ss-plate" },
  { url: "/assets/SS ROD  MAMTA STEEL TRADERS.jpg", title: "SS Bright Shaft Rods", productId: "ss-rod" },
  { url: "/assets/CARBON STEEL MAMTA STEEL TRADERS.jpg", title: "Carbon Steel Products", productId: "carbon-steel" },
  { url: "/assets/ALUMINIUM MAMTA STEEL TRADERS..jpg", title: "Aluminium Products", productId: "aluminium-products" },
  { url: "/assets/ALUMINIUM PLATE MAMTA STEEL TRADERS.jpg", title: "Aluminium Tooling Plates", productId: "aluminium-products" },
  { url: "/assets/BRASS MAMTA STEEL TRADERS..jpg", title: "Brass Components & Rods", productId: "copper-products" },
  { url: "/assets/COPPER MAMTA STEEL TRADERS.jpg", title: "Electrolytic Copper Busbars", productId: "copper-products" },
  { url: "/assets/COPPER FITTING  MAMTA STEEL TRADERS.jpg", title: "Copper Fittings", productId: "copper-products" },
  { url: "/assets/CS FLANGES  MAMTA STEEL TRADERS.jpg", title: "Carbon Steel Forged Flanges", productId: "cs-flanges" },
  { url: "/assets/CS  MAMTA STEEL TRADERS00.jpg", title: "Carbon Steel Products", productId: "carbon-steel" },
  { url: "/assets/NUTS BOLTS  MAMTA STEEL TRADERS.jpg", title: "High Tensile Fasteners", productId: "nuts-bolts" },
  { url: "/assets/SS NOTS BOLTS MAMTA STEEL TRADERS.jpg", title: "Stainless Steel Fasteners", productId: "nuts-bolts" },
  { url: "/assets/SS 304 COIL MAMTA STEEL TRADERS.jpg", title: "SS 304 Coils & Strips", productId: "ss-sheet" },
  { url: "/assets/SS 304 PIPE MAMTA STEEL TRADERS.jpg", title: "SS 304 Seamless Pipes", productId: "ss-304-pipe" },
  { url: "/assets/SS 304 TUBES MAMTA STEEL TRADERS.jpg", title: "SS 304 Heat Exchanger Tubes", productId: "ss-tubes" },
  { url: "/assets/SS CIRCLE MAMTA STEEL TRADERS.jpg", title: "Stainless Steel Circles", productId: "ss-plate" },
  { url: "/assets/SS ERW PIPE FITTING  MAMTA STEEL TRADERS.jpg", title: "SS ERW Pipe Fittings", productId: "ss-304-pipe" },
  { url: "/assets/SS FLANGE  MAMTA STEEL TRADERS.jpg", title: "Stainless Steel Flanges", productId: "ss-flange" },
  { url: "/assets/SS FORGE FITTING  MAMTA STEEL TRADERS.jpg", title: "SS Forged High Pressure Fittings", productId: "ss-flange" },
  { url: "/assets/SS HEXAGON  MAMTA STEEL TRADERS.jpg", title: "SS Hexagon Bright Bars", productId: "ss-rod" },
  { url: "/assets/angles.jpg", title: "Structural Steel Angles", productId: "carbon-steel" },
  { url: "/assets/FLATS  MAMTA STEEL TRADERS.jpg", title: "Steel Flat Bars", productId: "ss-rod" },
  { url: "/assets/CIRCLES  MAMTA STEEL TRADERS.jpg", title: "Steel Circles & Rings", productId: "carbon-steel" }
];

export default function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [, setLocation] = useLocation();
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allGalleryImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Auto-scroll thumbnail strip horizontally ONLY without jumping page viewport window
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const activeElement = container.children[currentIndex] as HTMLElement;
      if (activeElement) {
        const containerWidth = container.clientWidth;
        const elementLeft = activeElement.offsetLeft;
        const elementWidth = activeElement.clientWidth;
        const scrollTarget = elementLeft - (containerWidth / 2) + (elementWidth / 2);

        container.scrollTo({
          left: scrollTarget,
          behavior: "smooth"
        });
      }
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + allGalleryImages.length) % allGalleryImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allGalleryImages.length);
  };

  const currentItem = allGalleryImages[currentIndex];

  const handleCardClick = () => {
    if (currentItem.productId) {
      setLocation(`/product/${currentItem.productId}`);
    } else {
      setLocation("/products");
    }
  };

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">Our Product Gallery</h2>
        </div>

        {/* Main Photo Slider */}
        <div 
          className="relative aspect-[16/9] md:aspect-[21/9] max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border group cursor-pointer bg-foreground mb-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={handleCardClick}
          data-testid="gallery-main-slide"
        >
          <img
            src={currentItem.url}
            alt={currentItem.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-transparent to-transparent flex items-end">
            <div className="p-6 sm:p-8 text-background w-full">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow">
                {currentItem.title}
              </h3>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-foreground/40 backdrop-blur-md hover:bg-foreground/80 text-background rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            data-testid="button-gallery-prev"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-foreground/40 backdrop-blur-md hover:bg-foreground/80 text-background rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            data-testid="button-gallery-next"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Bottom Auto-Scrolling Thumbnail Slider (Scrollbar Hidden) */}
        <div className="max-w-5xl mx-auto overflow-hidden py-2">
          <div 
            ref={thumbnailContainerRef}
            className="flex gap-3 overflow-x-auto py-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {allGalleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-28 sm:w-32 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 group/thumb ${
                  idx === currentIndex 
                    ? "border-primary ring-2 ring-primary/40 scale-105 shadow-lg" 
                    : "border-border/60 opacity-60 hover:opacity-100"
                }`}
                data-testid={`gallery-thumb-${idx}`}
              >
                <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5">
                  <p className="text-[10px] font-semibold text-white truncate w-full text-center">
                    {img.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
