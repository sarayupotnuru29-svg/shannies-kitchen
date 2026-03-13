// === Custom Cakes ===
import cakeone from "@/assets/cakeone.jpeg";
import cake2 from "@/assets/cake2.jpeg";
import cake3 from "@/assets/cake3.jpeg";
import cake4 from "@/assets/cake4.jpeg";
import cake5 from "@/assets/cake5.jpeg";
import cake6 from "@/assets/cake6.jpeg";
import cake7 from "@/assets/cake7.jpeg";
import cake8 from "@/assets/cake8.jpeg";
import cake9 from "@/assets/cake9.jpeg";
import cake10 from "@/assets/cake10.jpeg";
import cake11 from "@/assets/cake11.jpeg";
import cake12 from "@/assets/cake12.jpeg";
import cake13 from "@/assets/cake13.jpeg";
import cake14 from "@/assets/cake14.jpeg";
import cake15 from "@/assets/cake15.jpeg";
import cake16 from "@/assets/cake16.jpeg";
import cake17 from "@/assets/cake17.jpeg";

// === Healthy Bakes ===
import healthy1 from "@/assets/healthy1.jpeg";
import healthy2 from "@/assets/healthy2.jpeg";
import healthythree from "@/assets/healthythree.jpeg";
import healthy4 from "@/assets/healthy4.jpeg";
import healthy5 from "@/assets/healthy5.jpeg";

// === Corporate / B2B ===
import Corporate1 from "@/assets/Corporate1.jpeg";
import Corporate2 from "@/assets/Corporate2.jpeg";
import Corporate3 from "@/assets/Corporate3.jpeg";
import Corporate4 from "@/assets/Corporate4.jpeg";
import Corporatesix from "@/assets/Corporatesix.jpeg";
import Corporate7 from "@/assets/Corporate7.jpeg";
import b2b1 from "@/assets/b2b1.jpeg";
import b2b2 from "@/assets/b2b2.jpeg";
import b2b3 from "@/assets/b2b3.jpeg";
import b2b4 from "@/assets/b2b4.jpeg";

// === Hampers ===
import hamper1 from "@/assets/hamper1.jpeg";
import hamper2 from "@/assets/hamper2.jpeg";
import hamper3 from "@/assets/hamper3.jpeg";
import hamper4 from "@/assets/hamper4.jpeg";
import hamper5 from "@/assets/hamper5.jpeg";
import hamper6 from "@/assets/hamper6.jpeg";

// === Return Gifts ===
import return1 from "@/assets/return1.jpeg";
import return2 from "@/assets/return2.jpeg";
import return3 from "@/assets/return3.jpeg";
import return4 from "@/assets/return4.jpeg";
import return5 from "@/assets/return5.jpeg";
import return6 from "@/assets/return6.jpeg";

// === Dessert Table ===
import dessert1 from "@/assets/dessert1.jpeg";
import dessert2 from "@/assets/dessert2.jpeg";
import dessert3 from "@/assets/dessert3.jpeg";
import dessert4 from "@/assets/dessert4.jpeg";

// === Season Specials ===
import season1 from "@/assets/season1.jpeg";
import season2 from "@/assets/season2.jpeg";
import season3 from "@/assets/season3.jpeg";
import season4 from "@/assets/season4.jpeg";

export interface GalleryImage {
  id: string;
  image: string;
  title: string;
  category: string;   // matches category slug
  filter: string;     // matches gallery filter tab
}

// Each category's images, keyed by slug
export const categoryImages: Record<string, { image: string; title: string }[]> = {
  "custom-cakes": [
    { image: cakeone, title: "Celebration Cake" },
    { image: cake2, title: "Designer Cake" },
    { image: cake3, title: "Birthday Cake" },
    { image: cake4, title: "Fondant Cake" },
    { image: cake5, title: "Wedding Cake" },
    { image: cake6, title: "Themed Cake" },
    { image: cake7, title: "Tier Cake" },
    { image: cake8, title: "Floral Cake" },
    { image: cake9, title: "Kids Cake" },
    { image: cake10, title: "Chocolate Cake" },
    { image: cake11, title: "Buttercream Cake" },
    { image: cake12, title: "Photo Cake" },
    { image: cake13, title: "Drip Cake" },
    { image: cake14, title: "Red Velvet Cake" },
    { image: cake15, title: "Anniversary Cake" },
    { image: cake16, title: "Baby Shower Cake" },
    { image: cake17, title: "Custom Design Cake" },
  ],
  "healthy-bakes": [
    { image: healthy1, title: "Oats Cookies" },
    { image: healthy2, title: "Millet Muffins" },
    { image: healthythree, title: "Sugar-Free Brownies" },
    { image: healthy4, title: "Whole Wheat Treats" },
    { image: healthy5, title: "Healthy Granola Bars" },
  ],
  "b2b": [
    { image: b2b1, title: "Bulk Pastry Boxes" },
    { image: b2b2, title: "Wholesale Cookie Packs" },
    { image: b2b3, title: "Cafe Supply Trays" },
    { image: b2b4, title: "Catering Cupcake Platter" },
  ],
  "corporate-gifting": [
    { image: Corporate1, title: "Corporate Gift Box" },
    { image: Corporate2, title: "Executive Treat Hamper" },
    { image: Corporate3, title: "Branded Cookie Set" },
    { image: Corporate4, title: "Premium Dessert Box" },
    { image: Corporatesix, title: "Client Appreciation Gift" },
    { image: Corporate7, title: "Employee Reward Box" },
  ],
  "festive-hampers": [
    { image: hamper1, title: "Diwali Hamper" },
    { image: hamper2, title: "Christmas Gift Box" },
    { image: hamper3, title: "Festival Sweet Hamper" },
    { image: hamper4, title: "Eid Celebration Box" },
    { image: hamper5, title: "Rakhi Special Hamper" },
    { image: hamper6, title: "New Year Hamper" },
  ],
  "return-gifts": [
    { image: return1, title: "Mini Cupcake Favors" },
    { image: return2, title: "Cookie Gift Pack" },
    { image: return3, title: "Chocolate Box Favors" },
    { image: return4, title: "Party Favor Set" },
    { image: return5, title: "Baby Shower Favors" },
    { image: return6, title: "Birthday Return Gifts" },
  ],
  "dessert-table": [
    { image: dessert1, title: "Wedding Dessert Setup" },
    { image: dessert2, title: "Grand Dessert Buffet" },
    { image: dessert3, title: "Birthday Party Table" },
    { image: dessert4, title: "Garden Party Setup" },
  ],
  "season-specials": [
    { image: season1, title: "Christmas Gingerbread" },
    { image: season2, title: "Autumn Pumpkin Cupcakes" },
    { image: season3, title: "Summer Fruit Tarts" },
    { image: season4, title: "Monsoon Chocolate Truffles" },
  ],
};

// Filter mapping per category slug
const filterMap: Record<string, string> = {
  "custom-cakes": "Cakes",
  "healthy-bakes": "Healthy",
  "b2b": "Corporate",
  "corporate-gifting": "Corporate",
  "festive-hampers": "Hampers",
  "return-gifts": "Events",
  "dessert-table": "Events",
  "season-specials": "Hampers",
};

// Flat list of all gallery images for the Gallery page
export const allGalleryImages: GalleryImage[] = Object.entries(categoryImages).flatMap(
  ([slug, images]) =>
    images.map((img, i) => ({
      id: `${slug}-${i}`,
      image: img.image,
      title: img.title,
      category: slug,
      filter: filterMap[slug] || "All",
    }))
);
