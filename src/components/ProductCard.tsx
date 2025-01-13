import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  availability: number;
  onClick?: () => void;
}

export const ProductCard = ({ id, name, category, price, image, availability, onClick }: ProductCardProps) => {
  const navigate = useNavigate();
  const { id: shopId } = useParams();

  const handlePriceEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/shop/${shopId}/product/${id}`);
  };

  return (
    <Card 
      className="product-card glass-card cursor-pointer w-full" 
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-center space-x-6">
          <div className="relative h-24 w-24 flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-md"
              loading="lazy"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-2">
              <div className="space-y-1">
                <h3 className="text-xl font-medium">{name}</h3>
                <Badge variant="secondary" className="mr-2">
                  {category}
                </Badge>
                <Badge 
                  variant={availability > 0 ? "default" : "destructive"}
                  className="ml-2"
                >
                  {availability > 0 ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-2xl font-semibold">${price}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePriceEdit}
                >
                  Change Price
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};