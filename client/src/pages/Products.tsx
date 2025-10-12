import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const allProducts = [
  {
    title: "SS Sheets & Plates",
    category: "Stainless Steel",
    description: "High-quality stainless steel sheets and plates in various grades and thicknesses",
    image: "/assets/sheets-plates.jpg",
    grades: "304, 304L, 316, 316L, 310s, 904L"
  },
  {
    title: "SS Welded Pipes",
    category: "Stainless Steel",
    description: "High-quality welded stainless steel pipes for industrial applications",
    image: "/assets/pipes.jpg",
    grades: "304, 304L, 316, 316L"
  },
  {
    title: "SS Seamless Pipes",
    category: "Stainless Steel",
    description: "Premium seamless pipes for high-pressure applications",
    image: "/assets/pipes.jpg",
    grades: "304, 316, 310, 321"
  },
  {
    title: "SS Round Bars",
    category: "Stainless Steel",
    description: "Precision-engineered stainless steel round bars",
    image: "/assets/round-bars.jpg",
    grades: "303, 304, 316, 321H, 347"
  },
  {
    title: "SS Flanges",
    category: "Stainless Steel",
    description: "High-quality stainless steel flanges for piping connections",
    image: "/assets/flanges.jpg",
    grades: "ANSI B16.5, DIN, BS Standards"
  },
  {
    title: "Steel Angles",
    category: "Structural Steel",
    description: "Durable steel angles for construction and structural applications",
    image: "/assets/angles.jpg",
    grades: "IS2062, ASTM A36, EN Standards"
  },
  {
    title: "Alloy Steel Plates",
    category: "Alloy Steel",
    description: "High-strength alloy steel plates for demanding applications",
    image: "/assets/sheets-plates.jpg",
    grades: "EN19, C45, 16Mo3, SA387"
  },
  {
    title: "Alloy Steel Round Bars",
    category: "Alloy Steel",
    description: "Premium alloy steel round bars for specialized applications",
    image: "/assets/round-bars.jpg",
    grades: "EN19, C45, Hardox, Rockstar"
  },
  {
    title: "Carbon Steel Pipes",
    category: "Carbon Steel",
    description: "Reliable carbon steel pipes for various industrial uses",
    image: "/assets/pipes.jpg",
    grades: "EN8, EN9, EN24"
  },
  {
    title: "Carbon Steel Plates",
    category: "Carbon Steel",
    description: "Heavy-duty carbon steel plates for construction",
    image: "/assets/sheets-plates.jpg",
    grades: "100CR6, 52100, EN Series"
  },
  {
    title: "Mild Steel Sheets",
    category: "Mild Steel",
    description: "Cost-effective mild steel sheets for general purposes",
    image: "/assets/sheets-plates.jpg",
    grades: "IS2062 E250, E350"
  },
  {
    title: "MS Round Bars",
    category: "Mild Steel",
    description: "Standard mild steel round bars for fabrication",
    image: "/assets/round-bars.jpg",
    grades: "IS2062 E450"
  },
  {
    title: "MS Angles",
    category: "Mild Steel",
    description: "Mild steel angles for construction and fabrication work",
    image: "/assets/angles.jpg",
    grades: "IS2062 Standards"
  }
];

const categories = ["All", "Stainless Steel", "Alloy Steel", "Carbon Steel", "Mild Steel", "Structural Steel"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Products - NATIONAL STEEL & ALLOYS";
  }, []);

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <div className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-background/90">
            Comprehensive range of premium steel and alloy products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-testid="input-search-products"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
              onClick={() => console.log(`Clicked: ${product.title}`)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
