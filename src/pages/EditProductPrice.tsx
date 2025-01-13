import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EditProductPrice = () => {
  const { shopId, productId } = useParams();
  const navigate = useNavigate();
  const [price, setPrice] = useState("");

  const handleUpdatePrice = () => {
    // Here you would typically make an API call to update the price
    toast.success("Price updated successfully!");
    navigate(`/shop/${shopId}`);
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Edit Product Price</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="price" className="text-sm font-medium">
                New Price ($)
              </label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter new price"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleUpdatePrice}>Update Price</Button>
              <Button variant="outline" onClick={() => navigate(`/shop/${shopId}`)}>
                Cancel
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProductPrice;