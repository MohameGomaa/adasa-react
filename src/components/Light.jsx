import { useState } from "react";
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

export default function Light() {
  const id = Number(window.location.pathname.split("/").filter(Boolean).pop());
  const [posts, setPosts] = useState([
    {
      id: 1,
      slug: "mastering-golden-hour-photography",
      title: "إتقان تصوير الساعة الذهبية: دليل شامل",
      excerpt:
        "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
      about:
        " الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.",
      content: [
        "لماذا الساعة الذهبية؟",
        "الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.",
        "التحضير المسبق",
        "خطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.",
        "إعدادات الكاميرا",
        "استخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.",
        "التكوين الفني",
        "ضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.",
        "الخلاصة",
        "الساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.",
      ],
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
      about:
        "تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس مجرد توثيق الملامح، بل كشف القصة خلف العيون.",
      content: [
        "التواصل مع الموضوع",
        "قبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة. الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع.",
        "اختيار العدسة المناسبة",
        "عدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة.",
        "الإضاءة الطبيعية",
        "النافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد رائعة.",
        "التركيز على العيون",
        "العيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة. استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.",
        "الخلفية والتكوين",
        "اختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع العيون في النقاط القوية.",
        "الخلاصة",
        "البورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل الإنساني، تخلق صوراً خالدة.",
      ],
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
      about:
        "تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.",
      content: [
        "المعدات الأساسية",
        "حامل ثلاثي قوي ضروري للحصول على صور حادة. عدسة واسعة الزاوية (16-35mm) مثالية لالتقاط المشاهد الواسعة. فلاتر ND و Polarizer ستفتح لك آفاقاً إبداعية جديدة.",
        "توقيت التصوير",
        "الساعة الزرقاء والساعة الذهبية هي أفضل الأوقات. الضوء يكون ناعماً والألوان غنية. لا تخف من التصوير في الطقس الدرامي - الغيوم والعواصف تضيف شخصية للصورة.",
        "التكوين الفني",
        "ابحث عن عناصر المقدمة المثيرة للاهتمام. صخرة، زهرة، أو مسار يقود العين نحو الخلفية. استخدم خطوط التوجيه لخلق عمق في الصورة.",
        "إعدادات الكاميرا",
        "فتحة f/8-f/16 للحصول على حدة من المقدمة للخلفية. ISO منخفض قدر الإمكان. استخدم وضع Live View والتكبير للتركيز اليدوي الدقيق.",
        "المعالجة اللاحقة",
        "صور بصيغة RAW لأقصى مرونة في التعديل. تعديل الإضاءة والألوان بلطف يبرز جمال المشهد دون إفراط.",
        "الخلاصة",
        "تصوير المناظر الطبيعية يعلمك التأمل والصبر. كل صورة هي ذكرى من رحلة لا تُنسى.",
      ],
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
  ].filter((post) => post.id === id));

  function getPosts() {
    setPosts(posts);
  }

  return (
    <>
      {posts.map((post) => {
        const sections = [];

        for (let i = 0; i < post.content.length; i += 2) {
          if (post.content[i + 1]) {
            sections.push({
              title: post.content[i],
              body: post.content[i + 1],
            });
          }
        }
        return (
          <div key={post.id}>
            <div className="relative h-130 w-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center mask-b-from-50% mask-b-to-transparent bg-[url({post.image})]"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="relative z-10 flex h-full items-center justify-center p-6">
                <div className=" my-4 max-w-5xl mx-auto">
                  <div className=" flex flex-wrap items-center gap-3 text-sm font-bold mb-4">
                    <button className=" px-4 py-1 bg-orange-500 border-0 rounded-3xl">
                      {post.category}
                    </button>
                    <div className="flex items-center gap-3 text-gray-500">
                      <span className="flex items-center gap-1">
                        <MdOutlineDateRange />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <TbClockHour5 />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <h2 className=" mb-6 leading-tight max-w-4xl text-6xl font-bold">
                    {post.title}
                  </h2>
                  <div className=" flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit ">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-15 h-15 border-2 border-amber-700 rounded-4xl"
                    />
                    <div>
                      <p>{post.author.name}</p>
                      <p className=" text-gray-500 text-sm">
                        {post.author.role}
                      </p>
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
                      {post.excerpt}
                    </p>
                  </div>
                  <div>
                    <p className="text-neutral-300 leading-relaxed mb-15">
                      {post.about}
                    </p>
                    {sections.map((section, index) => (
                      <div className=" mb-15" key={index}>
                        <div>
                          <h3
                            id={`section-${index + 1}`}
                            className=" text-3xl mb-6 flex items-center gap-4"
                          >
                            <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30 text-orange-500">
                              <FaCamera />
                            </span>
                            {section.title}
                          </h3>
                        </div>
                        <p className="text-neutral-300">{section.body}</p>
                      </div>
                    ))}
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
                        #{post.tags[0]}
                      </span>
                      <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                        #{post.tags[1]}
                      </span>
                      <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                        {post.tags[2]}
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
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-24 h-24 rounded-2xl object-cover border-4 border-orange-500/20"
                      />
                      <div>
                        <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                          كاتب المقال
                        </span>
                        <h4 className="text-xl font-bold text-white mt-1">
                          {post.author.name}
                        </h4>
                        <p className="text-neutral-500 text-sm mb-3">
                          {post.author.role}
                        </p>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم
                          التصوير الفوتوغرافي.
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
                        {sections.map((section, index) => (
                          <a
                            key={`${post.id}-${index}`}
                            href={`#section-${index + 1}`}
                            className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                          >
                            <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                              {index + 1}
                            </span>
                            <span className="text-sm">{section.title}</span>
                          </a>
                        ))}
                      </nav>
                    </div>
                    <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                          <span className="text-orange-500 text-2xl mb-2 flex justify-center">
                            <TbClockHour5 />
                          </span>
                          <p>{post.readTime}</p>
                          <p className=" text-neutral-500 text-xs">
                            وقت القراءة
                          </p>
                        </div>
                        <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                          <span className="text-orange-500 text-2xl mb-2 flex justify-center">
                            <MdOutlineDateRange />
                          </span>
                          <p>{post.date}</p>
                          <p className="text-neutral-500 text-xs">
                            تاريخ النشر
                          </p>
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
          </div>
        );
      })}
    </>
  );
}
