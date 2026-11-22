/**
 * Home Page - Dallah Driving Schools Careers Landing Page
 * Design: Kinetic Precision (Navy + Gold) — Road/Driving visual language
 * Optimized for Snapchat mobile traffic
 */
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail, Users, MapPin, GraduationCap, Briefcase, Shield,
  Award, TrendingUp, Heart, BookOpen, Wrench, Car,
  ChevronUp, FileText, Send, CheckCircle2, ArrowLeft
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EMAIL = "careers@cmareiscareers.wiki";
const MAILTO_LINK = `mailto:${EMAIL}?subject=${encodeURIComponent("سيرة ذاتية - المسمى الوظيفي - المدينة")}`;

const easing = [0.23, 1, 0.32, 1] as const;

/* Road-line decorative divider */
function RoadDivider() {
  return (
    <div className="flex items-center justify-center gap-2 py-6">
      <div className="h-1 w-8 bg-[oklch(0.65_0.15_80)] rounded-full" />
      <div className="h-1 w-16 bg-[oklch(0.65_0.15_80/0.6)] rounded-full" />
      <div className="h-1 w-8 bg-[oklch(0.65_0.15_80/0.3)] rounded-full" />
      <div className="h-1 w-4 bg-[oklch(0.65_0.15_80/0.15)] rounded-full" />
    </div>
  );
}

/* Diagonal section separator */
function DiagonalSeparator({ from, to }: { from: string; to: string }) {
  return (
    <div className="relative h-16 md:h-24 -mt-1" style={{ background: from }}>
      <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96">
        <polygon fill={to} points="0,96 1440,0 1440,96" />
      </svg>
    </div>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("ar-SA")}{suffix}
    </span>
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

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: 1600, suffix: "+", label: "فرصة وظيفية" },
    { value: 50, suffix: "+", label: "فرع في المملكة" },
    { value: 30, suffix: "+", label: "سنة خبرة" },
    { value: 13, suffix: "", label: "منطقة" },
  ];

  const specializations = [
    { icon: Car, title: "مدربين ومدربات قيادة", desc: "تدريب عملي ونظري" },
    { icon: Briefcase, title: "الإدارة والتنظيم", desc: "إدارية وتنسيقية" },
    { icon: Wrench, title: "الصيانة والتشغيل", desc: "صيانة المركبات والمعدات" },
    { icon: GraduationCap, title: "التدريب والتطوير", desc: "تطوير المناهج والبرامج" },
    { icon: Shield, title: "السلامة المرورية", desc: "معايير السلامة والجودة" },
    { icon: Users, title: "خدمة العملاء", desc: "استقبال وخدمة المتدربين" },
    { icon: BookOpen, title: "التعليم النظري", desc: "محاضرات ودورات نظرية" },
    { icon: TrendingUp, title: "تقنية المعلومات", desc: "أنظمة وبرمجيات" },
  ];

  const benefits = [
    { icon: TrendingUp, title: "مسار وظيفي واضح", desc: "ترقيات داخلية ومسارات تطور مهني محددة مع تقييم أداء دوري" },
    { icon: BookOpen, title: "تدريب مستمر", desc: "برامج تطوير مهني وتقني على مدار العام مع شهادات معتمدة" },
    { icon: Award, title: "مزايا تنافسية", desc: "راتب مجزي، بدلات سكن ونقل، تأمين طبي شامل، إجازات سنوية" },
    { icon: Shield, title: "بيئة عمل آمنة", desc: "معايير سلامة مهنية عالمية وبرامج صحة وسلامة معتمدة" },
    { icon: Heart, title: "فرص للجنسين", desc: "بيئة عمل تدعم التنوع وتوفر فرصاً متساوية للرجال والنساء" },
    { icon: Award, title: "حوافز أداء", desc: "مكافآت مالية مرتبطة بالأداء وبرامج تحفيز للمتميزين" },
  ];

  const cities = [
    "الرياض", "جدة", "مكة المكرمة", "المدينة المنورة", "الدمام",
    "الخبر", "تبوك", "أبها", "خميس مشيط", "حائل",
    "القصيم", "الطائف", "ينبع", "نجران", "جازان",
    "الجبيل", "الأحساء", "عرعر", "سكاكا", "بيشة"
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/manus-storage/dallah-hero_0781704c.jpg"
            alt="مدارس دله لتعليم القيادة - سيارات تدريب ومدربين"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.05_250/0.88)] via-[oklch(0.15_0.05_250/0.78)] to-[oklch(0.12_0.04_250/0.92)]" />
        </div>

        {/* Decorative road lines */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-l from-[oklch(0.65_0.15_80)] via-[oklch(0.65_0.15_80/0.5)] to-transparent" />

        {/* Content */}
        <div className="relative z-10 container py-32 md:py-0">
          <div className="max-w-4xl mr-0 md:mr-auto text-right md:text-right">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: easing }}
              className="inline-flex items-center gap-2 bg-[oklch(0.65_0.15_80/0.12)] border border-[oklch(0.65_0.15_80/0.4)] rounded-full px-5 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.15_80)] animate-pulse" />
              <span className="text-[oklch(0.65_0.15_80)] font-medium text-sm">
                التقديم مفتوح الآن | 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: easing }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.15]"
            >
              مستقبلك المهني
              <br />
              <span className="relative inline-block">
                <span className="text-[oklch(0.65_0.15_80)]">ينطلق من هنا</span>
                <span className="absolute -bottom-2 right-0 w-full h-1 bg-gradient-to-l from-[oklch(0.65_0.15_80)] to-transparent rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: easing }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
            >
              مدارس دله لتعليم القيادة تفتح أبوابها لاستقبال الكفاءات الوطنية —{" "}
              <strong className="text-white">أكثر من 1600 فرصة وظيفية</strong> في جميع التخصصات والمناطق
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5, ease: easing }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
            >
              <a
                href={MAILTO_LINK}
                className="group bg-[oklch(0.65_0.15_80)] text-[oklch(0.15_0.05_80)] px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all active:scale-[0.97] shadow-lg shadow-[oklch(0.65_0.15_80/0.3)] text-center flex items-center justify-center gap-2"
              >
                أرسل سيرتك الآن
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </a>
              <a
                href="#specializations"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/10 hover:border-white/50 transition-all text-center"
              >
                تصفّح التخصصات
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex items-center gap-2 text-white/60"
            >
              <Mail size={18} />
              <span dir="ltr" className="text-sm md:text-base font-mono">{EMAIL}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar — asymmetric layout with big numbers */}
      <section className="bg-[oklch(0.14_0.04_250)] py-14 md:py-20 relative">
        {/* Road line accent */}
        <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-[oklch(0.65_0.15_80)] to-transparent" />
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="relative text-right pr-4 border-r-2 border-[oklch(0.65_0.15_80/0.4)]">
                  <div className="text-4xl md:text-5xl font-bold text-[oklch(0.65_0.15_80)] mb-1 leading-none">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/60 text-sm md:text-base font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges — with gold accent borders */}
      <section className="py-14 md:py-20 bg-[oklch(0.98_0.002_250)] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.15_80/0.3)] to-transparent" />
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Award, text: "معتمدة من المرور السعودي" },
              { icon: Shield, text: "أكبر شبكة تعليم قيادة في المملكة" },
              { icon: CheckCircle2, text: "شريك وزارة الموارد البشرية" },
            ].map((badge, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-center gap-4 bg-white rounded-xl p-5 border-r-4 border-[oklch(0.65_0.15_80)] shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-[oklch(0.25_0.08_250)] flex items-center justify-center shrink-0">
                    <badge.icon className="text-[oklch(0.65_0.15_80)]" size={22} />
                  </div>
                  <span className="font-bold text-[oklch(0.15_0.03_250)]">{badge.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Job Specializations — tilted cards with numbering */}
      <section id="specializations" className="py-16 md:py-24 relative">
        {/* Decorative dashed road line */}
        <div className="absolute top-12 right-8 bottom-12 w-px border-r-2 border-dashed border-[oklch(0.25_0.08_250/0.1)] hidden lg:block" />

        <div className="container">
          <ScrollReveal>
            <div className="text-right mb-12">
              <RoadDivider />
              <h2 className="text-3xl md:text-5xl font-bold text-[oklch(0.15_0.03_250)] mb-4">
                التخصصات الوظيفية المتاحة
              </h2>
              <p className="text-[oklch(0.5_0.02_250)] text-lg max-w-2xl">
                أكثر من 1600 فرصة وظيفية في تخصصات متنوعة تناسب جميع المؤهلات
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-14">
            {specializations.map((spec, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="group relative bg-white rounded-xl p-5 md:p-6 border border-[oklch(0.92_0.005_250)] hover:border-[oklch(0.65_0.15_80/0.5)] hover:-translate-y-1 hover:rotate-[-0.5deg] transition-all duration-300 shadow-sm hover:shadow-lg">
                  {/* Number badge */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-[oklch(0.25_0.08_250)] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Gold accent line */}
                  <div className="absolute top-0 right-0 w-12 h-1 bg-[oklch(0.65_0.15_80)] rounded-bl-full rounded-tr-xl" />
                  <div className="w-12 h-12 rounded-lg bg-[oklch(0.25_0.08_250/0.06)] flex items-center justify-center mb-4 group-hover:bg-[oklch(0.25_0.08_250)] transition-colors duration-300">
                    <spec.icon className="text-[oklch(0.25_0.08_250)] group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <h3 className="font-bold text-[oklch(0.15_0.03_250)] mb-1 text-sm md:text-base">{spec.title}</h3>
                  <p className="text-[oklch(0.5_0.02_250)] text-xs md:text-sm">{spec.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Qualifications — horizontal flow */}
          <ScrollReveal>
            <div className="bg-[oklch(0.97_0.003_250)] rounded-2xl p-6 md:p-8 border border-[oklch(0.92_0.005_250)]">
              <h3 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-6 text-right">المؤهلات المطلوبة</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { level: "الثانوية العامة", jobs: "وظائف خدمة العملاء والاستقبال والمستودعات", color: "oklch(0.45 0.12 145)" },
                  { level: "الدبلوم", jobs: "وظائف التدريب والصيانة والتشغيل", color: "oklch(0.55 0.14 250)" },
                  { level: "البكالوريوس", jobs: "وظائف الإدارة والتقنية والتخطيط", color: "oklch(0.65 0.15 80)" },
                ].map((q, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border-r-3 shadow-sm" style={{ borderRightColor: q.color, borderRightWidth: "3px" }}>
                    <div className="font-bold mb-2" style={{ color: q.color }}>{q.level}</div>
                    <p className="text-[oklch(0.4_0.02_250)] text-sm">{q.jobs}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Diagonal transition */}
      <DiagonalSeparator from="oklch(0.99 0.002 250)" to="oklch(0.14 0.04 250)" />

      {/* Why Join Us — dark section with kinetic cards */}
      <section className="py-16 md:py-24 bg-[oklch(0.14_0.04_250)] relative">
        {/* Decorative road markers */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20">
          <div className="w-1 h-8 bg-white rounded-full" />
          <div className="w-1 h-8 bg-white rounded-full" />
          <div className="w-1 h-8 bg-white rounded-full" />
        </div>

        <div className="container">
          <ScrollReveal>
            <div className="text-right mb-12">
              <RoadDivider />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                لماذا مدارس دله؟
              </h2>
              <p className="text-white/60 text-lg max-w-2xl">
                بيئة عمل محفزة ومزايا تنافسية تجعلنا الخيار الأمثل لمسيرتك المهنية
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.08] hover:border-[oklch(0.65_0.15_80/0.3)] transition-all duration-300 overflow-hidden">
                  {/* Gold corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[oklch(0.65_0.15_80/0.15)] to-transparent" />
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-[oklch(0.65_0.15_80/0.12)] border border-[oklch(0.65_0.15_80/0.2)] flex items-center justify-center mb-4 group-hover:bg-[oklch(0.65_0.15_80/0.2)] transition-colors">
                      <benefit.icon className="text-[oklch(0.65_0.15_80)]" size={22} />
                    </div>
                    <h3 className="font-bold text-white mb-2 text-base">{benefit.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Image with overlay text */}
      <section className="relative h-72 md:h-[28rem] overflow-hidden">
        <img
          src="/manus-storage/dallah-team_65f20ccb.jpg"
          alt="منشآت مدارس دله"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.04_250)] via-[oklch(0.12_0.04_250/0.4)] to-[oklch(0.12_0.04_250/0.2)]" />
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
          <p className="text-white/60 text-sm mb-1">منشآتنا</p>
          <h3 className="text-white text-2xl md:text-3xl font-bold">أكثر من 50 فرعاً في المملكة</h3>
        </div>
        {/* Gold bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[oklch(0.65_0.15_80)] via-[oklch(0.65_0.15_80/0.5)] to-transparent" />
      </section>

      {/* Cities — flowing pills with directional feel */}
      <section className="py-16 md:py-24 bg-[oklch(0.99_0.002_250)]">
        <div className="container">
          <ScrollReveal>
            <div className="text-right mb-12">
              <RoadDivider />
              <h2 className="text-3xl md:text-5xl font-bold text-[oklch(0.15_0.03_250)] mb-4">
                فروعنا في جميع المناطق
              </h2>
              <p className="text-[oklch(0.5_0.02_250)] text-lg">
                نتواجد في أكثر من 50 فرعاً في جميع مناطق المملكة
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-start">
              {cities.map((city, i) => (
                <span
                  key={i}
                  className="group bg-white border border-[oklch(0.92_0.005_250)] text-[oklch(0.25_0.08_250)] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[oklch(0.25_0.08_250)] hover:text-white hover:border-[oklch(0.25_0.08_250)] transition-all duration-300 cursor-default shadow-sm"
                >
                  <MapPin size={13} className="inline-block ml-1.5 text-[oklch(0.65_0.15_80)] group-hover:text-[oklch(0.65_0.15_80)]" />
                  {city}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How to Apply — numbered steps with road-path connector */}
      <section className="py-16 md:py-24 bg-[oklch(0.97_0.003_250)]">
        <div className="container">
          <ScrollReveal>
            <div className="text-right mb-14">
              <RoadDivider />
              <h2 className="text-3xl md:text-5xl font-bold text-[oklch(0.15_0.03_250)] mb-4">
                خطوات التقديم
              </h2>
              <p className="text-[oklch(0.5_0.02_250)] text-lg">
                ثلاث خطوات بسيطة للانضمام لفريقنا
              </p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting dashed line */}
            <div className="hidden md:block absolute top-10 right-[calc(16.67%-1rem)] left-[calc(16.67%-1rem)] h-0.5 border-t-2 border-dashed border-[oklch(0.25_0.08_250/0.2)]" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "١", icon: FileText, title: "جهّز سيرتك الذاتية", desc: "تأكد من تحديث بيانات التواصل والمؤهل والخبرات" },
                { num: "٢", icon: Send, title: "أرسلها عبر البريد", desc: "اضغط زر التقديم أو أرسل مباشرة إلى البريد المعتمد" },
                { num: "٣", icon: CheckCircle2, title: "اكتب العنوان بوضوح", desc: "في عنوان الرسالة اكتب: سيرة ذاتية - المسمى الوظيفي - المدينة" },
              ].map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <div className="text-center relative">
                    <div className="relative z-10 w-20 h-20 rounded-full bg-[oklch(0.25_0.08_250)] text-white flex items-center justify-center mx-auto mb-5 shadow-xl shadow-[oklch(0.25_0.08_250/0.3)] border-4 border-[oklch(0.65_0.15_80/0.3)]">
                      <span className="text-2xl font-bold">{step.num}</span>
                    </div>
                    <h3 className="font-bold text-[oklch(0.15_0.03_250)] mb-2 text-lg">{step.title}</h3>
                    <p className="text-[oklch(0.5_0.02_250)] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — bold asymmetric */}
      <section className="py-16 md:py-24 bg-[oklch(0.14_0.04_250)] relative overflow-hidden">
        {/* Decorative diagonal gold line */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[oklch(0.65_0.15_80/0.03)] rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[oklch(0.65_0.15_80/0.05)] rounded-full blur-3xl" />
        </div>

        <div className="container relative">
          <ScrollReveal>
            <div className="max-w-2xl mr-0 text-right">
              <RoadDivider />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                انضم لفريق يخدم
                <br />
                <span className="text-[oklch(0.65_0.15_80)]">ملايين المتدربين</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-xl">
                أرسل سيرتك الذاتية الآن وكن جزءاً من أكبر شبكة تعليم قيادة في المملكة
              </p>

              <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-8 max-w-lg">
                <p className="text-white/50 text-sm mb-3">أرسل سيرتك الذاتية إلى:</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-[oklch(0.65_0.15_80)] text-xl md:text-2xl font-bold hover:brightness-110 transition-all block"
                  dir="ltr"
                >
                  {EMAIL}
                </a>
                <p className="text-white/40 text-sm mt-3">
                  اكتب في العنوان: سيرة ذاتية - المسمى الوظيفي - المدينة
                </p>
              </div>

              <a
                href={MAILTO_LINK}
                className="group inline-flex items-center gap-3 bg-[oklch(0.65_0.15_80)] text-[oklch(0.15_0.05_80)] px-10 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all active:scale-[0.97] shadow-lg shadow-[oklch(0.65_0.15_80/0.3)]"
              >
                فتح البريد وإرسال السيرة الذاتية
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </a>

              <p className="text-white/30 text-sm mt-6">
                سيتم التواصل مع المرشحين المناسبين خلال أسبوعين من تاريخ الإرسال
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      {/* Back to Top */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 w-12 h-12 bg-[oklch(0.25_0.08_250)] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[oklch(0.65_0.15_80)] hover:text-[oklch(0.15_0.05_80)] transition-all active:scale-[0.97] z-50 border-2 border-[oklch(0.65_0.15_80/0.3)]"
          aria-label="العودة للأعلى"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </div>
  );
}
