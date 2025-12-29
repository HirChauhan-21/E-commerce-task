import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import CartPage from "./cart-paage";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  if (showCart) {
    return <CartPage cartItems={cartItems} onBack={() => setShowCart(false)} />;
  }

  return (
    <>
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowCart(true)}
          className="relative bg-black text-white px-6 py-2 rounded-lg flex items-center gap-2"
        >
          <ShoppingCart size={18} />
          Cart
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs h-5 w-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </>
  );
}
