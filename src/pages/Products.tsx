import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Mock data - replace with your actual data
const mockProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 299.99,
    image: "/placeholder.svg",
    availability: 5,
  },
  {
    id: 2,
    name: "Smart Watch Series X",
    category: "Wearables",
    price: 399.99,
    image: "/placeholder.svg",
    availability: 3,
  },
  {
    id: 3,
    name: "Professional Camera Kit",
    category: "Photography",
    price: 1299.99,
    image: "/placeholder.svg",
    availability: 0,
  },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Products</h1>
          <p className="text-muted-foreground">
            Browse and manage your product inventory
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;