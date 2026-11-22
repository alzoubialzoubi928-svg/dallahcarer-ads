/**
 * Contact Page - تواصل معنا
 * Design: Kinetic Precision (Navy + Gold)
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EMAIL = "careers@cmareiscareers.wiki";
const MAILTO_LINK = `mailto:${EMAIL}?subject=${encodeURIComponent("سيرة ذاتية - المسمى الوظيفي - المدينة")}`;
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

export default function Contact() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">تواصل معنا</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: easing }}
            className="text-white/60 text-lg max-w-2xl"
          >
            نسعد بتواصلكم واستقبال استفساراتكم حول الفرص الوظيفية المتاحة
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info - 3 cols */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="text-right mb-8">
                  <RoadDivider />
                  <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.03_250)] mb-4">
                    معلومات التواصل
                  </h2>
                  <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                    للتقديم على الوظائف المتاحة، يرجى إرسال سيرتك الذاتية عبر البريد الإلكتروني مع كتابة المسمى الوظيفي والمدينة في عنوان الرسالة.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    title: "البريد الإلكتروني للتوظيف",
                    value: EMAIL,
                    href: `mailto:${EMAIL}`,
                    dir: "ltr" as const,
                  },
                  {
                    icon: MapPin,
                    title: "الموقع",
                    value: "المملكة العربية السعودية - جميع المناطق",
                    href: undefined,
                    dir: "rtl" as const,
                  },
                  {
                    icon: Clock,
                    title: "أوقات العمل",
                    value: "الأحد - الخميس: 8:00 ص - 5:00 م",
                    href: undefined,
                    dir: "rtl" as const,
                  },
                  {
                    icon: Phone,
                    title: "الهاتف الموحد",
                    value: "920001616",
                    href: "tel:920001616",
                    dir: "ltr" as const,
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[oklch(0.92_0.005_250)] border-r-4 border-r-[oklch(0.65_0.15_80/0.4)] hover:border-r-[oklch(0.65_0.15_80)] transition-colors shadow-sm">
                      <div className="w-12 h-12 rounded-lg bg-[oklch(0.25_0.08_250)] flex items-center justify-center shrink-0">
                        <item.icon className="text-[oklch(0.65_0.15_80)]" size={20} />
                      </div>
                      <div className="text-right">
                        <h3 className="font-bold text-[oklch(0.15_0.03_250)] mb-1">{item.title}</h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            dir={item.dir}
                            className="text-[oklch(0.65_0.15_80)] hover:brightness-110 transition-all font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p dir={item.dir} className="text-[oklch(0.4_0.02_250)]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* CTA Card - 2 cols */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <div className="bg-[oklch(0.14_0.04_250)] rounded-2xl p-8 sticky top-28 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-1 bg-[oklch(0.65_0.15_80)]" />
                  <div className="absolute bottom-0 left-0 w-16 h-1 bg-[oklch(0.65_0.15_80/0.5)]" />

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[oklch(0.65_0.15_80/0.12)] border border-[oklch(0.65_0.15_80/0.3)] flex items-center justify-center mx-auto mb-6">
                      <Send className="text-[oklch(0.65_0.15_80)]" size={26} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      جاهز للتقديم؟
                    </h3>
                    <p className="text-white/60 mb-6 leading-relaxed text-sm">
                      أرسل سيرتك الذاتية الآن وانضم لفريق مدارس دله. تأكد من كتابة المسمى الوظيفي والمدينة في عنوان الرسالة.
                    </p>

                    <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 mb-6">
                      <p className="text-white/40 text-xs mb-2">أرسل إلى:</p>
                      <p className="text-[oklch(0.65_0.15_80)] font-bold" dir="ltr">{EMAIL}</p>
                    </div>

                    <a
                      href={MAILTO_LINK}
                      className="group flex items-center justify-center gap-2 bg-[oklch(0.65_0.15_80)] text-[oklch(0.15_0.05_80)] px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all active:scale-[0.97] shadow-lg shadow-[oklch(0.65_0.15_80/0.3)] w-full"
                    >
                      أرسل سيرتك الآن
                      <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    </a>

                    <p className="text-white/30 text-xs mt-4">
                      سيتم التواصل مع المرشحين المناسبين خلال أسبوعين
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
