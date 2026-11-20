
import Mike from "../assets/images.jpg";
import Mohamed from "../assets/photo-1500648767791-00dcc994a43e.jpg";
import { MdOutlineDateRange } from "react-icons/md";
import { TbClockHour5 } from "react-icons/tb";
import { FaCamera } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Portrait() {
  return (
    <>
      <div className="relative h-130 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center mask-b-from-50% mask-b-to-transparent"
          style={{ backgroundImage: `url(${Mike})` }}
        />
        <div className="relative z-10 flex h-full items-center justify-center p-6">
          <div className=" my-4 max-w-5xl mx-auto">
            <div className=" flex flex-wrap items-center gap-3 text-sm font-bold mb-4">
              <button className=" px-4 py-1 bg-orange-500 border-0 rounded-3xl">
                بورتريه
              </button>
              <div className="flex items-center gap-3 text-gray-500">
                <span className="flex items-center gap-1">
                  <MdOutlineDateRange />
                  ١٢ يناير ٢٠٢٦
                </span>
                <span className="flex items-center gap-1">
                  <TbClockHour5 />6 دقائق للقراءة
                </span>
              </div>
            </div>
            <h2 className=" mb-6 leading-tight max-w-4xl text-6xl font-bold">
              أسرار تصوير البورتريه: كيف تلتقط روح الشخصية{" "}
            </h2>
            <div className=" flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit ">
              <img
                src={Mohamed}
                alt="محمد علي"
                className="w-15 h-15 border-2 border-amber-700 rounded-4xl"
              />
              <div>
                <p>محمد علي</p>
                <p className=" text-gray-500 text-sm">مصور بورتريه</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className=" grid lg:grid-cols-[1fr_300px] gap-12">
          <div className="order-2 lg:order-1">
            <div className=" p-6 bg-lainer-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
              <p className="text-lg text-neutral-200 leading-relaxed italic">
                "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية
                الموضوع الحقيقية."
              </p>
            </div>
            <div>
              <p className="text-neutral-300 leading-relaxed mb-15">
                تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس
                مجرد توثيق الملامح، بل كشف القصة خلف العيون.
              </p>
              <div className=" mb-15">
                <div>
                  <h3
                    id="section-1"
                    className=" text-3xl mb-6 flex items-center gap-4"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30 text-orange-500">
                      <FaCamera />
                    </span>{" "}
                    التواصل مع الموضوع
                  </h3>
                </div>
                <p className="text-neutral-300">
                  قبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة.
                  الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك
                  الموضوع.
                </p>
              </div>
              <div className=" mb-15">
                <div>
                  <h3
                    id="section-2"
                    className=" text-3xl mb-6 flex items-center gap-4"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30 text-orange-500">
                      <FaCamera />
                    </span>{" "}
                    اختيار العدسة المناسبة{" "}
                  </h3>
                </div>
                <p className="text-neutral-300">
                  عدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً
                  مثالياً للملامح وخلفية ضبابية جميلة.
                </p>
              </div>
              <div className=" mb-15">
                <div>
                  <h3
                    id="section-3"
                    className=" text-3xl mb-6 flex items-center gap-4"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30 text-orange-500">
                      <FaCamera />
                    </span>{" "}
                    الإضاءة الطبيعية
                  </h3>
                </div>
                <p className="text-neutral-300">
                  النافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع
                  بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد
                  رائعة.
                </p>
              </div>
              <div className=" mb-15">
                <div>
                  <h3
                    id="section-4"
                    className=" text-3xl mb-6 flex items-center gap-4"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30 text-orange-500">
                      <FaCamera />
                    </span>{" "}
                    التركيز على العيون
                  </h3>
                </div>
                <p className="text-neutral-300">
                  العيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة.
                  استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.
                </p>
              </div>
              <div className=" mb-15">
                <div>
                  <h3
                    id="section-5"
                    className=" text-3xl mb-6 flex items-center gap-4"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30 text-orange-500">
                      <FaCamera />
                    </span>{" "}
                    الخلفية والتكوين
                  </h3>
                </div>
                <p className="text-neutral-300">
                  اختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع
                  العيون في النقاط القوية.
                </p>
              </div>
              <div className=" mb-15">
                <div>
                  <h3
                    id="section-6"
                    className=" text-3xl mb-6 flex items-center gap-4"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30 text-orange-500">
                      <FaCamera />
                    </span>{" "}
                    الخلاصة
                  </h3>
                </div>
                <p className="text-neutral-300">
                  البورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل
                  الإنساني، تخلق صوراً خالدة.
                </p>
              </div>
            </div>
            <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
              <div className=" mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30 text-orange-500">
                  <FaTags />
                </span>
                <h4>الوسوم</h4>
              </div>
              <div className=" flex items-center gap-3">
                <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                  #بورتريه
                </span>
                <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                  #تصوير أشخاص
                </span>
                <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                  #إضاءة طبيعية
                </span>
              </div>
            </div>
            <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30 text-orange-500">
                    <FaShareAlt />
                  </span>
                  <h4>شارك المقال</h4>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300">
                    <BsTwitterX />
                  </button>
                  <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300">
                    <FaLinkedin />
                  </button>
                  <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white hover:border-transparent transition-all duration-300">
                    <IoLogoWhatsapp />
                  </button>
                  <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300">
                    <FaLink />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 p-8 bg-linear-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
              <div className=" flex items-center gap-6">
                <img
                  src={Mohamed}
                  alt="محمد علي"
                  className="w-24 h-24 rounded-2xl object-cover border-4 border-orange-500/20"
                />
                <div>
                  <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                    كاتب المقال
                  </span>
                  <h4 className="text-xl font-bold text-white mt-1">
                    محمد علي
                  </h4>
                  <p className="text-neutral-500 text-sm mb-3">مصور بورتريه</p>
                  <p className="text-neutral-400 text-sm leading-relaxed">مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <aside className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30 text-orange-500">
                    <FaThList />
                  </span>
                  <h3>محتويات المقال</h3>
                </div>
                <nav className="space-y-2">
                  <a
                    href="#section-1"
                    className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                      1
                    </span>
                    <span className="text-sm">التواصل مع الموضوع</span>
                  </a>
                  <a
                    href="#section-2"
                    className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                      2
                    </span>
                    <span className="text-sm">اختيار العدسة المناسبة</span>
                  </a>
                  <a
                    href="#section-3"
                    className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                      3
                    </span>
                    <span className="text-sm">الإضاءة الطبيعية</span>
                  </a>
                  <a
                    href="#section-4"
                    className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                      4
                    </span>
                    <span className="text-sm">التركيز على العيون</span>
                  </a>
                  <a
                    href="#section-5"
                    className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                      5
                    </span>
                    <span className="text-sm">الخلفية والتكوين</span>
                  </a>
                  <a
                    href="#section-6"
                    className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                      6
                    </span>
                    <span className="text-sm">الخلاصة</span>
                  </a>
                </nav>
              </div>
              <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                    <span className="text-orange-500 text-2xl mb-2 flex justify-center">
                      <TbClockHour5 />
                    </span>
                    <p>6 دقائق للقراءة</p>
                    <p className=" text-neutral-500 text-xs">وقت القراءة</p>
                  </div>
                  <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                    <span className="text-orange-500 text-2xl mb-2 flex justify-center">
                      <MdOutlineDateRange />
                    </span>
                    <p> ١٢ يناير</p>
                    <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-linear-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                <div className="text-center">
                  <span className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-orange-500 text-2xl">
                    <FaEnvelope />
                  </span>
                  <h3 className=" mb-2">لا تفوّت جديدنا</h3>
                  <p className=" mb-4">اشترك للحصول على أحدث المقالات</p>
                  <a
                    href=""
                    className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
                  >
                    تصفح المزيد
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
