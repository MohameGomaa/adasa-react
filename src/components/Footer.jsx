import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]'>
      <div className='pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl'></div>
      <div className='pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl'></div>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
            <div className='lg:col-span-1'>
                <a href="" className='flex items-center gap-3 mb-6 group'>
                    <div className='w-11 h-11 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300'>
                        <span className='text-xl'>ع</span>
                    </div>
                    <span className='text-xl'>عدسة</span>
                </a>
                <p className='text-sm text-neutral-500 mb-6 leading-relaxed'>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>
                <div className='flex items-center gap-2'>
                    <a href="" className='w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110'><FaXTwitter /></a>
                    <a href="" className='w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110'><FaGithub /></a>
                    <a href="" className='w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110'><FaLinkedin /></a>
                    <a href="" className='w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110'><FaYoutube /></a>
                </div>
            </div>
            <div>         
                <h3 className='font-semibold mb-6 flex items-center gap-2'><div className='w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full'></div>استكشف</h3>
                <ul className='pl-4'>
                    <li><Link to="/" className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 gap-2 group'>الرئيسية</Link> </li>
                    <li><Link to="/blog" className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 gap-2 group'>المدونة</Link></li>
                    <li><Link to="/about" className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 gap-2 group'>من نحن</Link></li>
                </ul>
            </div>
            <div>
                <h3 className='font-semibold mb-6 flex items-center gap-2'><div className='w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full'></div>التصنيفات</h3>
                <ul className='pl-4'>
                    <li><Link to="/categories/lighting" className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 gap-2 group'>إضاءة</Link></li>
                    <li><Link to="/categories/portrait" className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 gap-2 group'>بورتريه</Link></li>
                    <li><Link to="/categories/nature" className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 gap-2 group'>مناظر طبيعية</Link></li>         
                </ul>
            </div>
            <div>
                <h3 className='font-semibold mb-6 flex items-center gap-2'><div className='w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full'></div>ابقى على اطلاع</h3>
                <p className='text-sm text-neutral-500 mb-4'>اشترك للحصول على أحدث المقالات والتحديثات.</p>
                <form action="">
                    <input type="email" name="" id="" placeholder='أدخل بريدك الإلكتروني' className='w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600'/>
                    <button type='submit' className='w-full p-3 bg-amber-600 border-0 mt-5 text-xl rounded-full'>اشترك</button>
                </form>
            </div>
        </div>
      </div>
      <div className='border-t border-[#262626]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <p className='text-sm text-neutral-600 flex items-center gap-1'>© 2026 عدسة. صنع بكل <FaHeart className='text-orange-500'/> جميع الحقوق محفوظة</p>
                <div className='flex items-center gap-6'>
                    <a href="" className='text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300'>سياسة الخصوصية</a>
                    <a href="" className='text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300'>شروط الخدمة</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
