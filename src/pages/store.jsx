
import FilterSidebar from "../components/filter-sidebar"
import ProductGrid from "../components/product-gird"

export default function Store() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex gap-6">
        <FilterSidebar />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <p>Products</p>
            <select className="border rounded-md px-3 py-2">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating: High to Low</option>
              <option>Name: A to Z</option>
            </select>
          </div>

          <ProductGrid />
        </div>
      </div>
    </div>
  )
}
