/**
 * Navbar Component - Kinetic Precision Design
 * Fixed navigation with transparent → opaque transition on scroll
 * Mobile hamburger menu for Snapchat traffic
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const EMAIL = "careers@cmareiscareers.wiki";
const MAILTO_LINK = `mailto:${EMAIL}?subject=${encodeURIComponent("سيرة ذاتية - المسمى الوظيفي - المدينة")}`;

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.25_0.08_250/0.95)] backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/manus-storage/dallah-logo_3fbe2d0b.png"
            alt="مدارس دله"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <span className="text-white font-bold text-lg md:text-xl">
            مدارس دله
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-white/90 hover:text-[oklch(0.65_0.15_80)] transition-colors font-medium ${
                location === link.href ? "text-[oklch(0.65_0.15_80)]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={MAILTO_LINK}
            className="bg-[oklch(0.65_0.15_80)] text-[oklch(0.15_0.05_80)] px-6 py-2.5 rounded-lg font-bold hover:brightness-110 transition-all active:scale-[0.97]"
          >
            قدّم الآن
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="القائمة"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[oklch(0.18_0.04_250)] border-t border-white/10"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-white/90 hover:text-[oklch(0.65_0.15_80)] transition-colors font-medium text-lg py-2 ${
                    location === link.href ? "text-[oklch(0.65_0.15_80)]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={MAILTO_LINK}
                className="bg-[oklch(0.65_0.15_80)] text-[oklch(0.15_0.05_80)] px-6 py-3 rounded-lg font-bold text-center hover:brightness-110 transition-all mt-2"
              >
                أرسل سيرتك الآن
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
