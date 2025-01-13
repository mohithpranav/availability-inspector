import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const isInShopDetail = location.pathname.includes('/shop/');

  const handlePriceEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/shop/${shopId}/product/${id}`);
  };

  return (
    <Card 
      className="product-card glass-card cursor-pointer w-full h-24" 
      onClick={onClick}
    >
      <CardContent className="p-4 h-full">
        <div className="flex items-center space-x-4 h-full">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 object-cover rounded-md flex-shrink-0"
            loading="lazy"
          />
          <div className="flex-grow min-w-0">
            <h3 className="text-lg font-medium truncate">{name}</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
              <Badge 
                variant={availability > 0 ? "default" : "destructive"}
                className="text-xs"
              >
                {availability > 0 ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between h-full flex-shrink-0">
            <span className="text-lg font-semibold">${price}</span>
            {isInShopDetail && (
              <Button
                variant="outline"
                size="sm"
                onClick={handlePriceEdit}
                className="mt-2"
              >
                Change Price
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};