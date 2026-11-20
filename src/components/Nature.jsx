
import forest from "../assets/wet-vietnam-mountain-flow-stream-rural_1417-1357.avif";
import Ibrahem from "../assets/photo-1472099645785-5658abf4ff4e.jpg";
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

export default function Nature() {
  return (
    <>
      <div className="relative h-130 w-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center mask-b-from-50% mask-b-to-transparent"
                style={{ backgroundImage: `url(${forest})` }}
              />
              <div className="relative z-10 flex h-full items-center justify-center p-6">
                <div className=" my-4 max-w-5xl mx-auto">
                  <div className=" flex flex-wrap items-center gap-3 text-sm font-bold mb-4">
                    <button className=" px-4 py-1 bg-orange-500 border-0 rounded-3xl">
                      مناظر طبيعية
                    </button>
                    <div className="flex items-center gap-3 text-gray-500">
                      <span className="flex items-center gap-1">
                        <MdOutlineDateRange />
                        ١٠ يناير ٢٠٢٦
                      </span>
                      <span className="flex items-center gap-1">
                        <TbClockHour5 />10 دقائق للقراءة
                      </span>
                    </div>
                  </div>
                  <h2 className=" mb-6 leading-tight max-w-4xl text-6xl font-bold">
دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف                  </h2>
                  <div className=" flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit ">
                    <img
                      src={Ibrahem}
                      alt="إبراهيم حسن"
                      className="w-15 h-15 border-2 border-amber-700 rounded-4xl"
                    />
                    <div>
                      <p>إبراهيم حسن</p>
                      <p className=" text-gray-500 text-sm">مصور طبيعة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className=" grid lg:grid-cols-[1fr_300px] gap-12">
                <div className="order-2 lg:order-1">
                  <div className=" p-6 bg-lainer-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                    <p className="text-lg text-neutral-200 leading-relaxed italic">"استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك."
                    </p>
                  </div>
                  <div>
                    <p className="text-neutral-300 leading-relaxed mb-15">تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.
                    </p>
                    <div className=" mb-15">
                      <div>
                        <h3
                          id="section-1"
                          className=" text-3xl mb-6 flex items-center gap-4"
                        >
                          <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30 text-orange-500">
                            <FaCamera />
                          </span>{" "}المعدات الأساسية
                        </h3>
                      </div>
                      <p className="text-neutral-300">حامل ثلاثي قوي ضروري للحصول على صور حادة. عدسة واسعة الزاوية (16-35mm) مثالية لالتقاط المشاهد الواسعة. فلاتر ND و Polarizer ستفتح لك آفاقاً إبداعية جديدة.


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
                          </span>{" "}توقيت التصوير{" "}
                        </h3>
                      </div>
                      <p className="text-neutral-300">الساعة الزرقاء والساعة الذهبية هي أفضل الأوقات. الضوء يكون ناعماً والألوان غنية. لا تخف من التصوير في الطقس الدرامي - الغيوم والعواصف تضيف شخصية للصورة.


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
                          التكوين الفني
                        </h3>
                      </div>
                      <p className="text-neutral-300">ابحث عن عناصر المقدمة المثيرة للاهتمام. صخرة، زهرة، أو مسار يقود العين نحو الخلفية. استخدم خطوط التوجيه لخلق عمق في الصورة.
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
                          </span>{" "}إعدادات الكاميرا
                        </h3>
                      </div>
                      <p className="text-neutral-300">فتحة f/8-f/16 للحصول على حدة من المقدمة للخلفية. ISO منخفض قدر الإمكان. استخدم وضع Live View والتكبير للتركيز اليدوي الدقيق.
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
                          </span>{" "}المعالجة اللاحقة
                        </h3>
                      </div>
                      <p className="text-neutral-300">صور بصيغة RAW لأقصى مرونة في التعديل. تعديل الإضاءة والألوان بلطف يبرز جمال المشهد دون إفراط.


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
                      <p className="text-neutral-300">تصوير المناظر الطبيعية يعلمك التأمل والصبر. كل صورة هي ذكرى من رحلة لا تُنسى.
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
                        #مناظر طبيعية
                      </span>
                      <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                        #تصوير خارجي
                      </span>
                      <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                        #طبيعة
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
                        src={Ibrahem}
                        alt="إبراهيم حسن"
                        className="w-24 h-24 rounded-2xl object-cover border-4 border-orange-500/20"
                      />
                      <div>
                        <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                          كاتب المقال
                        </span>
                        <h4 className="text-xl font-bold text-white mt-1">
                          إبراهيم حسن
                        </h4>
                        <p className="text-neutral-500 text-sm mb-3">مصور طبيعة</p>
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
                          <span className="text-sm">المعدات الأساسية</span>
                        </a>
                        <a
                          href="#section-2"
                          className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                        >
                          <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                            2
                          </span>
                          <span className="text-sm">توقيت التصوير</span>
                        </a>
                        <a
                          href="#section-3"
                          className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                        >
                          <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                            3
                          </span>
                          <span className="text-sm">التكوين الفني</span>
                        </a>
                        <a
                          href="#section-4"
                          className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                        >
                          <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                            4
                          </span>
                          <span className="text-sm">إعدادات الكاميرا</span>
                        </a>
                        <a
                          href="#section-5"
                          className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                        >
                          <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                            5
                          </span>
                          <span className="text-sm">المعالجة اللاحقة</span>
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
                          <p>10 دقائق للقراءة</p>
                          <p className=" text-neutral-500 text-xs">وقت القراءة</p>
                        </div>
                        <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                          <span className="text-orange-500 text-2xl mb-2 flex justify-center">
                            <MdOutlineDateRange />
                          </span>
                          <p> ١٠ يناير</p>
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
