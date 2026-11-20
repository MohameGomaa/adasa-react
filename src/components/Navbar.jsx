
import { FaMagnifyingGlass } from "react-icons/fa6";
// import {Logo} from '../assets/logo-GdqARQRt.png'
import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
    isActive
      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
      : "text-neutral-400 hover:text-white"
  }`;

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#161616] fixed w-full z-20 top-0 left-0">
        <div className="md:w-300 flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img src={Logo} className="h-7" alt="Logo" /> */}
            <div className="flex flex-col">
              <span className="text-xl">عدسة</span>
              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>
          <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button className="ml-5 text-neutral-500">
              <FaMagnifyingGlass />
            </button>
            <a
              type="button"
              className="px-4 py-2 border-0 rounded-full bg-orange-600 text-sm"
            >
              ابدأ القراءة
            </a>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex items-center bg-[#161616] rounded-full px-5 py-3 border border-[#262626] gap-5 ">
              <li>
                <NavLink
                  to="/"
                  end
                  className={navLinkClass}
                >
                  الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={navLinkClass}
                >
                  المدونة
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={navLinkClass}
                >
                  من نحن
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
