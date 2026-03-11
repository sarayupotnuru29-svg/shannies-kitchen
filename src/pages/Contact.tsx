import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react";

const categoryOptions = [
  "Custom Cakes",
  "Healthy Bakes",
  "B2B",
  "Corporate Gifting",
  "Festive Hampers",
  "Return Gifts",
  "Dessert Table Orders",
  "Season Specials",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", category: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Shannies Kitchen! My name is ${form.name}. Phone: ${form.phone}. Email: ${form.email}. Category: ${form.category}. Message: ${form.message}`;
    window.open(`https://wa.me/919959555466?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-accent text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-muted-foreground text-lg">We'd love to hear from you! Reach out for orders & enquiries.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <a href="tel:9959555466" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">9959555466</p>
                  </div>
                </a>
                <a href="mailto:shannieshealthykitchen@gmail.com" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">shannieshealthykitchen@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Miyapur</p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/shannies_kitchen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <p className="font-medium">@shannies_kitchen</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                />
                <select
                  required
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                >
                  <option value="">Select Category</option>
                  {categoryOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-body font-medium flex items-center justify-center gap-2 hover:bg-green-dark transition-colors shadow-bakery"
                >
                  <Send className="h-4 w-4" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
