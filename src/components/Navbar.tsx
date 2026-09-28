import { useState } from "react";
import { Glasses, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STORE_NAME } from "@/config";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#products", label: "النظارات" },
  { href: "#about", label: "عن المتجر" },
  { href: "#contact", label: "تواصل معنا" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
    <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 sm:px-8 lg:px-10">
      <a href="#home" className="flex min-w-0 items-center gap-2.5 text-foreground" onClick={() => setOpen(false)} aria-label={STORE_NAME}>
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"><Glasses size={23} strokeWidth={2.2} /></span>
        <span className="min-w-0 truncate text-[15px] font-extrabold sm:text-lg">{STORE_NAME}</span>
      </a>
      <nav className="hidden items-center gap-8 md:flex" aria-label="القائمة الرئيسية">
        {links.map(link => <a key={link.href} href={link.href} className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary">{link.label}</a>)}
      </nav>
      <Button variant="ghost" size="icon" className="size-11 shrink-0 md:hidden" aria-label={open ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="border-t border-border bg-background px-5 py-3 md:hidden" aria-label="قائمة الهاتف">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-base font-bold text-foreground hover:bg-secondary">{link.label}</a>)}</nav>}
  </header>;
}