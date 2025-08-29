"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

interface CommonHeaderProps {
  title: string;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ title }) => {
  const pathname = usePathname(); 

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/jobs", label: "Jobs" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full bg-black relative">
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/img_.png')" }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[72px]">
          {/* Navigation */}
          <nav className="flex items-center justify-between py-4 sm:py-5 lg:py-[20px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-[10px]">
              <Image
                src="/images/img_check_1_1.svg"
                alt="Job Portal Logo"
                width={28}
                height={28}
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-lg sm:text-xl lg:text-[20px] font-figtree font-semibold leading-5 sm:leading-6 text-white">
                Job Portal
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-4 lg:gap-[20px]">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href; // ✅ Active check
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-sm sm:text-base lg:text-[16px] font-figtree leading-4 sm:leading-5 transition-colors duration-200 ${
                      isActive
                        ? "font-semibold text-white"
                        : "font-medium text-[#ffffff99] hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-[20px]">
              <Link
                href="/login"
                className="text-sm sm:text-base lg:text-[16px] font-figtree font-semibold leading-4 sm:leading-5 text-white hover:text-[#ffffff99] transition-colors duration-200"
              >
                Login
              </Link>
              <Button className="px-4 sm:px-5 lg:px-[20px] py-2 sm:py-2.5 lg:py-[8px] text-sm sm:text-base lg:text-[16px] font-figtree font-semibold leading-4 sm:leading-5 text-white bg-[#309589] hover:bg-[#267a6f] rounded-lg transition-all duration-200">
                Register
              </Button>
            </div>
          </nav>

          {/* Page Title */}
          <div className="text-center pb-12 sm:pb-16 lg:pb-[118px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-figtree font-bold leading-tight sm:leading-snug lg:leading-[72px] text-white">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CommonHeader;