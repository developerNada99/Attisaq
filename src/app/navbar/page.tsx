"use client"; // إذا كنتِ تستخدمين app directory

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // أيقونات
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "الكورسات", href: "/" },
    { label: "الاختبارات المعيارية", href: "/" },
    { label: "الحلول الاستشارية", href: "/" },
    { label: "تواصل معنا", href: "/" },
    { label: "من نحن", href: "/" },
    { label: "الرئيسية", href: "/" },
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: "url('/photos/head.jpg')" }}
    >
      {/* نافبار داخل الهيدر */}
      <nav className="sticky top-0 z-20 bg-transparent backdrop-blur-md shadow-none">
        <div className="container mx-auto px-4  flex justify-between items-center">
          {/* إضافة اللوجو كصورة */}
          <Image src="/photos/logo.jpg" alt="Logo" width={100} height={100} />

          {/* زر الموبايل */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* قائمة الروابط - سطح المكتب */}
          <ul className="hidden md:flex gap-6 text-white font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:text-[#ad8d47] transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* قائمة الروابط - موبايل */}
        {/* قائمة الروابط - موبايل */}
{isOpen && (
  <ul
    className="md:hidden px-4 pb-4 flex flex-col gap-4 text-white font-medium 
              animate-slideDown transition-all duration-300 ease-in-out"
  >
    {navItems.slice().reverse().map((item, index) => (
      <li key={index}>
        <Link
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="block py-2 transition"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
)}

      </nav>

      {/* محتوى هيدر مع النصوص */}
      <div className="absolute inset-0 bg-black/100 opacity-65"></div> {/* تأثير الظل لتوضيح النص */}
      <div className="relative z-10 text-white flex justify-center items-center flex-col pt-32 px-36 max-md:px-7">
        <h1 className="text-4xl font-bold">مرحبًا بك في إتساق</h1>
        <p className="mt-4 text-lg text-center max-md:text-sm">تتخصص إتساق في تصميم وتنفيذ أنظمة تقييم إلكترونية مصممة خصيصا لتقييم كفاءة الطلاب في اللغة العربية والتربية الإسلامية كما تخدم المنصة المتعلمين العرب وغير العرب على حد سواء ، وتوفر حلولا رقمية مخصصة تتوافق مع المعايير التعليمية. من خلال الاستفادة من البرامج التعليمية المتقدمة وتصميم نظم الحاسب الآلي في التدريب والتعليم  . كما تجري اتساق تحليلا متعمقا للمتطلبات المؤسسية لتطوير أدوات فعالة وسلسة الاستخدام لتقييم المهارات اللغوية وتدعم أيضا المدارس والهيئات التعليمية والمؤسسات في تقديم تقييمات دقيقة وذات معنى .</p>
      </div>
    </div>
  );
};

export default Navbar;
