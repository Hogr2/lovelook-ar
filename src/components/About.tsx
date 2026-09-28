import { STORE_NAME } from "@/config";

export function About() {
  return <section id="about" className="bg-background py-18 sm:py-24"><div className="mx-auto grid max-w-7xl gap-7 px-5 sm:px-8 md:grid-cols-[1fr_1.2fr] md:items-center lg:px-10"><div><span className="text-sm font-bold text-primary">من نحن</span><h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">عن المتجر</h2></div><p className="max-w-2xl text-lg leading-9 text-muted-foreground">في {STORE_NAME}، نؤمن بأن النظارة أكثر من مجرد إطار؛ إنها جزء من أسلوبك وراحتك كل يوم. نسعى لتقديم خيارات مدروسة من النظارات الطبية والشمسية، مع اهتمام بالتفاصيل ومساعدة شخصية في اختيار ما يناسبك.</p></div></section>;
}