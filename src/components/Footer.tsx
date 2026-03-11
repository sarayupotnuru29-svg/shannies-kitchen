import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/categories", label: "Categories" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/cart", label: "Cart" },
];

const categoryLinks = [
  { to: "/categories/custom-cakes", label: "Custom Cakes" },
  { to: "/categories/healthy-bakes", label: "Healthy Bakes" },
  { to: "/categories/b2b", label: "B2B" },
  { to: "/categories/corporate-gifting", label: "Corporate Gifting" },
  { to: "/categories/festive-hampers", label: "Festive Hampers" },
  { to: "/categories/return-gifts", label: "Return Gifts" },
  { to: "/categories/dessert-table", label: "Dessert Table" },
  { to: "/categories/season-specials", label: "Seasons Specials" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Shannies Kitchen" className="h-14 w-auto rounded-lg" />
            </Link>
            <p className="font-display text-lg text-secondary-foreground/90">Shannie's Kitchen</p>
            <p className="text-sm text-secondary-foreground/60 mt-1">Healthy Kitchen • Wholesome Treats</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              {categoryLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:9959555466">9959555466</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <a href="mailto:shannieshealthykitchen@gmail.com">shannieshealthykitchen@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <MapPin className="h-4 w-4 text-primary" />
                Miyapur
              </li>
              <li>
                <a
                  href="https://www.instagram.com/shannies_kitchen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  @shannies_kitchen
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-secondary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} Shannie's Kitchen. All rights reserved.
          </p>
          <a
            href="https://www.instagram.com/shannies_kitchen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground/50 hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
