"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
    <div className="relative h-screen w-full overflow-hidden">
      {/* ✅ خلفية صورة باستخدام Image */}
      <Image
        src="/photos/head.jpg"
        alt="background"
        fill
        style={{ objectFit: "cover" }}
        priority // دي أهم حاجة: تخليها تتحمّل أول حاجة
      />

      {/* overlay داكن لتوضيح النصوص */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Navbar + محتوى */}
      <div className="relative z-20">
        {/* Navbar */}
        <nav className="px-4 py-4 flex justify-between items-center">
          <Image
            src="/photos/logo.jpg"
            alt="Logo"
            width={100}
            height={100}
            priority
          />

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex gap-6 text-white font-medium text-xl mr-9">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:text-[#ad8d47] transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu */}
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

        {/* محتوى النصوص */}
        <div className="text-white flex justify-center items-center flex-col px-6 pt-24 text-center">
          <h1 className="text-4xl font-bold">مرحبًا بك في إتساق</h1>
          <p className="mt-4 text-lg max-w-4xl">
            تتخصص إتساق في تصميم وتنفيذ أنظمة تقييم إلكترونية مصممة خصيصا لتقييم كفاءة الطلاب في اللغة العربية والتربية الإسلامية كما تخدم المنصة المتعلمين العرب وغير العرب على حد سواء ، وتوفر حلولا رقمية مخصصة تتوافق مع المعايير التعليمية. من خلال الاستفادة من البرامج التعليمية المتقدمة وتصميم نظم الحاسب الآلي في التدريب والتعليم  . كما تجري اتساق تحليلا متعمقا للمتطلبات المؤسسية لتطوير أدوات فعالة وسلسة الاستخدام لتقييم المهارات اللغوية وتدعم أيضا المدارس والهيئات التعليمية والمؤسسات في تقديم تقييمات دقيقة وذات معنى .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
