import { Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
}) {
  return (
    <div className="border rounded-xl p-4 bg-white relative">

      <button
        className="absolute top-3 right-3"
        onClick={onToggleWishlist}
      >
        <Heart
          size={18}
        />
      </button>

      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4"
      />

      <h3 className="font-medium line-clamp-2">
        {product.title}
      </h3>

      <p className="font-semibold text-lg mt-2">
        ${product.price}
      </p>

      <button
        onClick={onAddToCart}
        className="mt-4 w-full bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2"
      >
        <ShoppingCart size={16} />
        Add to Cart
      </button>
    </div>
  );
}