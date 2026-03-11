import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Award, Leaf, Truck, Cake, UtensilsCrossed, MapPin, Sparkles } from "lucide-react";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpeg";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import insta5 from "@/assets/insta-5.jpg";
import insta6 from "@/assets/insta-6.jpg";

const reasons = [
  { icon: Leaf, title: "100% Wholesome", desc: "Made with natural, healthy ingredients — no preservatives." },
  { icon: Heart, title: "Baked with Love", desc: "Every treat is handcrafted with passion and care." },
  { icon: Award, title: "Premium Quality", desc: "We use only the finest ingredients for the best taste." },
  { icon: Truck, title: "Timely Delivery", desc: "Fresh from our kitchen to your doorstep, always on time." },
];

const heroHighlights = [
  { icon: Cake, text: "Custom Cakes & Desserts" },
  { icon: Leaf, text: "Fresh, Natural Ingredients" },
  { icon: UtensilsCrossed, text: "Homemade Quality" },
  { icon: MapPin, text: "Local Delivery Available" },
];

const instaImages = [
  { src: insta1, alt: "Chocolate drip cake with berries" },
  { src: insta2, alt: "Homemade chocolate chip cookies" },
  { src: insta3, alt: "Elegant dessert gift box" },
  { src: insta4, alt: "Healthy millet muffins" },
  { src: insta5, alt: "Dessert table setup" },
  { src: insta6, alt: "Festive hamper with sweets" },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.img
            src={logo}
            alt="Shannie's Kitchen"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="h-28 md:h-36 w-auto rounded-full mx-auto mb-6 drop-shadow-2xl"
            style={{ mixBlendMode: "screen" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-base uppercase tracking-[0.3em] text-primary-foreground/70 font-body mb-3"
          >
            Healthy Kitchen • Wholesome Treats
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-tight"
          >
            Wholesome Desserts,{" "}
            <span className="text-green-light italic">Crafted with Care</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base md:text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            From custom celebration cakes to guilt-free healthy bakes, we bring you handcrafted treats 
            made with the finest natural ingredients — delivered fresh from our Miyapur kitchen.
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10"
          >
            {heroHighlights.map((h) => (
              <div key={h.text} className="flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-primary-foreground/15 rounded-full px-4 py-2">
                <h.icon className="h-4 w-4 text-green-light" />
                <span className="text-xs md:text-sm text-primary-foreground/90 font-body">{h.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/categories"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body font-medium hover:bg-green-dark transition-colors shadow-bakery-lg text-base"
            >
              Explore Our Treats
            </Link>
            <a
              href="https://wa.me/919959555466?text=Hello%20Shannies%20Kitchen!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/15 backdrop-blur-sm text-primary-foreground border border-primary-foreground/25 px-8 py-3.5 rounded-full font-body font-medium hover:bg-card/25 transition-colors text-base"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-6 w-6 text-gold mx-auto mb-3" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Follow Us on Instagram
            </h2>
            <p className="text-muted-foreground mb-2">See our latest creations</p>
            <a
              href="https://www.instagram.com/shannies_kitchen/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary font-body font-semibold hover:underline mb-10 text-lg"
            >
              @shannies_kitchen →
            </a>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {instaImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="aspect-square rounded-xl overflow-hidden shadow-bakery"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
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
