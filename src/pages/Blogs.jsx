import Ahmed from "../assets/photo-1507003211169-0a1dd7228f2d.jpg";
import sky from "../assets/colorful-sky-after-sunset_661209-461.avif";
import Mike from "../assets/images.jpg";
import Mohamed from "../assets/photo-1500648767791-00dcc994a43e.jpg";
import Nature from "../assets/wet-vietnam-mountain-flow-stream-rural_1417-1357.avif";
import Ibrahem from "../assets/photo-1472099645785-5658abf4ff4e.jpg";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <>
      <div className="bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]">
        <div className="mt-20 ">
          <div className="container text-center max-w-4xl mx-auto">
            <span className=" text-amber-700 px-6 py-2 border border-amber-700 rounded-4xl">
              مدونتنا
            </span>
            <h1 className=" mt-10 mb-5 text-6xl font-bold">
              استكشف{" "}
              <span className="bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                مقالاتنا
              </span>
            </h1>
            <p className=" text-xl text-gray-500">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto mt-60 mb-50">
        <div className=" grid md:grid-cols-3 gap-7">
          <Link
            to="light"
            className="block bg-[#161616] border border-gray-600 rounded-3xl relative"
          >
            <span className=" absolute top-5 right-6 text-sm px-3 py-1 bg-gray-900 border-0 rounded-3xl">
              إضاءة
            </span>
            <img
              src={sky}
              alt="sky photo"
              className=" border-0 rounded-t-3xl h-70 w-full"
            />
            <div className=" p-5">
              <div className=" flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
                <p>8 دقائق للقراءة</p>
                <div className=" w-1 h-1 rounded-4xl bg-gray-500 border"></div>
                <p>١٥ يناير ٢٠٢٦</p>
              </div>
              <h3 className=" text-2xl font-bold mb-3">
                إتقان تصوير الساعة الذهبية: دليل شامل
              </h3>
              <p className=" text-gray-400 mb-3">
                "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                احترافية حول الإضاءة والتكوين.
              </p>
              <div className=" w-full h-1 bg-gray-500"></div>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <img
                  src={Ahmed}
                  alt="سالم احمد"
                  className=" w-10 h-10 border border-gray-500 rounded-4xl"
                />
                <div>
                  <p className="">سالم أحمد</p>
                  <p className=" text-gray-600">مصور محترف</p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="portrait"
            className="block bg-[#161616] border border-gray-600 rounded-3xl relative"
          >
            <span className=" absolute top-5 right-6 text-sm px-3 py-1 bg-gray-900 border-0 rounded-3xl">
              بورتريه
            </span>
            <img
              src={Mike}
              alt="sky photo"
              className=" border-0 rounded-t-3xl h-70 w-full"
            />
            <div className=" p-5">
              <div className=" flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
                <p>6 دقائق للقراءة</p>
                <div className=" w-1 h-1 rounded-4xl bg-gray-500 border"></div>
                <p>١٢ يناير ٢٠٢٦</p>
              </div>
              <h3 className=" text-2xl font-bold mb-3">
                أسرار تصوير البورتريه: كيف تلتقط روح الشخصية
              </h3>
              <p className=" text-gray-400 mb-3">
                اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية
                الموضوع الحقيقية.
              </p>
              <div className=" w-full h-1 bg-gray-500"></div>
              <div className=" mt-3 flex flex-wrap items-center gap-3">
                <img
                  src={Mohamed}
                  alt="محمد علي"
                  className=" w-10 h-10 border border-gray-500 rounded-4xl"
                />
                <div>
                  <p className="">محمد علي</p>
                  <p className=" text-gray-600">مصور بورتريه</p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="nature"
            className="block bg-[#161616] border border-gray-600 rounded-3xl relative"
          >
            <span className=" absolute top-5 right-6 text-sm px-3 py-1 bg-gray-900 border-0 rounded-3xl">
              مناظر طبيعية
            </span>
            <img
              src={Nature}
              alt="sky photo"
              className=" border-0 rounded-t-3xl h-70 w-full"
            />
            <div className=" p-5">
              <div className=" flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
                <p>10 دقائق للقراءة</p>
                <div className=" w-1 h-1 rounded-4xl bg-gray-500 border"></div>
                <p> ١٠ يناير ٢٠٢٦</p>
              </div>
              <h3 className=" text-2xl font-bold mb-3">
                دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف
              </h3>
              <p className=" text-gray-400 mb-3">
                استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال
                الطبيعة بعدستك.
              </p>
              <div className=" w-full h-1 bg-gray-500"></div>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <img
                  src={Ibrahem}
                  alt="إبراهيم حسن"
                  className=" w-10 h-10 border border-gray-500 rounded-4xl"
                />
                <div>
                  <p className="">إبراهيم حسن</p>
                  <p className=" text-gray-600">مصور طبيعة</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
