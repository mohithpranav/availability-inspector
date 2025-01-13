import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit, Plus, User } from "lucide-react";
import { toast } from "sonner";

interface Employee {
  id: number;
  name: string;
  phone: string;
}

const mockEmployees: Employee[] = [
  { id: 1, name: "Alice Johnson", phone: "+1 234-567-8902" },
  { id: 2, name: "Bob Wilson", phone: "+1 234-567-8903" },
];

const Employees = () => {
  const [employees, setEmployees] = useState(mockEmployees);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [newEmployee, setNewEmployee] = useState<Omit<Employee, "id">>({
    name: "",
    phone: "",
  });

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editingEmployee) {
      setEmployees(employees.map(e => 
        e.id === editingEmployee.id ? editingEmployee : e
      ));
      toast.success("Employee details updated successfully!");
      setIsEditing(false);
    }
  };

  const handleAdd = () => {
    const newId = Math.max(...employees.map(e => e.id)) + 1;
    setEmployees([...employees, { ...newEmployee, id: newId }]);
    setNewEmployee({ name: "", phone: "" });
    setIsAdding(false);
    toast.success("Employee added successfully!");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Employees</h1>
        <Button onClick={() => setIsAdding(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>

      <div className="space-y-4">
        {employees.map((employee) => (
          <Card key={employee.id} className="w-full">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <User className="h-8 w-8 text-gray-400" />
                  <div>
                    <h3 className="font-semibold">{employee.name}</h3>
                    <p className="text-sm text-gray-500">{employee.phone}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleEdit(employee)}
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
            <DialogTitle>Edit Employee Details</DialogTitle>
          </DialogHeader>
          {editingEmployee && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input
                  value={editingEmployee.name}
                  onChange={(e) =>
                    setEditingEmployee({
                      ...editingEmployee,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input
                  value={editingEmployee.phone}
                  onChange={(e) =>
                    setEditingEmployee({
                      ...editingEmployee,
                      phone: e.target.value,
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

      <Dialog open={isAdding} onOpenChange={setIsAdding}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Employee</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input
                value={newEmployee.name}
                onChange={(e) =>
                  setNewEmployee({
                    ...newEmployee,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <Input
                value={newEmployee.phone}
                onChange={(e) =>
                  setNewEmployee({
                    ...newEmployee,
                    phone: e.target.value,
                  })
                }
              />
            </div>
            <Button onClick={handleAdd} className="w-full">
              Add Employee
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Employees;