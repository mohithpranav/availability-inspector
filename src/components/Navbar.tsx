import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Grid, Box, Users, Store, Menu } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { icon: Grid, label: "Dashboard", path: "/" },
    { icon: Box, label: "Products", path: "/products" },
    { icon: Store, label: "Shops", path: "/shops" },
    { icon: Users, label: "Customers", path: "/customers" },
  ];

  const NavContent = () => (
    <div className="flex flex-col md:flex-row gap-4">
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
          onClick={() => setOpen(false)}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Admin Dashboard
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <NavContent />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-6">
              <NavContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};