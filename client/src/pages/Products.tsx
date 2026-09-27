import { useState } from "react";
import { useLocation } from "wouter";
import { productsData } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Sparkles } from "lucide-react";

const categories = [
  "All",
  "Stainless Steel",
  "Alloy Steel",
  "Carbon Steel",
  "Structural Steel",
  "Non-Ferrous",
  "Fasteners",
];

export default function Products() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.grades.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Steel & Alloy Product Catalog - NATIONAL STEEL & ALLOYS",
    "numberOfItems": filteredProducts.length,
    "itemListElement": filteredProducts.map((prod, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": prod.title,
        "description": prod.description,
        "category": prod.category,
        "url": `${window.location.origin}/product/${prod.id}`
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Steel & Alloy Products Catalog - NATIONAL STEEL & ALLOYS"
        description="Browse premium Stainless Steel, Alloy Steel, Carbon Steel, Aluminium, Copper & Fastener products. High quality, MTC 3.1 certified, express delivery across India."
        keywords="Stainless Steel Plates, SS Pipes, Alloy Steel Rounds, Carbon Steel Flanges, Fasteners, EN19, Hardox, All India Delivery"
        jsonLd={productsSchema}
      />

      <div className="relative bg-foreground text-background py-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/pipes.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/75 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">Our Product Range</h1>
          <p className="text-xl text-background/90 max-w-3xl">
            Comprehensive catalog of premium grade steel, alloy, non-ferrous products, and fasteners supplied directly from Mumbai.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by product name, grade (e.g. 304, EN19, Hardox)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11"
              data-testid="input-search-products"
            />
          </div>

          <div className="text-sm text-muted-foreground font-medium">
            Showing <span className="text-primary font-bold">{filteredProducts.length}</span> products
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full transition-all"
              data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-muted/20 rounded-xl border border-dashed border-border mt-6">
            <h3 className="text-xl font-bold mb-2">No products found</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              We couldn't find any products matching "{searchQuery}". Try searching for another grade or category.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Reset Search & Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
