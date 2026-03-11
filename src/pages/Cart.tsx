import { motion } from "framer-motion";
import { Trash2, Send, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeItem, clearCart } = useCart();

  const handleSendEnquiry = () => {
    const itemList = items.map((i) => `- ${i.title} (${i.category})`).join("\n");
    const msg = `Hello Shannies Kitchen! I am interested in these items:\n\n${itemList}\n\nPlease share more details.`;
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
            Enquiry Cart
          </motion.h1>
          <p className="text-muted-foreground text-lg">Select items you're interested in and send an enquiry via WhatsApp.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground/40 mb-4" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Browse our categories and add items you're interested in.</p>
              <Link
                to="/categories"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-medium hover:bg-green-dark transition-colors"
              >
                Browse Categories
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-bakery"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-body font-medium text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 rounded-full text-destructive hover:bg-destructive/10 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleSendEnquiry}
                  className="flex-1 bg-primary text-primary-foreground py-3 rounded-full font-body font-medium flex items-center justify-center gap-2 hover:bg-green-dark transition-colors shadow-bakery"
                >
                  <Send className="h-4 w-4" />
                  Send Enquiry via WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  className="px-6 py-3 rounded-full font-body font-medium border border-border text-muted-foreground hover:bg-muted transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
