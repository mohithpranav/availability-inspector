import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShopCard } from "@/components/ShopCard";
import { AddShopDialog } from "@/components/AddShopDialog";

// Mock data - replace with actual data source later
const mockShops = [
  {
    id: 1,
    name: "Downtown Store",
    phone: "+1 234-567-8900",
    address: "123 Main St, Downtown",
    products: [
      { id: 1, name: "Product 1", price: 19.99, stock: 50 },
      { id: 2, name: "Product 2", price: 29.99, stock: 30 },
    ],
  },
  {
    id: 2,
    name: "Uptown Market",
    phone: "+1 234-567-8901",
    address: "456 High St, Uptown",
    products: [
      { id: 3, name: "Product 3", price: 39.99, stock: 20 },
      { id: 4, name: "Product 4", price: 49.99, stock: 15 },
    ],
  },
];

const Shops = () => {
  const [isAddShopOpen, setIsAddShopOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Shops</h1>
        <Button onClick={() => setIsAddShopOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Shop
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockShops.map((shop) => (
          <ShopCard
            key={shop.id}
            shop={shop}
            onClick={() => navigate(`/shop/${shop.id}`)}
          />
        ))}
      </div>

      <AddShopDialog open={isAddShopOpen} onOpenChange={setIsAddShopOpen} />
    </div>
  );
};

export default Shops;