import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import { motion } from "framer-motion";

const Categories = () => {
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
            Our Categories
          </motion.h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From custom celebration cakes to wholesome healthy bakes — explore everything Shannie's Kitchen has to offer.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
