import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";

export default function FilterSidebar() {
  return (
    <aside className="w-72 border rounded-xl p-5 space-y-6">

      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Filters</h2>
        <Button variant="outline" size="sm">
          Clear All
        </Button>
      </div>

      <Separator /> 

      <div>
        <h3 className="font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {["Electronics", "Jewelry", "Men's Clothing", "Women's Clothing"].map(
            (item) => (
              <div key={item} className="flex items-center gap-2">
                <Checkbox />
                <span className="text-sm">{item}</span>
              </div>
            )
          )}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-3">Price Range</h3>
        <Slider defaultValue={[500]} max={1000} step={50} />
        <div className="flex justify-between text-sm mt-2">
          <span>$0</span>
          <span>$1000</span>
        </div>

        <Button className="w-full mt-3" variant="outline">
          Apply Price Filter
        </Button>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-3">Minimum Rating</h3>
        {[4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center gap-2 mb-2">
            <Checkbox />
            <span className="text-sm">{star}+ Stars</span>
          </div>
        ))}
      </div>
    </aside>
  );
}