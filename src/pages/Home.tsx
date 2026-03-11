import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Award, Leaf, Truck } from "lucide-react";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import heroBg from "@/assets/hero-bg.jpg";

const reasons = [
  { icon: Leaf, title: "100% Wholesome", desc: "Made with natural, healthy ingredients — no preservatives." },
  { icon: Heart, title: "Baked with Love", desc: "Every treat is handcrafted with passion and care." },
  { icon: Award, title: "Premium Quality", desc: "We use only the finest ingredients for the best taste." },
  { icon: Truck, title: "Timely Delivery", desc: "Fresh from our kitchen to your doorstep, always on time." },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4"
          >
            Shannie's Kitchen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 font-body tracking-wide mb-8"
          >
            Healthy Kitchen • Wholesome Treats
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/categories"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-medium hover:bg-green-dark transition-colors shadow-bakery"
            >
              Explore Our Treats
            </Link>
            <a
              href="https://wa.me/919959555466?text=Hello%20Shannies%20Kitchen!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/20 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 px-8 py-3 rounded-full font-body font-medium hover:bg-card/30 transition-colors"
            >
              Order via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">About Shannie's Kitchen</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Born from a passion for healthy, homemade goodness, Shannie's Kitchen brings you wholesome treats
              crafted with the finest natural ingredients. From custom celebration cakes to guilt-free healthy bakes,
              every creation is made with love in our Miyapur kitchen. We believe that good food should be both
              delicious and nourishing — and that's exactly what we deliver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Specialties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/categories"
              className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-body font-medium hover:bg-brown-dark transition-colors"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <r.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Follow Us on Instagram</h2>
          <p className="text-muted-foreground mb-8">See our latest creations @shannies_kitchen</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {categories.slice(0, 4).map((cat) => (
              <a
                key={cat.id}
                href="https://www.instagram.com/shannies_kitchen/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-lg overflow-hidden group"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Love */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">Customer Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Priya S.", text: "The healthiest cakes I've ever tasted! My kids love them." },
              { name: "Rahul M.", text: "Perfect corporate gift boxes. Our clients were thrilled!" },
              { name: "Ananya K.", text: "The festive hampers were gorgeous. Will order again!" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-6 shadow-bakery"
              >
                <p className="text-muted-foreground italic mb-4">"{t.text}"</p>
                <p className="font-display font-semibold text-foreground">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary-foreground mb-4">Ready to Order?</h2>
          <p className="text-secondary-foreground/70 mb-8">Send us a message on WhatsApp and let's create something delicious!</p>
          <a
            href="https://wa.me/919959555466?text=Hello%20Shannies%20Kitchen!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-body font-medium text-lg hover:bg-green-dark transition-colors shadow-bakery"
          >
            Order via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
