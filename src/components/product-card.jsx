import { Heart, ShoppingCart } from "lucide-react"

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 bg-white relative">
      <button className="absolute top-3 right-3">
        <Heart size={18} />
      </button>

      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4"
      />

      <span className="text-xs bg-gray-100 px-2 py-1 rounded capitalize">
        {product.category}
      </span>

      <h3 className="font-medium mt-2 line-clamp-2">
        {product.title}
      </h3>

      <div className="text-sm text-yellow-500 mt-1">
        ⭐ {product.rating.rate} ({product.rating.count})
      </div>

      <p className="font-semibold text-lg mt-2">
        ${product.price}
      </p>

      <button className="mt-4 w-full bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2">
        <ShoppingCart size={16} />
        Add to Cart
      </button>
    </div>
  )
}
