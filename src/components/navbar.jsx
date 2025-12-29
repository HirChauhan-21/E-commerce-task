import { ShoppingCart, Heart, Store } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-6 py-4">
        
        <div className="flex items-center gap-2 font-bold text-lg">
          <Store />
          E-Store
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>

          <Link to="/cart">
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
