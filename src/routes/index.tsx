import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductDetails } from "@/components/ProductDetails";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import type { Product } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "عبدالعزيز بن خليفة الزريق لنظارات | نظارات طبية وشمسية" },
    { name: "description", content: "تسوق تشكيلة مختارة من النظارات الطبية والشمسية في متجر عبدالعزيز بن خليفة الزريق لنظارات." },
    { property: "og:title", content: "عبدالعزيز بن خليفة الزريق لنظارات" },
    { property: "og:description", content: "نظارات طبية وشمسية تجمع الراحة والأناقة في كل تفصيل." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState<Product | null>(null);
  const closeDetails = useCallback(() => setSelected(null), []);
  return <>
    <Navbar />
    <main><Hero /><ProductGrid onDetails={setSelected} /><Features /><About /><Contact /></main>
    <Footer />
    <ProductDetails product={selected} onClose={closeDetails} />
  </>;
}