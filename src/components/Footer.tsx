import { Glasses } from "lucide-react";
import { STORE_NAME } from "@/config";

export function Footer() {
  return <footer className="border-t border-border bg-background"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><div className="flex items-center gap-2 text-sm font-extrabold"><Glasses className="text-primary" size={21} />{STORE_NAME}</div><p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {STORE_NAME}. جميع الحقوق محفوظة.</p></div></footer>;
}