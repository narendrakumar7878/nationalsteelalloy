import { useState } from "react";
import { useRoute, Link, useLocation } from "wouter";
import { getProductById, getRelatedProducts } from "@/data/products";
import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Truck, 
  ShieldCheck, 
  Scissors, 
  Award, 
  FileText, 
  CheckCircle2, 
  MessageCircle, 
  PhoneCall, 
  Mail,
  ChevronRight,
  Sparkles,
  Building2
} from "lucide-react";
import NotFound from "./not-found";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  const productId = params?.id || "";
  const product = getProductById(productId);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!product) {
    return <NotFound />;
  }

  const activeImage = selectedImage || product.image;
  const relatedProducts = getRelatedProducts(product.id, product.category);

  // Direct WhatsApp quote link
  const whatsappMsg = encodeURIComponent(
    `Hello NATIONAL STEEL & ALLOYS, I am interested in getting a quote for: ${product.title} (Grades: ${product.grades}). Please share pricing and delivery details.`
  );
  const whatsappUrl = `https://wa.me/919769339987?text=${whatsappMsg}`;

  // Product Schema JSON-LD
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": window.location.origin + product.image,
    "description": product.description,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": "NATIONAL STEEL & ALLOYS"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "NATIONAL STEEL & ALLOYS",
        "email": "info@nationalsteelalloys.com",
        "telephone": "+919769339987"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${product.title} - NATIONAL STEEL & ALLOYS`}
        description={`${product.description}. Sourced with Mill Test Certificate (MTC EN 10204 3.1) and express All India delivery.`}
        keywords={`${product.title}, ${product.category}, ${product.grades}, Steel Supplier Mumbai, NATIONAL STEEL & ALLOYS`}
        ogImage={product.image}
        jsonLd={productSchema}
      />

      {/* Breadcrumb / Product Hero Header */}
      <div 
        className="relative bg-foreground text-background py-16 sm:py-20 overflow-hidden bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${activeImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45 backdrop-blur-[1px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-background/70 mb-4 flex-wrap">
            <Link href="/">
              <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products">
              <span className="hover:text-primary cursor-pointer transition-colors">Products</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">{product.title}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <Badge variant="secondary" className="mb-2 bg-primary text-primary-foreground font-semibold">
                {product.category}
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {product.title}
              </h1>
            </div>
            <Link href="/products">
              <Button variant="outline" className="text-background border-background/30 hover:bg-background hover:text-foreground gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Products
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Gallery & Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Image Preview & Thumbnails */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-border shadow-md relative group">
                <img
                  src={activeImage}
                  alt={`${product.title} - NATIONAL STEEL & ALLOYS`}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 text-primary shadow">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  MTC EN 10204 3.1 Tested
                </div>
              </div>

              {product.gallery && product.gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto p-2">
                  {product.gallery.map((img, idx) => {
                    const isActive = activeImage === img;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className={`w-20 h-20 rounded-xl transition-all flex-shrink-0 p-0.5 border-2 ${
                          isActive
                            ? "border-primary ring-2 ring-primary/40 shadow-md bg-primary/10"
                            : "border-border/60 opacity-75 hover:opacity-100 bg-background"
                        }`}
                        data-testid={`thumbnail-${idx}`}
                      >
                        <div className="w-full h-full rounded-lg overflow-hidden">
                          <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Core Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/10 flex flex-col items-center text-center">
                <Truck className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs font-semibold">All India Delivery</span>
                <span className="text-[10px] text-muted-foreground">Fast Dispatch</span>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/10 flex flex-col items-center text-center">
                <ShieldCheck className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs font-semibold">100% Quality Guaranteed</span>
                <span className="text-[10px] text-muted-foreground">Original Mill Certificate</span>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/10 flex flex-col items-center text-center">
                <Scissors className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs font-semibold">Custom Cutting</span>
                <span className="text-[10px] text-muted-foreground">Saw & Laser Cutting</span>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/10 flex flex-col items-center text-center">
                <Award className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs font-semibold">Factory Direct Rates</span>
                <span className="text-[10px] text-muted-foreground">Best Price Assured</span>
              </div>
            </div>

            {/* Product Overview & Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Product Overview & Specifications</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {product.fullDescription}
              </p>
            </div>

            {/* Available Grades Section */}
            {product.gradeList && product.gradeList.length > 0 && (
              <div className="p-5 bg-muted/40 rounded-xl border border-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" /> Available Steel Grades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.gradeList.map((grade) => (
                    <span
                      key={grade}
                      className="px-3 py-1 bg-background border border-primary/20 rounded-md text-sm font-semibold text-primary shadow-sm"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Technical Tabs */}
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="specifications" className="text-xs sm:text-sm">Specifications</TabsTrigger>
                <TabsTrigger value="chemical" className="text-xs sm:text-sm">Chemical Comp.</TabsTrigger>
                <TabsTrigger value="mechanical" className="text-xs sm:text-sm">Mechanical Props.</TabsTrigger>
              </TabsList>

              {/* Specifications Tab */}
              <TabsContent value="specifications" className="mt-4">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="divide-y divide-border">
                      {product.specifications.map((spec, index) => (
                        <div key={index} className="grid grid-cols-1 sm:grid-cols-3 p-3.5 hover:bg-muted/30 transition-colors text-sm">
                          <span className="font-semibold text-foreground">{spec.label}</span>
                          <span className="sm:col-span-2 text-muted-foreground">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Chemical Composition Tab */}
              <TabsContent value="chemical" className="mt-4">
                <Card className="overflow-hidden">
                  <CardContent className="p-0 overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-muted text-foreground font-semibold">
                        <tr>
                          <th className="p-3">Grade</th>
                          <th className="p-3">Carbon (C)</th>
                          <th className="p-3">Manganese (Mn)</th>
                          <th className="p-3">Silicon (Si)</th>
                          <th className="p-3">Chromium (Cr)</th>
                          <th className="p-3">Nickel (Ni)</th>
                          {product.chemicalComposition.some(c => c.mo) && <th className="p-3">Molybdenum (Mo)</th>}
                          {product.chemicalComposition.some(c => c.other) && <th className="p-3">Others</th>}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {product.chemicalComposition.map((comp, idx) => (
                          <tr key={idx} className="hover:bg-muted/20">
                            <td className="p-3 font-semibold text-primary">{comp.grade}</td>
                            <td className="p-3">{comp.c || "-"}</td>
                            <td className="p-3">{comp.mn || "-"}</td>
                            <td className="p-3">{comp.si || "-"}</td>
                            <td className="p-3">{comp.cr || "-"}</td>
                            <td className="p-3">{comp.ni || "-"}</td>
                            {product.chemicalComposition.some(c => c.mo) && <td className="p-3">{comp.mo || "-"}</td>}
                            {product.chemicalComposition.some(c => c.other) && <td className="p-3">{comp.other || "-"}</td>}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Mechanical Properties Tab */}
              <TabsContent value="mechanical" className="mt-4">
                <Card className="overflow-hidden">
                  <CardContent className="p-0 overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-muted text-foreground font-semibold">
                        <tr>
                          <th className="p-3">Grade</th>
                          <th className="p-3">Tensile Strength</th>
                          <th className="p-3">Yield Strength</th>
                          <th className="p-3">Elongation</th>
                          <th className="p-3">Hardness</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {product.mechanicalProperties.map((mech, idx) => (
                          <tr key={idx} className="hover:bg-muted/20">
                            <td className="p-3 font-semibold text-primary">{mech.grade}</td>
                            <td className="p-3">{mech.tensile}</td>
                            <td className="p-3">{mech.yield}</td>
                            <td className="p-3">{mech.elongation}</td>
                            <td className="p-3">{mech.hardness}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Industry Applications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Applications & Industry Use</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.applications.map((app, index) => (
                  <div key={index} className="flex items-start gap-2.5 p-3 rounded-lg bg-muted/30 border border-border/60">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery & Supply Banner */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary text-primary-foreground">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-1">All India Express Delivery 🚚</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.deliveryInfo}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Action Box & Inquiry Form */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Box */}
            <Card className="p-6 border-2 border-primary/20 shadow-lg sticky top-24">
              <div className="mb-6">
                <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 mb-2">In Ready Stock</Badge>
                <h3 className="text-2xl font-bold text-foreground">Get Instant Price Quote</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Contact our sales desk directly for mill price estimates, test certificates & freight options.
                </p>
              </div>

              {/* Direct WhatsApp & Call Buttons */}
              <div className="space-y-3 mb-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg shadow transition-all"
                  data-testid="button-whatsapp-quote"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  Get Quote on WhatsApp
                </a>

                <a
                  href="tel:9769339987"
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-lg shadow transition-all"
                  data-testid="button-call-sales"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call Sales: +91 9769339987
                </a>
              </div>

              {/* Quick Contact Specs */}
              <div className="space-y-3 pt-4 border-t border-border text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Sales Mail:</span>
                  <a href="mailto:info@nationalsteelalloys.com" className="font-medium text-primary hover:underline">
                    info@nationalsteelalloys.com
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Office Tel:</span>
                  <a href="tel:02267436635" className="font-medium text-foreground">
                    022 6743 6635
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium text-foreground text-right">Girgaon, Mumbai-400004</span>
                </div>
              </div>

              {/* Instant WhatsApp Help */}
              <div className="mt-6 pt-6 border-t border-border bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/20">
                <h4 className="font-bold text-sm mb-2 text-foreground flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                  Instant WhatsApp Quotation
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Click the button above to get real-time price quotes, test certificates, and shipping schedules directly from our sales desk.
                </p>
              </div>
            </Card>

          </div>

        </div>

        {/* Related Projects utilizing this Product */}
        {product.relatedProjects && product.relatedProjects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold">Projects Utilizing {product.title}</h2>
              <p className="text-muted-foreground mt-2">
                Real-world industrial installations and infrastructure projects supplied by NATIONAL STEEL & ALLOYS
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.relatedProjects.map((proj, idx) => (
                <Card key={idx} className="overflow-hidden hover-elevate">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-2 text-primary border-primary/30">
                      {proj.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                    <p className="text-sm text-muted-foreground">{proj.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Related Products</h2>
                <p className="text-sm text-muted-foreground">Explore other steel and alloy items in {product.category}</p>
              </div>
              <Link href="/products">
                <Button variant="ghost" className="text-primary hover:text-primary gap-1">
                  View All Products <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard
                  key={relProduct.id}
                  title={relProduct.title}
                  category={relProduct.category}
                  description={relProduct.description}
                  image={relProduct.image}
                  grades={relProduct.grades}
                  onClick={() => setLocation(`/product/${relProduct.id}`)}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
