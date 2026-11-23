import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { TbClockHour5 } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      slug: "mastering-golden-hour-photography",
      title: "إتقان تصوير الساعة الذهبية: دليل شامل",
      excerpt:
        "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
      content:
        "الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.\n\n## لماذا الساعة الذهبية؟\n\nالضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.\n\n## التحضير المسبق\n\nخطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.\n\n## إعدادات الكاميرا\n\nاستخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.\n\n## التكوين الفني\n\nضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.\n\n## الخلاصة\n\nالساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.",
      category: "إضاءة",
      author: {
        name: "سالم أحمد",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        role: "مصور محترف",
      },
      image:
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",
      date: "2026-01-15",
      readTime: "8 دقائق للقراءة",
      featured: true,
      tags: ["إضاءة", "الساعة الذهبية", "تصوير خارجي"],
    },
    {
      id: 2,
      slug: "portrait-photography-secrets",
      title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
      excerpt:
        "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
      content:
        "تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس مجرد توثيق الملامح، بل كشف القصة خلف العيون.\n\n## التواصل مع الموضوع\n\nقبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة. الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع.\n\n## اختيار العدسة المناسبة\n\nعدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة.\n\n## الإضاءة الطبيعية\n\nالنافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد رائعة.\n\n## التركيز على العيون\n\nالعيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة. استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.\n\n## الخلفية والتكوين\n\nاختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع العيون في النقاط القوية.\n\n## الخلاصة\n\nالبورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل الإنساني، تخلق صوراً خالدة.",
      category: "بورتريه",
      author: {
        name: "محمد علي",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        role: "مصور بورتريه",
      },
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      date: "2026-01-12",
      readTime: "6 دقائق للقراءة",
      featured: true,
      tags: ["بورتريه", "تصوير أشخاص", "إضاءة طبيعية"],
    },
    {
      id: 3,
      slug: "landscape-photography-guide",
      title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
      excerpt:
        "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",
      content:
        "تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.\n\n## المعدات الأساسية\n\nحامل ثلاثي قوي ضروري للحصول على صور حادة. عدسة واسعة الزاوية (16-35mm) مثالية لالتقاط المشاهد الواسعة. فلاتر ND و Polarizer ستفتح لك آفاقاً إبداعية جديدة.\n\n## توقيت التصوير\n\nالساعة الزرقاء والساعة الذهبية هي أفضل الأوقات. الضوء يكون ناعماً والألوان غنية. لا تخف من التصوير في الطقس الدرامي - الغيوم والعواصف تضيف شخصية للصورة.\n\n## التكوين الفني\n\nابحث عن عناصر المقدمة المثيرة للاهتمام. صخرة، زهرة، أو مسار يقود العين نحو الخلفية. استخدم خطوط التوجيه لخلق عمق في الصورة.\n\n## إعدادات الكاميرا\n\nفتحة f/8-f/16 للحصول على حدة من المقدمة للخلفية. ISO منخفض قدر الإمكان. استخدم وضع Live View والتكبير للتركيز اليدوي الدقيق.\n\n## المعالجة اللاحقة\n\nصور بصيغة RAW لأقصى مرونة في التعديل. تعديل الإضاءة والألوان بلطف يبرز جمال المشهد دون إفراط.\n\n## الخلاصة\n\nتصوير المناظر الطبيعية يعلمك التأمل والصبر. كل صورة هي ذكرى من رحلة لا تُنسى.",
      category: "مناظر طبيعية",
      author: {
        name: "إبراهيم حسن",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        role: "مصور طبيعة",
      },
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      date: "2026-01-10",
      readTime: "10 دقائق للقراءة",
      featured: true,
      tags: ["مناظر طبيعية", "تصوير خارجي", "طبيعة"],
    },
  ]);

  function getPosts() {
    setPosts(posts);
  }

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
            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className=" mb-13 relative group bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                >
                  <Link to={"/blog/" + post.id}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full absolute right-3 top-5">
                      <FaStar />
                      مميزة
                    </span>
                    <div className="grid md:grid-cols-2">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      <div className="p-10 bg-[#161616]">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                            {post.category}
                          </span>
                          <span className="text-sm text-neutral-500 flex items-center">
                            <TbClockHour5 />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-3xl mb-4 group-hover:text-orange-500 transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-neutral-400 mb-30 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className=" relative">
                              <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                              />
                              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                            </div>
                            <div>
                              <p className="text-sm font-semibold">
                                {post.author.name}
                              </p>
                              <p className="text-xs text-neutral-500">
                                {post.date}
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
