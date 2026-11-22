/**
 * Privacy Policy Page - سياسة الخصوصية
 * Required for Snapchat Ads approval
 * Design: Kinetic Precision (Navy + Gold)
 */
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EMAIL = "careers@cmareiscareers.wiki";
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

export default function Privacy() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">سياسة الخصوصية</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: easing }}
            className="text-white/60 text-lg"
          >
            آخر تحديث: يناير 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-[oklch(0.92_0.005_250)] relative overflow-hidden">
            {/* Gold accent */}
            <div className="absolute top-0 right-0 w-32 h-1 bg-[oklch(0.65_0.15_80)]" />

            <div className="space-y-8 text-right">
              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">مقدمة</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                  تلتزم مدارس دله لتعليم القيادة بحماية خصوصية المتقدمين والزوار. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات الشخصية التي يتم تقديمها عبر هذا الموقع.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">المعلومات التي نجمعها</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed mb-4">
                  عند التقديم على الوظائف المتاحة عبر البريد الإلكتروني، قد نجمع المعلومات التالية:
                </p>
                <ul className="list-disc list-inside text-[oklch(0.4_0.02_250)] space-y-2 mr-4">
                  <li>الاسم الكامل</li>
                  <li>معلومات التواصل (البريد الإلكتروني، رقم الهاتف)</li>
                  <li>المؤهلات العلمية والخبرات المهنية</li>
                  <li>المسمى الوظيفي المطلوب والمدينة المفضلة</li>
                  <li>أي معلومات إضافية يتم تضمينها في السيرة الذاتية</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">كيف نستخدم المعلومات</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed mb-4">
                  نستخدم المعلومات المجمعة للأغراض التالية:
                </p>
                <ul className="list-disc list-inside text-[oklch(0.4_0.02_250)] space-y-2 mr-4">
                  <li>تقييم طلبات التوظيف ومطابقتها مع الوظائف المتاحة</li>
                  <li>التواصل مع المرشحين المناسبين بخصوص فرص العمل</li>
                  <li>تحسين عملية التوظيف وتجربة المتقدمين</li>
                  <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">حماية المعلومات</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                  نتخذ إجراءات أمنية مناسبة لحماية المعلومات الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. يتم التعامل مع جميع البيانات بسرية تامة ولا يتم مشاركتها مع أطراف ثالثة إلا بموافقة صاحبها أو وفقاً لمتطلبات قانونية.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">الاحتفاظ بالبيانات</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                  نحتفظ بالسير الذاتية والمعلومات المقدمة لمدة لا تتجاوز 12 شهراً من تاريخ الاستلام، ما لم يتم قبول المتقدم في وظيفة. يحق للمتقدم طلب حذف بياناته في أي وقت عبر التواصل معنا.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">ملفات تعريف الارتباط (Cookies)</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                  قد يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة الزوار. يمكنك تعطيل ملفات تعريف الارتباط من إعدادات المتصفح، علماً بأن ذلك قد يؤثر على بعض وظائف الموقع.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">حقوقك</h2>
                <ul className="list-disc list-inside text-[oklch(0.4_0.02_250)] space-y-2 mr-4">
                  <li>الحق في الوصول إلى بياناتك الشخصية</li>
                  <li>الحق في تصحيح أي معلومات غير دقيقة</li>
                  <li>الحق في طلب حذف بياناتك</li>
                  <li>الحق في الاعتراض على معالجة بياناتك</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">التعديلات على السياسة</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                  نحتفظ بالحق في تعديل هذه السياسة في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ آخر تعديل.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">التواصل</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                  لأي استفسارات حول سياسة الخصوصية، يرجى التواصل معنا عبر البريد الإلكتروني:{" "}
                  <a href={`mailto:${EMAIL}`} className="text-[oklch(0.65_0.15_80)] font-medium" dir="ltr">
                    {EMAIL}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
