import { useState } from "react";
import { motion } from "framer-motion";
import { allGalleryImages } from "@/data/galleryImages";

const filters = ["All", "Cakes", "Healthy", "Hampers", "Corporate", "Events"];

const Gallery = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? allGalleryImages : allGalleryImages.filter((item) => item.filter === active);

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
            Gallery
          </motion.h1>
          <p className="text-muted-foreground text-lg">A glimpse of everything we bake with love.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-colors ${
                  active === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                className="break-inside-avoid group"
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-bakery hover:shadow-bakery-lg transition-shadow">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No items found in this category.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
