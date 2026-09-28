import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/optical-hero.jpg";

export function Hero() {
  return <section id="home" className="relative isolate overflow-hidden bg-secondary">
    <img src={heroImage} alt="نظارة طبية شفافة بتصميم أنيق" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 h-full w-full scale-x-[-1] object-cover object-[52%_bottom] max-md:top-[32%] max-md:h-[68%] max-md:object-[50%_center]" />
    <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/90 to-secondary/10 md:bg-gradient-to-l md:from-secondary md:via-secondary/85 md:to-transparent" />
    <div className="relative mx-auto flex min-h-[570px] max-w-7xl flex-col justify-start px-5 pb-12 pt-17 sm:px-8 md:min-h-[590px] md:justify-center md:py-20 lg:px-10">
      <div className="max-w-[590px]">
        <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-secondary-foreground"><span className="h-px w-7 bg-primary" /> رؤية أوضح، إطلالة أجمل</div>
        <h1 className="text-[clamp(2.5rem,5.2vw,5rem)] leading-[1.15] font-extrabold text-foreground">نظارات تناسب ذوقك<br /><span className="text-primary">وتحمي عينيك.</span></h1>
        <p className="mt-5 max-w-md text-base leading-8 text-muted-foreground sm:text-lg">اكتشف تشكيلة مختارة من النظارات الطبية والشمسية، بتصاميم تجمع الراحة والأناقة في كل تفصيل.</p>
        <Button asChild size="lg" className="mt-8 h-13 rounded-xl px-7 text-base font-bold shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"><a href="#products">تصفح النظارات <ArrowLeft /></a></Button>
      </div>
    </div>
  </section>;
}