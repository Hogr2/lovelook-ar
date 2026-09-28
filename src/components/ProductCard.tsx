import { ArrowUpLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CURRENCY } from "@/config";
import type { Product } from "@/data/products";

export function ProductCard({ product, onDetails }: { product: Product; onDetails: (product: Product) => void }) {
  return <article className="group min-w-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
    <div className="relative aspect-[1/1.02] overflow-hidden bg-muted">
      <img src={product.image} alt={product.name} loading="lazy" width={720} height={720} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" />
      <span className="absolute right-3 top-3 rounded-full bg-background/95 px-2.5 py-1 text-[11px] font-bold text-secondary-foreground shadow-sm sm:text-xs">{product.category}</span>
    </div>
    <div className="p-3.5 sm:p-5">
      <h3 className="truncate text-[15px] font-bold text-card-foreground sm:text-lg">{product.name}</h3>
      <p className="mt-1 text-base font-extrabold text-primary sm:text-xl"><span dir="ltr">{product.price} {CURRENCY}</span></p>
      <Button onClick={() => onDetails(product)} variant="outline" className="mt-4 h-10 w-full justify-between rounded-xl border-border px-3 text-sm font-bold text-foreground hover:border-primary hover:bg-secondary hover:text-secondary-foreground sm:h-11 sm:px-4">التفاصيل <ArrowUpLeft className="size-4" /></Button>
    </div>
  </article>;
}