import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const allProducts = [
  {
    title: "SS Plate",
    category: "Stainless Steel",
    description: "Premium stainless steel plates for industrial applications",
    image: "/assets/SS PLATE  MAMTA STEEL TRADERS.jpg",
    grades: "304, 304L, 316, 316L, 310s, 904L"
  },
  {
    title: "SS Rod",
    category: "Stainless Steel",
    description: "High-quality stainless steel rods for various applications",
    image: "/assets/SS ROD  MAMTA STEEL TRADERS.jpg",
    grades: "303, 304, 316, 321"
  },
  {
    title: "SS Rod Premium",
    category: "Stainless Steel",
    description: "Premium grade stainless steel rods",
    image: "/assets/SS ROD MAMTA STEEL TRADERS.jpg",
    grades: "304, 316, 321H"
  },
  {
    title: "SS Round Bar",
    category: "Stainless Steel",
    description: "Precision-engineered stainless steel round bars",
    image: "/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg",
    grades: "303, 304, 316, 321H, 347"
  },
  {
    title: "SS Sheet",
    category: "Stainless Steel",
    description: "High-quality stainless steel sheets in various thicknesses",
    image: "/assets/SS SHEET  MAMTA STEEL TRADERS.jpg",
    grades: "304, 304L, 316, 316L"
  },
  {
    title: "SS Tubes",
    category: "Stainless Steel",
    description: "Durable stainless steel tubes for industrial use",
    image: "/assets/SS TUBES MAMTA STEEL TRADERS.jpg",
    grades: "304, 304L, 316, 316L"
  },
  {
    title: "Stainless Steel Products",
    category: "Stainless Steel",
    description: "Complete range of stainless steel products",
    image: "/assets/Stainless_Steel-mamtasteeltraders.webp",
    grades: "304, 316, 310, 904L"
  },
  {
    title: "Alloy Steel",
    category: "Alloy Steel",
    description: "High-strength alloy steel for demanding applications",
    image: "/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg",
    grades: "EN19, C45, 16Mo3, SA387"
  },
  {
    title: "Alloy Steel Premium",
    category: "Alloy Steel",
    description: "Premium grade alloy steel products",
    image: "/assets/ALLOYS STEEL  MAMTA STEEL TRADERS2.jpg",
    grades: "EN19, C45, Hardox"
  },
  {
    title: "Alloy Steel Special",
    category: "Alloy Steel",
    description: "Special grade alloy steel for industrial use",
    image: "/assets/ALLOYS STEEL MAMTA STEEL TRADERS 0.jpg",
    grades: "EN24, EN31, EN Series"
  },
  {
    title: "Alloy Steel Advanced",
    category: "Alloy Steel",
    description: "Advanced alloy steel for specialized applications",
    image: "/assets/ALLOYS-STEEL MAMTA STEEL TRADERS..avif",
    grades: "Rockstar, Hardox, EN19"
  },
  {
    title: "Aluminium Products",
    category: "Non-Ferrous",
    description: "High-quality aluminium products for various industries",
    image: "/assets/ALUMINIUM MAMTA STEEL TRADERS..jpg",
    grades: "6061, 6063, 7075"
  },
  {
    title: "Aluminium Premium",
    category: "Non-Ferrous",
    description: "Premium grade aluminium products",
    image: "/assets/ALUMINIUM MAMTA STEEL TRADERS.jpg",
    grades: "6061-T6, 6063-T5"
  },
  {
    title: "Aluminium Plate",
    category: "Non-Ferrous",
    description: "Durable aluminium plates for construction and industrial use",
    image: "/assets/ALUMINIUM PLATE MAMTA STEEL TRADERS.jpg",
    grades: "5052, 5083, 6061"
  },
  {
    title: "Brass Products",
    category: "Non-Ferrous",
    description: "High-quality brass products for various applications",
    image: "/assets/BRASS MAMTA STEEL TRADERS..jpg",
    grades: "C26000, C27000, C36000"
  },
  {
    title: "Carbon Steel",
    category: "Carbon Steel",
    description: "Reliable carbon steel for industrial applications",
    image: "/assets/CARBON STEEL MAMTA STEEL TRADERS.jpg",
    grades: "EN8, EN9, EN24"
  },
  {
    title: "Carbon Steel Premium",
    category: "Carbon Steel",
    description: "Premium grade carbon steel products",
    image: "/assets/carbon-steel-mamta steel traders.jpg",
    grades: "100CR6, 52100, EN Series"
  },
  {
    title: "Steel Circles",
    category: "Structural Steel",
    description: "Precision steel circles for various applications",
    image: "/assets/CIRCLES  MAMTA STEEL TRADERS.jpg",
    grades: "IS2062, ASTM A36"
  },
  {
    title: "Copper Fitting",
    category: "Non-Ferrous",
    description: "High-quality copper fittings for plumbing and industrial use",
    image: "/assets/COPPER FITTING  MAMTA STEEL TRADERS.jpg",
    grades: "C11000, C12200"
  },
  {
    title: "Copper Products",
    category: "Non-Ferrous",
    description: "Premium copper products for electrical and plumbing",
    image: "/assets/COPPER MAMTA STEEL TRADERS.jpg",
    grades: "C11000, C10200"
  },
  {
    title: "CS Products",
    category: "Carbon Steel",
    description: "Carbon steel products for construction",
    image: "/assets/CS  MAMTA STEEL TRADERS00.jpg",
    grades: "IS2062, EN Standards"
  },
  {
    title: "CS Flanges",
    category: "Carbon Steel",
    description: "Carbon steel flanges for piping connections",
    image: "/assets/CS FLANGES  MAMTA STEEL TRADERS.jpg",
    grades: "ANSI B16.5, DIN Standards"
  },
  {
    title: "Steel Flats",
    category: "Structural Steel",
    description: "Durable steel flats for construction applications",
    image: "/assets/FLATS  MAMTA STEEL TRADERS.jpg",
    grades: "IS2062, ASTM A36"
  },
  {
    title: "Steel Products - Type A",
    category: "Structural Steel",
    description: "Quality steel products for industrial use",
    image: "/assets/IMG-20250924-WA0181.jpg",
    grades: "IS2062 Standards"
  },
  {
    title: "Steel Products - Type B",
    category: "Structural Steel",
    description: "Premium steel products for construction",
    image: "/assets/IMG-20250924-WA0183.jpg",
    grades: "IS2062, EN Standards"
  },
  {
    title: "Steel Products - Type C",
    category: "Structural Steel",
    description: "High-quality steel products for fabrication",
    image: "/assets/IMG-20250924-WA0185.jpg",
    grades: "ASTM A36, EN Standards"
  },
  {
    title: "Steel Products - Type D",
    category: "Structural Steel",
    description: "Reliable steel products for various applications",
    image: "/assets/IMG-20250924-WA0188.jpg",
    grades: "IS2062 E250, E350"
  },
  {
    title: "Steel Products Range",
    category: "Structural Steel",
    description: "Comprehensive range of steel products",
    image: "/assets/MAMTA STEEL TRADERS000.jpg",
    grades: "IS2062, ASTM Standards"
  },
  {
    title: "Nuts & Bolts",
    category: "Fasteners",
    description: "High-quality nuts and bolts for various applications",
    image: "/assets/NUTS BOLTS  MAMTA STEEL TRADERS.jpg",
    grades: "Grade 8.8, Grade 10.9"
  },
  {
    title: "Nuts & Bolts Premium",
    category: "Fasteners",
    description: "Premium grade nuts and bolts for industrial use",
    image: "/assets/NUTS BOLTS  MAMTA STEEL TRADERS0.jpg",
    grades: "Grade 8.8, Grade 10.9, Grade 12.9"
  },
  {
    title: "SS Round Bar Premium",
    category: "Stainless Steel",
    description: "Premium stainless steel round bars",
    image: "/assets/SS  ROUND BAR  MAMTA STEEL TRADERS...jpg",
    grades: "304, 316, 321H, 347"
  },
  {
    title: "SS Round Bar Standard",
    category: "Stainless Steel",
    description: "Standard stainless steel round bars",
    image: "/assets/SS  ROUND BAR  MAMTA STEEL TRADERS.jpg",
    grades: "303, 304, 316"
  },
  {
    title: "SS 304",
    category: "Stainless Steel",
    description: "Grade 304 stainless steel products",
    image: "/assets/SS 304  MAMTA STEEL TRADERS.jpg",
    grades: "304, 304L"
  },
  {
    title: "SS 304 Coil",
    category: "Stainless Steel",
    description: "Grade 304 stainless steel coils",
    image: "/assets/SS 304 COIL MAMTA STEEL TRADERS.jpg",
    grades: "304, 304L"
  },
  {
    title: "SS 304 Pipe",
    category: "Stainless Steel",
    description: "Grade 304 stainless steel pipes",
    image: "/assets/SS 304 PIPE MAMTA STEEL TRADERS.jpg",
    grades: "304, 304L"
  },
  {
    title: "SS 304 Plate",
    category: "Stainless Steel",
    description: "Grade 304 stainless steel plates",
    image: "/assets/SS 304 PLATE  MAMTA STEEL TRADERS.jpg",
    grades: "304, 304L"
  },
  {
    title: "SS 304 Tubes",
    category: "Stainless Steel",
    description: "Grade 304 stainless steel tubes",
    image: "/assets/SS 304 TUBES MAMTA STEEL TRADERS.jpg",
    grades: "304, 304L"
  },
  {
    title: "SS 304L",
    category: "Stainless Steel",
    description: "Grade 304L stainless steel products",
    image: "/assets/SS 304L  MAMTA STEEL TRADERS.jpg",
    grades: "304L"
  },
  {
    title: "SS Circle",
    category: "Stainless Steel",
    description: "Stainless steel circles for various applications",
    image: "/assets/SS CIRCLE MAMTA STEEL TRADERS.jpg",
    grades: "304, 316"
  },
  {
    title: "SS Coil",
    category: "Stainless Steel",
    description: "High-quality stainless steel coils",
    image: "/assets/SS COIL MAMTA STEEL TRADERS 0.jpg",
    grades: "304, 316, 310"
  },
  {
    title: "SS Coil Premium",
    category: "Stainless Steel",
    description: "Premium grade stainless steel coils",
    image: "/assets/SS COIL MAMTA STEEL TRADERS.jpg",
    grades: "304, 316, 904L"
  },
  {
    title: "SS ERW Pipe Fitting",
    category: "Stainless Steel",
    description: "Stainless steel ERW pipe fittings",
    image: "/assets/SS ERW PIPE FITTING  MAMTA STEEL TRADERS.jpg",
    grades: "304, 316"
  },
  {
    title: "SS Flange",
    category: "Stainless Steel",
    description: "High-quality stainless steel flanges",
    image: "/assets/SS FLANGE  MAMTA STEEL TRADERS.jpg",
    grades: "ANSI B16.5, DIN Standards"
  },
  {
    title: "SS Flat Bar",
    category: "Stainless Steel",
    description: "Stainless steel flat bars for fabrication",
    image: "/assets/SS FLAT BAR  MAMTA STEEL TRADERS.jpg",
    grades: "304, 316"
  },
  {
    title: "SS Forge Fitting",
    category: "Stainless Steel",
    description: "Stainless steel forged fittings",
    image: "/assets/SS FORGE FITTING  MAMTA STEEL TRADERS.jpg",
    grades: "304, 316, 321"
  },
  {
    title: "SS Hexagon",
    category: "Stainless Steel",
    description: "Stainless steel hexagon bars",
    image: "/assets/SS HEXAGON  MAMTA STEEL TRADERS.jpg",
    grades: "303, 304, 316"
  },
  {
    title: "SS Products Collection",
    category: "Stainless Steel",
    description: "Complete collection of stainless steel products",
    image: "/assets/SS MAMTA STEEL TRADERS000.jpg",
    grades: "304, 316, 310, 904L"
  },
  {
    title: "SS Nuts & Bolts",
    category: "Fasteners",
    description: "Stainless steel nuts and bolts",
    image: "/assets/SS NOTS BOLTS MAMTA STEEL TRADERS.jpg",
    grades: "A2, A4 Grade"
  },
  {
    title: "SS Pipe",
    category: "Stainless Steel",
    description: "High-quality stainless steel pipes",
    image: "/assets/SS PIPE   MAMTA STEEL TRADERS.jpg",
    grades: "304, 316, 321"
  },
  {
    title: "SS Pipe Fitting",
    category: "Stainless Steel",
    description: "Stainless steel pipe fittings",
    image: "/assets/SS PIPE FITTING  MAMTA STEEL TRADERS.jpg",
    grades: "304, 316"
  },
  {
    title: "SS Pipe Standard",
    category: "Stainless Steel",
    description: "Standard stainless steel pipes",
    image: "/assets/SS PIPE MAMTA STEEL TRADERS.jpg",
    grades: "304, 304L, 316, 316L"
  }
];

const categories = ["All", "Stainless Steel", "Alloy Steel", "Carbon Steel", "Structural Steel", "Non-Ferrous", "Fasteners"];

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
