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
import cake18 from "@/assets/cake18.jpeg";
import cake19 from "@/assets/cake19.jpeg";
import cake21 from "@/assets/cake21.jpeg";
import cake22 from "@/assets/cake22.jpeg";
import cake23 from "@/assets/cake23.jpeg";
import cake24 from "@/assets/cake24.jpeg";
import cake25 from "@/assets/cake25.jpeg";
import cake26 from "@/assets/cake26.jpeg";

// --- Healthy Bakes ---
import healthy1 from "@/assets/healthy1.jpeg";
import healthy2 from "@/assets/healthy2.jpeg";
import healthythree from "@/assets/healthythree.jpeg";
import healthy4 from "@/assets/healthy4.jpeg";
import healthy5 from "@/assets/healthy5.jpeg";
import healthy6 from "@/assets/healthy6.jpeg";
import healthy7 from "@/assets/healthy7.jpeg";

// --- Brownies (B2B) ---
import brownie1 from "@/assets/brownie1.jpeg";
import brownie2 from "@/assets/brownie2.jpeg";
import brownie3 from "@/assets/brownie3.jpeg";
import brownie4 from "@/assets/brownie4.jpeg";
import brownie5 from "@/assets/brownie5.jpeg";
import brownie6 from "@/assets/brownie6.jpeg";
import brownie7 from "@/assets/brownie7.jpeg";
import brownie8 from "@/assets/brownie8.jpeg";

// --- Corporate Gifting ---
import Corporate1 from "@/assets/Corporate1.jpeg";
import Corporate2 from "@/assets/Corporate2.jpeg";
import Corporate3 from "@/assets/Corporate3.jpeg";
import Corporate4 from "@/assets/Corporate4.jpeg";
import Corporatesix from "@/assets/Corporatesix.jpeg";
import Corporate7 from "@/assets/Corporate7.jpeg";
import Corporate8 from "@/assets/corporate8.jpeg";
import Corporate9 from "@/assets/corporate9.jpeg";

// --- Festive Hampers ---
import hamper1 from "@/assets/hamper1.jpeg";
import hamper2 from "@/assets/hamper2.jpeg";
import hamper3 from "@/assets/hamper3.jpeg";
import hamper4 from "@/assets/hamper4.jpeg";
import hamper6 from "@/assets/hamper6.jpeg";

// --- Return Gifts ---
import return1 from "@/assets/return1.jpeg";
import return2 from "@/assets/return2.jpeg";
import return3 from "@/assets/return3.jpeg";
import return4 from "@/assets/return4.jpeg";
import return5 from "@/assets/return5.jpeg";
import return6 from "@/assets/return6.jpeg";

// --- Dessert Table / Season Specials (Placeholders if needed) ---
// import season1 from "@/assets/season1.jpeg"; 

// === TYPES ===

export interface GalleryImage {
  id: string;
  image: string;
  title: string;
  category: string; 
  filter: string; 
}

// === DATA CONFIGURATION ===

export const categoryImages: Record<string, { image: string; title: string }[]> = {
  "custom-cakes": [
    { image: cakeone, title: "Celebration Cake" },
    { image: cake2, title: "Designer Cake" },
    { image: cake3, title: "Birthday Cake" },
    { image: cake4, title: "Fondant Cake" },
    { image: cake5, title: "Kids Car Theme Cake" },
    { image: cake6, title: "Themed Cake" },
    { image: cake7, title: "Theme Cake" },
    { image: cake8, title: "Custom Design Cake" },
    { image: cake9, title: "Jungle Theme Cake" },
    { image: cake10, title: "6 months Theme Cake" },
    { image: cake11, title: "Theme Cake" },
    { image: cake12, title: "Cradle Ceremony Cake" },
    { image: cake13, title: "Wedding Anniversary Cake" },
    { image: cake14, title: "Theme Cake" },
    { image: cake15, title: "Birthday Cake" },
    { image: cake16, title: "Theme Cake" },
    { image: cake17, title: "Custom Design Cake" },
    { image: cake18, title: "Pink Ruffle Butterfly Dress Cake" },
    { image: cake19, title: "Two-Tier Elegant Floral Engagement Cake" },
    { image: cake21, title: "Square Chocolate New Year Cake" },
    { image: cake22, title: "Square Clock Cake" },
    { image: cake23, title: "Round Chocolate Star Cake" },
    { image: cake24, title: "Pink Ombre Butterfly & Crown Cake" },
    { image: cake25, title: "Black Fondant Lion King Cake with Gold Crown" },
    { image: cake26, title: "Minimalist White Rosette Cake" },
  ],
  "healthy-bakes": [
    { image: healthy1, title: "Jowar Coconut Treats" },
    { image: healthy2, title: "Carrot Dates Cake" },
    { image: healthythree, title: "Apple Cinnamon Cake" },
    { image: healthy4, title: "Whole Wheat Chocolate Cake" },
    { image: healthy5, title: "Banana Chocolate Cake" },
    { image: healthy6, title: "Whole Wheat Cookies" },
    { image: healthy7, title: "Jim Jam Cookies" },
  ],
  "brownies": [
    { image: brownie1, title: "Brownie Slabs" },
    { image: brownie2, title: "Brownie Slabs" },
    { image: brownie3, title: "Brownies With Filling" },
    { image: brownie4, title: "Brownies With Filling" },
    { image: brownie5, title: "Brownies With Filling" },
    { image: brownie6, title: "Brownies With Filling" },
    { image: brownie7, title: "Customised Brownie Slabs" },
    { image: brownie8, title: "Customised Brownie Slabs" },
  ],
  "corporate-gifting": [
    { image: Corporate1, title: "Dates Dryfruit Laddu" },
    { image: Corporate2, title: "Executive Diwali Hamper" },
    { image: Corporate3, title: "Corporate Gifting" },
    { image: Corporate4, title: "Premium Dessert Box" },
    { image: Corporatesix, title: "Christmas Gifting" },
    { image: Corporate7, title: "Employee Reward Box" },
    { image: Corporate8, title: "Corporate Gifting" },
    { image: Corporate9, title: "Corporate Gifting" },
  ],
  "festive-hampers": [
    { image: hamper1, title: "Rakhi Special Hamper" },
    { image: hamper3, title: "Festival Dryfruit Hamper" },
    { image: hamper4, title: "Diwali Hamper" },
    { image: hamper6, title: "New Year Hamper" },
  ],
  "return-gifts": [
    { image: return1, title: "Festival Corporate Gifting" },
    { image: return2, title: "Diwali Premium Hampers" },
    { image: return3, title: "Return Favours" },
    { image: return4, title: "Diwali Premium Dryfruit Gifting" },
    { image: return5, title: "Diwali Gifting" },
    { image: return6, title: "Diwali Gifting" },
  ],
  "dessert-table": [
    { image: hamper2, title: "Cradle Ceremony Hamper Setup" },
  ],
  "season-specials": [],
};

// Map each slug to a tab filter name
const filterMap: Record<string, string> = {
  "custom-cakes": "Cakes",
  "healthy-bakes": "Healthy",
  "brownies": "Corporate",
  "corporate-gifting": "Corporate",
  "festive-hampers": "Hampers",
  "return-gifts": "Events",
  "dessert-table": "Events",
  "season-specials": "Hampers",
};

// === EXPORTED FLAT LIST ===

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