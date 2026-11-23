import { Link } from "react-router-dom";

export default function Blogs() {
  const posts = [
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
  ];

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
          {posts.map((post) => {
            return (
              <Link
                key={post.id}
                to={"/blog/" + post.id}
                className="block bg-[#161616] border border-gray-600 rounded-3xl relative"
              >
                <span className=" absolute top-5 right-6 text-sm px-3 py-1 bg-gray-900 border-0 rounded-3xl">
                  {post.category}
                </span>
                <img
                  src={post.image}
                  alt={post.title}
                  className=" border-0 rounded-t-3xl"
                />
                <div className=" p-5">
                  <div className=" flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
                    <p>{post.readTime}</p>
                    <div className=" w-1 h-1 rounded-4xl bg-gray-500 border"></div>
                    <p>{post.date}</p>
                  </div>
                  <h3 className=" text-2xl font-bold mb-3">{post.title}</h3>
                  <p className=" text-gray-400 mb-3">{post.excerpt}</p>
                  <div className=" w-full h-1 bg-gray-500"></div>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className=" w-10 h-10 border border-gray-500 rounded-4xl"
                    />
                    <div>
                      <p className=" text-white">{post.author.name}</p>
                      <p className=" text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
