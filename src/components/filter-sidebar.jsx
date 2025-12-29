export default function FilterSidebar() {
  return (
    <div className="w-64 bg-white p-5 rounded-xl border">
      <h2 className="font-semibold mb-4">Filters</h2>

      <button className="w-full border rounded-md py-2 mb-4">
        Clear All
      </button>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Categories</h3>
        {["Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"].map(
          (cat) => (
            <label key={cat} className="flex items-center gap-2 mb-2">
              <input type="checkbox" />
              <span>{cat}</span>
            </label>
          )
        )}
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <input type="range" className="w-full" />
        <div className="flex justify-between text-sm mt-1">
          <span>$0</span>
          <span>$1000</span>
        </div>
        <button className="mt-3 w-full border rounded-md py-2">
          Apply Price Filter
        </button>
      </div>

      <div>
        <h3 className="font-medium mb-2">Minimum Rating</h3>
        {[4, 3, 2, 1].map((rate) => (
          <label key={rate} className="flex items-center gap-2 mb-2">
            <input type="checkbox" />
            <span>{rate}+ Stars</span>
          </label>
        ))}
      </div>
    </div>
  )
}
