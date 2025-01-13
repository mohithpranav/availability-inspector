import { useParams, useNavigate } from "react-router-dom";
import { Store, Phone, MapPin, Pencil } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// Mock data - replace with actual data source later
const mockShops = [
  {
    id: 1,
    name: "Downtown Store",
    phone: "+1 234-567-8900",
    address: "123 Main St, Downtown",
    products: [
      { 
        id: 1, 
        name: "Product 1", 
        price: 19.99, 
        stock: 50,
        category: "Electronics",
        image: "/placeholder.svg",
        availability: 50
      },
      { 
        id: 2, 
        name: "Product 2", 
        price: 29.99, 
        stock: 30,
        category: "Electronics",
        image: "/placeholder.svg",
        availability: 30
      },
    ],
  },
  {
    id: 2,
    name: "Uptown Market",
    phone: "+1 234-567-8901",
    address: "456 High St, Uptown",
    products: [
      { 
        id: 3, 
        name: "Product 3", 
        price: 39.99, 
        stock: 20,
        category: "Electronics",
        image: "/placeholder.svg",
        availability: 20
      },
      { 
        id: 4, 
        name: "Product 4", 
        price: 49.99, 
        stock: 15,
        category: "Electronics",
        image: "/placeholder.svg",
        availability: 15
      },
    ],
  },
];

const ShopDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedShop, setEditedShop] = useState<any>(null);

  const shop = mockShops.find((s) => s.id === Number(id));

  if (!shop) {
    return <div className="container mx-auto p-6">Shop not found</div>;
  }

  const handleEdit = () => {
    setEditedShop({
      name: shop.name,
      phone: shop.phone,
      address: shop.address,
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    // Here you would typically make an API call to update the shop details
    toast.success("Shop details updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        {!isEditing ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Store className="h-6 w-6" />
                <h1 className="text-2xl font-bold">{shop.name}</h1>
              </div>
              <Button onClick={handleEdit} variant="outline" size="sm">
                <Pencil className="h-4 w-4 mr-2" />
                Edit Details
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{shop.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{shop.address}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Edit Shop Details</h2>
            <div className="space-y-4">
              <Input
                value={editedShop.name}
                onChange={(e) => setEditedShop({ ...editedShop, name: e.target.value })}
                placeholder="Shop Name"
              />
              <Input
                value={editedShop.phone}
                onChange={(e) => setEditedShop({ ...editedShop, phone: e.target.value })}
                placeholder="Phone Number"
              />
              <Input
                value={editedShop.address}
                onChange={(e) => setEditedShop({ ...editedShop, address: e.target.value })}
                placeholder="Address"
              />
              <div className="flex gap-2">
                <Button onClick={handleSave}>Save Changes</Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-4">Available Products</h2>
      <div className="space-y-4">
        {shop.products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onClick={() => navigate(`/shop/${shop.id}/product/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopDetail;