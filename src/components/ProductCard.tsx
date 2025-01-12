import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  availability: number;
}

export const ProductCard = ({ id, name, category, price, image, availability }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="product-card glass-card cursor-pointer" 
      onClick={() => navigate(`/product/${id}`)}
    >
      <CardHeader className="space-y-1">
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          <Badge 
            variant={availability > 0 ? "default" : "destructive"}
            className="ml-2"
          >
            {availability > 0 ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
        <CardTitle className="text-xl font-medium">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-48 mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-md"
            loading="lazy"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold">${price}</span>
        </div>
      </CardContent>
    </Card>
  );
};