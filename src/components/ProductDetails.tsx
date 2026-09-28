import { useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CURRENCY, whatsappLink } from "@/config";
import type { Product } from "@/data/products";

export function ProductDetails({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!product) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = original; window.removeEventListener("keydown", onKey); };
  }, [product, onClose]);
  if (!product) return null;
  const specs = [["مادة الإطار", product.specs.frame], ["نوع العدسة", product.specs.lens], ["اللون", product.specs.color], ["المقاس", product.specs.size]];
  return <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/60 sm:items-center sm:p-5" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div role="dialog" aria-modal="true" aria-labelledby="product-title" className="relative max-h-[94dvh] w-full overflow-y-auto rounded-t-2xl bg-background shadow-2xl sm:max-w-4xl sm:rounded-2xl">
      <Button ref={closeRef} variant="outline" size="icon" aria-label="إغلاق التفاصيل" onClick={onClose} className="absolute left-4 top-4 z-10 size-10 rounded-full bg-background/95"><X /></Button>
      <div className="grid md:grid-cols-2">
        <div className="aspect-[1.35] overflow-hidden bg-muted md:aspect-auto md:min-h-[520px]"><img src={product.image} alt={product.name} width={900} height={900} className="h-full w-full object-cover" /></div>
        <div className="p-6 sm:p-9"><span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">{product.category}</span><h2 id="product-title" className="mt-5 text-3xl font-extrabold text-foreground">{product.name}</h2><p className="mt-2 text-2xl font-extrabold text-primary" dir="ltr">{product.price} {CURRENCY}</p><p className="mt-5 text-base leading-8 text-muted-foreground">{product.description}</p>
          <h3 className="mt-7 border-b border-border pb-3 text-lg font-extrabold">المواصفات</h3><dl className="divide-y divide-border">{specs.map(([label, value]) => <div key={label} className="flex justify-between gap-4 py-3 text-sm"><dt className="text-muted-foreground">{label}</dt><dd className="font-bold text-foreground">{value}</dd></div>)}</dl>
          <Button asChild size="lg" className="mt-7 h-13 w-full rounded-xl text-base font-bold"><a href={whatsappLink(`مرحباً، أود الاستفسار عن نظارة ${product.name}`)} target="_blank" rel="noopener noreferrer"><MessageCircle /> اطلب عبر واتساب</a></Button>
        </div>
      </div>
    </div>
  </div>;
}