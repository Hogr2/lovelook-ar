import { BadgeCheck, CircleDollarSign, Eye } from "lucide-react";

const features = [
  { icon: BadgeCheck, title: "جودة مضمونة", description: "نختار إطاراتنا بعناية لنقدم لك جودة تليق بتفاصيل يومك." },
  { icon: CircleDollarSign, title: "أسعار مناسبة", description: "تشكيلة متنوعة تجمع التصميم الجيد والقيمة التي تستحقها." },
  { icon: Eye, title: "فحص نظر ومشورة", description: "نساعدك في اختيار النظارة المناسبة لاحتياجاتك وذوقك." },
];

export function Features() {
  return <section className="bg-secondary py-17 sm:py-22"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><span className="text-sm font-bold text-primary">لأن راحتك تهمنا</span><h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">لماذا تختارنا؟</h2><div className="mt-9 grid gap-4 sm:grid-cols-3 sm:gap-6">{features.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"><span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary"><Icon size={24} /></span><h3 className="mt-5 text-lg font-extrabold">{title}</h3><p className="mt-2 leading-7 text-muted-foreground">{description}</p></article>)}</div></div></section>;
}