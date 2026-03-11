import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        to={`/categories/${category.slug}`}
        className="group block bg-card rounded-xl overflow-hidden shadow-bakery hover:shadow-bakery-lg transition-all duration-300 hover:-translate-y-1"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">{category.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{category.description}</p>
          <span className="inline-block text-sm font-medium text-primary hover:text-green-dark transition-colors">
            Read More →
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
