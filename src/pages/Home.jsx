import Ahmed from "../assets/photo-1507003211169-0a1dd7228f2d.jpg";
import sky from "../assets/colorful-sky-after-sunset_661209-461.avif";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { TbClockHour5 } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";
import Mike from "../assets/images.jpg";
import Mohamed from "../assets/photo-1500648767791-00dcc994a43e.jpg";
import Nature from "../assets/wet-vietnam-mountain-flow-stream-rural_1417-1357.avif";
import Ibrahem from "../assets/photo-1472099645785-5658abf4ff4e.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className=" mt-30 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]">
        <div className="container text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="text-amber-700 px-6 py-2 border border-amber-700 rounded-4xl">
            مرحباً بك في عدسة
          </span>
          <h1 className="mt-10 text-white text-6xl font-bold leading-tight tracking-tight">
            اكتشف <span className="text-orange-400">فن </span>
            التصوير الفوتوغرافي
          </h1>
          <p className="text-gray-500 text-2xl mt-10">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className="mt-10 mb-13 flex flex-wrap justify-center items-center gap-5">
            <a
              href=""
              className=" text-lg font-bold px-10 py-3 bg-orange-500 border-0 rounded-4xl"
            >
              {" "}
              <div className="flex items-center gap-1">
                اكتشف المقالات <FaArrowLeft />{" "}
              </div>
            </a>
            <a
              href=""
              className=" text-lg font-bold px-10 py-3 bg-transparent border border-gray-700 rounded-4xl"
            >
              اعرف المزيد
            </a>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-2 border-inherit rounded-2xl bg-white/20 text-white hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold text-orange-400">+50</p>
              <p className=" text-gray-500">مقالة</p>
            </div>
            <div className="p-2 border-inherit rounded-2xl bg-white/20 text-white hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold text-orange-400">+10ألف</p>
              <p className=" text-gray-500">قارئ</p>
            </div>
            <div className="p-2 border-inherit rounded-2xl bg-white/20 text-white hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold text-orange-400">4</p>
              <p className=" text-gray-500">تصنيفات</p>
            </div>
            <div className="p-2 border-inherit rounded-2xl bg-white/20 text-white hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold text-orange-400">6</p>
              <p className=" text-gray-500">كاتب</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-24  h-full bg-linear-to-l from-orange-500/5 to-transparent">
        <div className="container text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-amber-700 px-6 py-2 border border-amber-700 rounded-4xl ">
                مميز
              </span>
              <h2 className="text-5xl mt-5 mb-5">مقالات مختارة</h2>
              <p className="text-neutral-500">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
            <a className="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5">
              عرض الكل
              <IoIosArrowBack />
            </a>
          </div>
          <div>
            <div className=" mb-13 relative group bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
              <Link to="/blog/light">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full absolute right-3 top-5">
                  <FaStar />
                  مميزة
                </span>
                <div className="grid md:grid-cols-2">
                  <img src={sky} alt="sky phto" />
                  <div className="p-10 bg-[#161616]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                        إضاءة
                      </span>
                      <span className="text-sm text-neutral-500 flex items-center">
                        <TbClockHour5 />8 دقائق للقراءة
                      </span>
                    </div>
                    <h3 className="text-3xl mb-4 group-hover:text-orange-500 transition-colors duration-300">
                      إتقان تصوير الساعة الذهبية: دليل شامل
                    </h3>
                    <p className="text-neutral-400 mb-30 leading-relaxed">
                      تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                      احترافية حول الإضاءة والتكوين.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className=" relative">
                          <img
                            src={Ahmed}
                            alt="سالم أحمد"
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                          />
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold">سالم أحمد</p>
                          <p className="text-xs text-neutral-500">
                            ١٥ يناير ٢٠٢٦
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        اقرأ المقال
                        <FaArrowLeft />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className=" mb-13 relative group bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
              <Link to="/blog/portrait">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full absolute right-3 top-5">
                  <FaStar />
                  مميزة
                </span>
                <div className="grid md:grid-cols-2">
                  <img src={Mike} alt="sky phto" className="w-full h-full" />
                  <div className="p-10 bg-[#161616]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                        بورتريه
                      </span>
                      <span className="text-sm text-neutral-500 flex items-center">
                        <TbClockHour5 />6 دقائق للقراءة
                      </span>
                    </div>
                    <h3 className="text-3xl mb-4 group-hover:text-orange-500 transition-colors duration-300">
                      أسرار تصوير البورتريه: كيف تلتقط روح الشخصية
                    </h3>
                    <p className="text-neutral-400 mb-30 leading-relaxed">
                      اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن
                      شخصية الموضوع الحقيقية.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className=" relative">
                          <img
                            src={Mohamed}
                            alt="محمد علي"
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                          />
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold">محمد علي</p>
                          <p className="text-xs text-neutral-500">
                            ١٢ يناير ٢٠٢٦{" "}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        اقرأ المقال
                        <FaArrowLeft />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className=" relative group bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
              <Link to="/blog/nature">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full absolute right-3 top-5">
                  <FaStar />
                  مميزة
                </span>
                <div className="grid md:grid-cols-2">
                  <img src={Nature} alt="sky phto" />
                  <div className="p-10 bg-[#161616]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                        مناظر طبيعية
                      </span>
                      <span className="text-sm text-neutral-500 flex items-center">
                        <TbClockHour5 />
                        10 دقائق للقراءة
                      </span>
                    </div>
                    <h3 className="text-3xl mb-4 group-hover:text-orange-500 transition-colors duration-300">
                      دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف
                    </h3>
                    <p className="text-neutral-400 mb-30 leading-relaxed">
                      استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط
                      جمال الطبيعة بعدستك.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className=" relative">
                          <img
                            src={Ibrahem}
                            alt="إبراهيم حسن"
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                          />
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold">إبراهيم حسن</p>
                          <p className="text-xs text-neutral-500">
                            ١٠ يناير ٢٠٢٦{" "}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        اقرأ المقال
                        <FaArrowLeft />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
