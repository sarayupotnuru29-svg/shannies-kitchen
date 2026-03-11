import customCakesImg from "@/assets/custom-cakes-hero.jpg";
import healthyBakesImg from "@/assets/healthy-bakes-hero.jpg";
import b2bImg from "@/assets/b2b-hero.jpg";
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
    description: "Beautiful, handcrafted celebration cakes for every occasion — birthdays, weddings, and more.",
    longDescription: "From elegant tiered wedding cakes to fun birthday creations, our custom cakes are baked fresh with premium ingredients and decorated with love. Tell us your vision and we'll bring it to life!",
    image: customCakesImg,
    filter: "Cakes",
  },
  {
    id: "healthy-bakes",
    slug: "healthy-bakes",
    title: "Healthy Bakes",
    description: "Wholesome treats made with oats, millets, and natural sweeteners — guilt-free indulgence.",
    longDescription: "Our healthy bakes prove that nutritious can be delicious! From oat cookies to millet muffins and sugar-free brownies, every treat is crafted with care using wholesome ingredients.",
    image: healthyBakesImg,
    filter: "Healthy",
  },
  {
    id: "b2b",
    slug: "b2b",
    title: "B2B",
    description: "Bulk bakery supplies for cafés, restaurants, and food businesses — consistent quality, on time.",
    longDescription: "Partner with Shannies Kitchen for reliable, high-quality bakery supply. We offer customized bulk orders for cafés, restaurants, cloud kitchens, and retail stores with consistent taste and timely delivery.",
    image: b2bImg,
    filter: "Corporate",
  },
  {
    id: "corporate-gifting",
    slug: "corporate-gifting",
    title: "Corporate Gifting",
    description: "Elegant dessert gift boxes perfect for corporate events, clients, and employee appreciation.",
    longDescription: "Make a lasting impression with our premium corporate gift boxes. Beautifully curated and packaged with an assortment of cookies, chocolates, and treats — customizable with your branding.",
    image: corporateGiftingImg,
    filter: "Corporate",
  },
  {
    id: "festive-hampers",
    slug: "festive-hampers",
    title: "Festive Hampers",
    description: "Curated festive gift hampers for Diwali, Christmas, Eid, and every celebration in between.",
    longDescription: "Celebrate every festival with our beautifully crafted hampers filled with sweets, dry fruits, chocolates, and homemade treats. Perfect for gifting to loved ones and colleagues.",
    image: festiveHampersImg,
    filter: "Hampers",
  },
  {
    id: "return-gifts",
    slug: "return-gifts",
    title: "Return Gifts / Party / Function Favours",
    description: "Adorable dessert favor boxes for birthday parties, baby showers, and special functions.",
    longDescription: "Delight your guests with our charming return gift boxes! From mini cupcakes to cookie packs and chocolate boxes, each favor is beautifully packaged and made with love.",
    image: returnGiftsImg,
    filter: "Events",
  },
  {
    id: "dessert-table",
    slug: "dessert-table",
    title: "Dessert Table / Event Orders",
    description: "Stunning dessert table setups for weddings, parties, and grand events — a feast for the eyes.",
    longDescription: "Transform your event with a breathtaking dessert table! We create stunning setups with a curated selection of cakes, cupcakes, macarons, and treats that match your theme and color palette.",
    image: dessertTableImg,
    filter: "Events",
  },
  {
    id: "season-specials",
    slug: "season-specials",
    title: "Seasons Specials",
    description: "Limited-edition seasonal treats — from monsoon cravings to winter warmers and holiday delights.",
    longDescription: "Embrace the season with our limited-edition specials! We create unique treats inspired by seasonal flavors and festivities — available for a limited time only.",
    image: seasonSpecialsImg,
    filter: "Hampers",
  },
];

// Gallery items - each category contributes images to the gallery
export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  filter: string;
}

export const galleryItems: GalleryItem[] = categories.map((cat, i) => ({
  id: `gallery-${cat.id}`,
  image: cat.image,
  title: cat.title,
  category: cat.title,
  filter: cat.filter,
}));
