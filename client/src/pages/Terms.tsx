/**
 * Terms & Conditions Page - الشروط والأحكام
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

export default function Terms() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">الشروط والأحكام</h1>
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
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">القبول بالشروط</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                  باستخدامك لهذا الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">الغرض من الموقع</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                  هذا الموقع مخصص لاستقبال طلبات التوظيف في مدارس دله لتعليم القيادة. يتيح الموقع للمتقدمين إرسال سيرهم الذاتية عبر البريد الإلكتروني المعتمد للتقديم على الوظائف المتاحة.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">شروط التقديم</h2>
                <ul className="list-disc list-inside text-[oklch(0.4_0.02_250)] space-y-2 mr-4">
                  <li>يجب أن يكون المتقدم سعودي الجنسية أو مقيماً بشكل نظامي</li>
                  <li>يجب أن تكون المعلومات المقدمة صحيحة ودقيقة</li>
                  <li>يجب أن يستوفي المتقدم الحد الأدنى من المؤهلات المطلوبة</li>
                  <li>التقديم لا يعني القبول التلقائي في الوظيفة</li>
                  <li>يحق للشركة رفض أي طلب دون إبداء الأسباب</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">حقوق الملكية الفكرية</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                  جميع المحتويات المنشورة على هذا الموقع، بما في ذلك النصوص والصور والشعارات والتصاميم، هي ملكية خاصة لمدارس دله لتعليم القيادة ومحمية بموجب قوانين حقوق الملكية الفكرية. لا يجوز نسخ أو توزيع أو تعديل أي محتوى دون إذن كتابي مسبق.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">إخلاء المسؤولية</h2>
                <ul className="list-disc list-inside text-[oklch(0.4_0.02_250)] space-y-2 mr-4">
                  <li>المعلومات المنشورة على الموقع قابلة للتغيير دون إشعار مسبق</li>
                  <li>لا نضمن توفر جميع الوظائف المعلن عنها في جميع الأوقات</li>
                  <li>لا نتحمل مسؤولية أي أضرار ناتجة عن استخدام الموقع</li>
                  <li>قد تتغير شروط ومتطلبات الوظائف حسب احتياجات العمل</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">الاستخدام المقبول</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed mb-4">
                  يلتزم المستخدم بعدم:
                </p>
                <ul className="list-disc list-inside text-[oklch(0.4_0.02_250)] space-y-2 mr-4">
                  <li>إرسال معلومات كاذبة أو مضللة</li>
                  <li>استخدام الموقع لأغراض غير مشروعة</li>
                  <li>محاولة الوصول غير المصرح به لأنظمة الموقع</li>
                  <li>إرسال محتوى مسيء أو غير لائق</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">القانون المطبق</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                  تخضع هذه الشروط والأحكام لأنظمة وقوانين المملكة العربية السعودية. أي نزاع ينشأ عن استخدام هذا الموقع يخضع لاختصاص المحاكم السعودية المختصة.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">التعديلات</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                  نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. يُعد استمرار استخدام الموقع بعد نشر التعديلات بمثابة قبول لها.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">التواصل</h2>
                <p className="text-[oklch(0.4_0.02_250)] leading-relaxed">
                  لأي استفسارات حول هذه الشروط والأحكام، يرجى التواصل عبر:{" "}
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
