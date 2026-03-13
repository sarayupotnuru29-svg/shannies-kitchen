import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/shannies_logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/categories", label: "Categories" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-bakery">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Shannies Kitchen" className="h-12 w-auto rounded-lg" />
          <div className="hidden sm:block">
            <span className="font-display text-xl font-bold text-secondary">Shannie's</span>
            <span className="block text-xs text-muted-foreground font-body tracking-wider">Healthy Kitchen</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/cart" className="relative group">
            <ShoppingBag className="h-5 w-5 text-foreground/80 group-hover:text-primary transition-colors" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <Link to="/cart" className="relative">
            <ShoppingBag className="h-5 w-5 text-foreground/80" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block py-3 font-body text-sm font-medium border-b border-border/50 ${
                location.pathname === link.to ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
