import blackSunglasses from "@/assets/emesa-black-cropped.jpg.asset.json";
import goldSunglasses from "@/assets/emesa-gold-cropped.jpg.asset.json";
import blackFrame from "@/assets/product-black.jpg";
import goldFrame from "@/assets/product-gold.jpg";
import tortoiseFrame from "@/assets/product-tortoise.jpg";
import clearFrame from "@/assets/optical-hero.jpg";

export type Category = "رجالي" | "نسائي" | "شمسية" | "طبية";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  specs: { frame: string; lens: string; color: string; size: string };
};

export const products: Product[] = [
  {
    id: "emesa-noir",
    name: "إميسا بلاك",
    price: 245,
    category: "شمسية",
    image: blackSunglasses.url,
    description: "نظارة شمسية بتصميم مستطيل دون إطار وعدسات داكنة، لإطلالة عصرية وواثقة كل يوم.",
    specs: { frame: "معدن خفيف", lens: "شمسية متدرجة", color: "أسود وفضي", size: "متوسط" },
  },
  {
    id: "emesa-gold",
    name: "إميسا جولد",
    price: 265,
    category: "شمسية",
    image: goldSunglasses.url,
    description: "عدسات شمسية أنيقة بلا إطار، مع تفاصيل ذهبية ولمسة دافئة تناسب إطلالاتك المختلفة.",
    specs: { frame: "معدن خفيف", lens: "شمسية متدرجة", color: "ذهبي وبني", size: "متوسط" },
  },
  {
    id: "atlas-black",
    name: "أطلس تيتانيوم",
    price: 320,
    category: "رجالي",
    image: blackFrame,
    description: "إطار مستطيل خفيف بخطوط دقيقة يمنحك الراحة والمظهر العملي طوال اليوم.",
    specs: { frame: "تيتانيوم", lens: "شفافة قابلة للتخصيص", color: "أسود مطفي", size: "متوسط" },
  },
  {
    id: "luna-gold",
    name: "لونا الذهبية",
    price: 285,
    category: "نسائي",
    image: goldFrame,
    description: "إطار معدني بيضاوي رقيق يجمع بين الخفة والأناقة في تصميم يناسب كل يوم.",
    specs: { frame: "معدن", lens: "شفافة قابلة للتخصيص", color: "ذهبي", size: "صغير إلى متوسط" },
  },
  {
    id: "classic-tortoise",
    name: "كلاسيك هافانا",
    price: 220,
    category: "طبية",
    image: tortoiseFrame,
    description: "إطار كلاسيكي بنقشة السلحفاة، مريح ومتعدد الاستخدامات لأسلوب لا يغيب.",
    specs: { frame: "أسيتات", lens: "شفافة قابلة للتخصيص", color: "بني هافانا", size: "متوسط" },
  },
  {
    id: "pure-clear",
    name: "بيور شفاف",
    price: 240,
    category: "طبية",
    image: clearFrame,
    description: "إطار شفاف بطابع هادئ وعصري يمنح ملامحك حضورًا خفيفًا ومميزًا.",
    specs: { frame: "أسيتات شفاف", lens: "شفافة قابلة للتخصيص", color: "شفاف", size: "متوسط" },
  },
];