import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit, User } from "lucide-react";
import { toast } from "sonner";

interface Customer {
  id: number;
  name: string;
  phone: string;
  subscribed: boolean;
}

const mockCustomers: Customer[] = [
  { id: 1, name: "John Doe", phone: "+1 234-567-8900", subscribed: true },
  { id: 2, name: "Jane Smith", phone: "+1 234-567-8901", subscribed: false },
];

const Customers = () => {
  const [customers, setCustomers] = useState(mockCustomers);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (customer: Customer) => {
    setEditingCustomer(customer);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editingCustomer) {
      setCustomers(customers.map(c => 
        c.id === editingCustomer.id ? editingCustomer : c
      ));
      toast.success("Customer details updated successfully!");
      setIsEditing(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Customers</h1>
      <div className="space-y-4">
        {customers.map((customer) => (
          <Card key={customer.id} className="w-full">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <User className="h-8 w-8 text-gray-400" />
                  <div>
                    <h3 className="font-semibold">{customer.name}</h3>
                    <p className="text-sm text-gray-500">{customer.phone}</p>
                    <Badge variant={customer.subscribed ? "default" : "secondary"}>
                      {customer.subscribed ? "Subscribed" : "Not Subscribed"}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleEdit(customer)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Customer Details</DialogTitle>
          </DialogHeader>
          {editingCustomer && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input
                  value={editingCustomer.name}
                  onChange={(e) =>
                    setEditingCustomer({
                      ...editingCustomer,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input
                  value={editingCustomer.phone}
                  onChange={(e) =>
                    setEditingCustomer({
                      ...editingCustomer,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium">Subscribed</label>
                <Switch
                  checked={editingCustomer.subscribed}
                  onCheckedChange={(checked) =>
                    setEditingCustomer({
                      ...editingCustomer,
                      subscribed: checked,
                    })
                  }
                />
              </div>
              <Button onClick={handleSave} className="w-full">
                Save Changes
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Customers;