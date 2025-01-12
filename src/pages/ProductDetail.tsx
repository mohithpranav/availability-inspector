import { useParams } from "react-router-dom";
import { ShopAvailability } from "@/components/ShopAvailability";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data - replace with your actual data
const mockProduct = {
  id: 1,
  name: "Premium Wireless Headphones",
  category: "Electronics",
  description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
  price: 299.99,
  image: "/placeholder.svg",
  specs: [
    "Active Noise Cancellation",
    "40h Battery Life",
    "Bluetooth 5.0",
  ],
};

const mockShops = [
  {
    id: 1,
    name: "Electronics Megastore",
    location: "123 Tech Street, Silicon Valley",
    price: 299.99,
    stock: 5,
  },
  {
    id: 2,
    name: "Audio Experts",
    location: "456 Sound Avenue, Music City",
    price: 289.99,
    stock: 3,
  },
  {
    id: 3,
    name: "Gadget World",
    location: "789 Device Road, Digital Town",
    price: 309.99,
    stock: 0,
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="relative h-96">
            <img
              src={mockProduct.image}
              alt={mockProduct.name}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-4">
            <Badge>{mockProduct.category}</Badge>
            <h1 className="text-4xl font-bold">{mockProduct.name}</h1>
            <p className="text-muted-foreground">{mockProduct.description}</p>
            
            <div className="space-y-2">
              <h3 className="font-semibold">Specifications:</h3>
              <ul className="list-disc list-inside space-y-1">
                {mockProduct.specs.map((spec, index) => (
                  <li key={index} className="text-muted-foreground">{spec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Available at Stores</h2>
          <div className="space-y-4">
            {mockShops.map((shop) => (
              <ShopAvailability key={shop.id} shop={shop} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;