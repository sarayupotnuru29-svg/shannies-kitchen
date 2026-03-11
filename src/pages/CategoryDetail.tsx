import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";

const CategoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const { addItem, removeItem, isInCart } = useCart();

  if (!category) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Category Not Found</h1>
          <Link to="/categories" className="text-primary hover:underline">← Back to Categories</Link>
        </div>
      </div>
    );
  }

  const inCart = isInCart(category.id);

  // Generate placeholder gallery items from the category image
  const galleryImages = Array.from({ length: 6 }, (_, i) => ({
    id: `${category.id}-${i}`,
    image: category.image,
    title: `${category.title} - Item ${i + 1}`,
  }));

  const handleToggleCart = (item: { id: string; title: string }) => {
    if (isInCart(item.id)) {
      removeItem(item.id);
    } else {
      addItem({ id: item.id, title: item.title, category: category.title, image: category.image });
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img src={category.image} alt={category.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-3"
          >
            {category.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            {category.description}
          </motion.p>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">{category.longDescription}</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-xl overflow-hidden shadow-bakery"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <button
                    onClick={() => handleToggleCart(item)}
                    className={`p-2 rounded-full transition-colors ${
                      isInCart(item.id)
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {isInCart(item.id) ? <Check className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add category to cart */}
      <section className="py-8 text-center">
        <button
          onClick={() =>
            inCart
              ? removeItem(category.id)
              : addItem({ id: category.id, title: category.title, category: category.title, image: category.image })
          }
          className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-body font-medium transition-colors shadow-bakery ${
            inCart
              ? "bg-secondary text-secondary-foreground hover:bg-brown-dark"
              : "bg-primary text-primary-foreground hover:bg-green-dark"
          }`}
        >
          {inCart ? <Check className="h-5 w-5" /> : <ShoppingBag className="h-5 w-5" />}
          {inCart ? "Added to Enquiry" : "Add to Enquiry Cart"}
        </button>
      </section>
    </div>
  );
};

export default CategoryDetail;
