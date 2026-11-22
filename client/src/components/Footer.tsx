/**
 * Footer Component - Kinetic Precision Design
 * Dark footer with road-line accents, logo, links, and copyright
 */
import { Link } from "wouter";

const EMAIL = "careers@cmareiscareers.wiki";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0.03_250)] text-white/80 relative">
      {/* Gold top accent */}
      <div className="h-1 bg-gradient-to-r from-[oklch(0.65_0.15_80)] via-[oklch(0.65_0.15_80/0.4)] to-transparent" />

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="text-right">
            <div className="flex items-center gap-3 mb-4 justify-end">
              <span className="text-white font-bold text-lg">مدارس دله لتعليم القيادة</span>
              <img
                src="/manus-storage/dallah-logo_3fbe2d0b.png"
                alt="مدارس دله"
                className="w-10 h-10"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              أكبر شبكة مدارس لتعليم القيادة في المملكة العربية السعودية. نفتح أبوابنا لاستقبال الكفاءات الوطنية في أكثر من 1600 فرصة وظيفية.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/40 hover:text-[oklch(0.65_0.15_80)] transition-colors text-sm">الرئيسية</Link></li>
              <li><Link href="/about" className="text-white/40 hover:text-[oklch(0.65_0.15_80)] transition-colors text-sm">من نحن</Link></li>
              <li><Link href="/contact" className="text-white/40 hover:text-[oklch(0.65_0.15_80)] transition-colors text-sm">تواصل معنا</Link></li>
              <li><Link href="/privacy" className="text-white/40 hover:text-[oklch(0.65_0.15_80)] transition-colors text-sm">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="text-white/40 hover:text-[oklch(0.65_0.15_80)] transition-colors text-sm">الشروط والأحكام</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <h4 className="text-white font-semibold mb-4">التواصل</h4>
            <div className="space-y-3">
              <p className="text-white/40 text-sm">البريد الإلكتروني للتوظيف:</p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-[oklch(0.65_0.15_80)] font-medium text-sm hover:brightness-110 transition-all"
                dir="ltr"
              >
                {EMAIL}
              </a>
              <p className="text-white/40 text-sm mt-4">المملكة العربية السعودية - جميع المناطق</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} مدارس دله لتعليم القيادة. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 text-sm transition-colors">الخصوصية</Link>
            <span className="text-white/10">|</span>
            <Link href="/terms" className="text-white/30 hover:text-white/60 text-sm transition-colors">الشروط</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
