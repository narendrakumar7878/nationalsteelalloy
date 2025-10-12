import ProductCard from "../ProductCard";

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        title="Stainless Steel Pipes"
        category="Stainless Steel"
        description="Premium quality welded and seamless pipes for industrial applications"
        image="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800"
        grades="Available in 304, 304L, 316, 316L, 310, 321 grades"
        onClick={() => console.log("Product card clicked")}
      />
    </div>
  );
}
