/**
 * About Page - من نحن
 * Design: Kinetic Precision (Navy + Gold) — Road visual language
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, MapPin, Car, Target, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const easing = [0.23, 1, 0.32, 1] as const;

function RoadDivider() {
  return (
    <div className="flex items-center gap-2 py-4">
      <div className="h-1 w-8 bg-[oklch(0.65_0.15_80)] rounded-full" />
      <div className="h-1 w-16 bg-[oklch(0.65_0.15_80/0.6)] rounded-full" />
      <div className="h-1 w-8 bg-[oklch(0.65_0.15_80/0.3)] rounded-full" />
    </div>
  );
}

function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: easing }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[oklch(0.14_0.04_250)] overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-l from-[oklch(0.65_0.15_80)] via-[oklch(0.65_0.15_80/0.5)] to-transparent" />
        <div className="container text-right">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: easing }}
          >
            <RoadDivider />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">من نحن</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: easing }}
            className="text-white/60 text-lg max-w-2xl"
          >
            مدارس دله لتعليم القيادة — أكبر شبكة تعليم قيادة في المملكة العربية السعودية
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/manus-storage/dallah-benefits_6b770f06.jpg"
                  alt="مرافق مدارس دله"
                  className="w-full h-72 md:h-[26rem] object-cover"
                />
                {/* Gold accent corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[oklch(0.65_0.15_80/0.4)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[oklch(0.65_0.15_80)]" />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-right">
                <RoadDivider />
                <h2 className="text-2xl md:text-4xl font-bold text-[oklch(0.15_0.03_250)] mb-6">
                  رحلة ثلاثة عقود من التميز
                </h2>
                <div className="space-y-4 text-[oklch(0.4_0.02_250)] leading-relaxed text-base">
                  <p>
                    تأسست مدارس دله لتعليم القيادة كواحدة من أوائل المدارس المعتمدة لتعليم القيادة في المملكة العربية السعودية. على مدار أكثر من 30 عاماً، نمت الشركة لتصبح أكبر شبكة متخصصة في تعليم القيادة على مستوى المملكة.
                  </p>
                  <p>
                    نفخر بتواجدنا في أكثر من 50 فرعاً منتشرة في جميع مناطق المملكة الـ13، مما يجعلنا الأقرب للمتدربين أينما كانوا. نقدم خدماتنا لمئات الآلاف من المتدربين والمتدربات سنوياً.
                  </p>
                  <p>
                    اليوم، نفتح أبوابنا لاستقبال أكثر من <strong className="text-[oklch(0.25_0.08_250)]">1600 كفاءة وطنية</strong> في مختلف التخصصات الإدارية والمهنية والتدريبية، لنواصل مسيرتنا في خدمة المجتمع وتطوير قطاع تعليم القيادة.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <ScrollReveal>
              <div className="relative bg-[oklch(0.98_0.002_250)] rounded-2xl p-8 h-full border border-[oklch(0.92_0.005_250)] overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-1 bg-[oklch(0.65_0.15_80)]" />
                <div className="w-14 h-14 rounded-xl bg-[oklch(0.25_0.08_250)] flex items-center justify-center mb-6">
                  <Eye className="text-[oklch(0.65_0.15_80)]" size={26} />
                </div>
                <h3 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">رؤيتنا</h3>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                  أن نكون المرجع الأول والأكثر ثقة في تعليم القيادة على مستوى المنطقة، من خلال تقديم تجربة تعليمية متكاملة تجمع بين الجودة والسلامة والابتكار.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative bg-[oklch(0.98_0.002_250)] rounded-2xl p-8 h-full border border-[oklch(0.92_0.005_250)] overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-1 bg-[oklch(0.65_0.15_80)]" />
                <div className="w-14 h-14 rounded-xl bg-[oklch(0.25_0.08_250)] flex items-center justify-center mb-6">
                  <Target className="text-[oklch(0.65_0.15_80)]" size={26} />
                </div>
                <h3 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">رسالتنا</h3>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                  تأهيل سائقين وسائقات مسؤولين يساهمون في تحقيق السلامة المرورية، من خلال كوادر مؤهلة ومناهج حديثة وبيئة تدريبية آمنة ومتطورة.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Key Numbers */}
          <ScrollReveal>
            <div className="bg-[oklch(0.14_0.04_250)] rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-[oklch(0.65_0.15_80)] to-transparent" />
              <h3 className="text-2xl md:text-3xl font-bold text-white text-right mb-10">أرقامنا تتحدث</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: Car, value: "50+", label: "فرع في المملكة" },
                  { icon: Users, value: "1600+", label: "فرصة وظيفية" },
                  { icon: MapPin, value: "13", label: "منطقة" },
                  { icon: Award, value: "30+", label: "سنة خبرة" },
                ].map((item, i) => (
                  <div key={i} className="text-right border-r-2 border-[oklch(0.65_0.15_80/0.4)] pr-4">
                    <div className="w-10 h-10 rounded-lg bg-[oklch(0.65_0.15_80/0.12)] flex items-center justify-center mb-3">
                      <item.icon className="text-[oklch(0.65_0.15_80)]" size={20} />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-[oklch(0.65_0.15_80)] mb-1">{item.value}</div>
                    <div className="text-white/50 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
