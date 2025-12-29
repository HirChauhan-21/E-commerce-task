import FilterSidebar from "../components/filter-sidebar";
import ProductGrid from "../components/product-gird";

export default function Store() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex gap-6">
        <FilterSidebar />
        <div className="flex-1">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}
