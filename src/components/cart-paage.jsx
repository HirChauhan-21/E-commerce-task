import { Button } from "@/components/ui/button";

export default function CartPage({ cartItems, onBack }) {
  return (
    <div>
      <Button onClick={onBack} >
        ← Back to Products
      </Button>

      <h2 className="text-2xl font-bold mb-6">
        Your Cart ({cartItems.length})
      </h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex gap-4 border p-4 rounded-lg">
              <img src={item.image} className="h-20 w-20 object-contain" />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="font-semibold">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
