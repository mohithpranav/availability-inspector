import { Store, Phone, MapPin } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface Shop {
  id: number;
  name: string;
  phone: string;
  address: string;
  products: Array<{
    id: number;
    name: string;
    price: number;
    stock: number;
  }>;
}

interface ShopCardProps {
  shop: Shop;
  onClick: () => void;
}

export const ShopCard = ({ shop, onClick }: ShopCardProps) => {
  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer glass-card"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-center gap-2">
          <Store className="h-5 w-5" />
          <h3 className="font-semibold text-lg">{shop.name}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>{shop.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{shop.address}</span>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            {shop.products.length} products available
          </div>
        </div>
      </CardContent>
    </Card>
  );
};