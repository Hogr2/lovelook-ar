import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Category, Product } from "@/data/products";
import { useProducts } from "@/lib/useProducts";
import { ProductCard } from "./ProductCard";

const categories: (Category | "الكل")[] = ["الكل", "رجالي", "نسائي", "شمسية", "طبية"];

export function ProductGrid({ onDetails }: { onDetails: (product: Product) => void }) {
  const [active, setActive] = useState<Category | "الكل">("الكل");
  const { data: products, isLoading, isError } = useProducts();

  const visible = !products
    ? []
    : active === "الكل"
      ? products
      : products.filter((product) => product.category === active);

  return (
    <section id="products" className="bg-background py-17 sm:py-22">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-8 sm:mb-10">
          <span className="text-sm font-bold text-primary">مجموعتنا</span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">اكتشف النظارات</h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">اختر ما يناسبك من تشكيلتنا المختارة بعناية.</p>
        </div>
        <div className="-mx-5 mb-7 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="تصفية النظارات">
          {categories.map((category) => (
            <Button key={category} onClick={() => setActive(category)} aria-pressed={active === category} variant={active === category ? "default" : "outline"} className="h-10 shrink-0 rounded-full px-5 text-sm font-bold shadow-none">
              {category}
            </Button>
          ))}
        </div>

        {isLoading && <p className="py-10 text-center text-muted-foreground">جاري تحميل المنتجات...</p>}
        {isError && <p className="py-10 text-center text-destructive">تعذر تحميل المنتجات، حاول تحديث الصفحة.</p>}

        {!isLoading && !isError && (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} onDetails={onDetails} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}