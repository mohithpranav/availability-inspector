import { useParams } from "react-router-dom";
import { Store, Phone, MapPin } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";

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
  const shop = mockShops.find((s) => s.id === Number(id));

  if (!shop) {
    return <div className="container mx-auto p-6">Shop not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Store className="h-6 w-6" />
          <h1 className="text-2xl font-bold">{shop.name}</h1>
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

      <h2 className="text-xl font-semibold mb-4">Available Products</h2>
      <div className="space-y-4">
        {shop.products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            image={product.image}
            availability={product.availability}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopDetail;
