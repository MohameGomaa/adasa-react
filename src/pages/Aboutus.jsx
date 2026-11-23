export default function Aboutus() {
  return (
    <>
      <div className=" mt-10 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]">
        <div className="container text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="text-amber-700 px-6 py-2 border border-amber-700 rounded-4xl">
            من نحن
          </span>
          <h1 className="mt-10 text-white text-6xl font-bold leading-tight tracking-tight">
            مهمتنا هي <span className="text-orange-400">الإعلام والإلهام </span>
          </h1>
          <p className="text-gray-500 text-lg m-10">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-2 border-inherit rounded-2xl bg-white/20 text-white hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold text-orange-400">+2مليون</p>
              <p className=" text-gray-500">قارئ شهرياً</p>
            </div>
            <div className="p-2 border-inherit rounded-2xl bg-white/20 text-white hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold text-orange-400">+500</p>
              <p className=" text-gray-500">مقالة منشورة</p>
            </div>
            <div className="p-2 border-inherit rounded-2xl bg-white/20 text-white hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold text-orange-400">+50</p>
              <p className=" text-gray-500">كاتب خبير</p>
            </div>
            <div className="p-2 border-inherit rounded-2xl bg-white/20 text-white hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold text-orange-400">+15</p>
              <p className=" text-gray-500">تصنيف</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
