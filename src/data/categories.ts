import customCakesImg from "@/assets/custom-cakes-hero.jpg";
import healthyBakesImg from "@/assets/healthy-bakes-hero.jpg";
import b2bImg from "@/assets/b2b-hero.jpg"; // Using this as the main cover
import corporateGiftingImg from "@/assets/corporate-gifting-hero.jpg";
import festiveHampersImg from "@/assets/festive-hampers-hero.jpg";
import returnGiftsImg from "@/assets/return-gifts-hero.jpg";
import dessertTableImg from "@/assets/dessert-table-hero.jpg";
import seasonSpecialsImg from "@/assets/season-specials-hero.jpg";

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  filter: string;
}

export const categories: Category[] = [
  {
    id: "custom-cakes",
    slug: "custom-cakes",
    title: "Custom Cakes",
    description: "Beautiful, handcrafted celebration cakes for every occasion.",
    longDescription: "From elegant tiered wedding cakes to fun birthday creations, our custom cakes are baked fresh with premium ingredients.",
    image: customCakesImg,
    filter: "Cakes",
  },
  {
    id: "healthy-bakes",
    slug: "healthy-bakes",
    title: "Healthy Bakes",
    description: "Wholesome treats made with oats, millets, and natural sweeteners.",
    longDescription: "Our healthy bakes prove that nutritious can be delicious! Crafted with care using wholesome ingredients.",
    image: healthyBakesImg,
    filter: "Healthy",
  },
  {
    id: "brownies",
    slug: "brownies",
    title: "Brownies",
    description: "Bulk bakery supplies for cafés and fudgy brownie boxes.",
    longDescription: "Partner with Shannies Kitchen for reliable, high-quality bakery supply. We offer customized bulk orders and rich brownie collections.",
    image: b2bImg,
    filter: "Corporate",
  },
  {
    id: "corporate-gifting",
    slug: "corporate-gifting",
    title: "Corporate Gifting",
    description: "Elegant dessert gift boxes perfect for corporate events and clients.",
    longDescription: "Make a lasting impression with our premium corporate gift boxes. Customizable with your branding.",
    image: corporateGiftingImg,
    filter: "Corporate",
  },
  {
    id: "festive-hampers",
    slug: "festive-hampers",
    title: "Festive Hampers",
    description: "Curated festive gift hampers for every celebration.",
    longDescription: "Celebrate every festival with our beautifully crafted hampers filled with sweets and homemade treats.",
    image: festiveHampersImg,
    filter: "Hampers",
  },
  {
    id: "return-gifts",
    slug: "return-gifts",
    title: "Return Gifts",
    description: "Adorable dessert favor boxes for parties and special functions.",
    longDescription: "Delight your guests with our charming return gift boxes! Beautifully packaged and made with love.",
    image: returnGiftsImg,
    filter: "Events",
  },
  {
    id: "dessert-table",
    slug: "dessert-table",
    title: "Dessert Table",
    description: "Stunning dessert table setups for weddings and grand events.",
    longDescription: "Transform your event with a breathtaking dessert table curated to match your theme.",
    image: dessertTableImg,
    filter: "Events",
  },
  {
    id: "season-specials",
    slug: "season-specials",
    title: "Seasons Specials",
    description: "Limited-edition seasonal treats and holiday delights.",
    longDescription: "Embrace the season with our limited-edition specials inspired by seasonal flavors.",
    image: seasonSpecialsImg,
    filter: "Hampers",
  },
];