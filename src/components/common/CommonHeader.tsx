"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import NavMenu from "./NavMenu";
import { useAuth } from "@/hooks/useAuth";

interface CommonHeaderProps {
  title: string;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ title }) => {
  const pathname = usePathname();
  const { isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[72px] relative">
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-[20px]">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
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

            {/* Auth Buttons (Desktop only) */}
            <div className="hidden md:flex">
              <NavMenu />
            </div>

            {/* Hamburger / Close Icon (Mobile only) */}
            <button
              className="block md:hidden p-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                // Close Icon
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } md:hidden absolute top-full left-0 w-full bg-[#309589] border-t border-[#267a6f] z-50`}
          >
            <div className="flex flex-col w-full px-4 py-4 space-y-4">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`block w-full text-left text-base font-figtree transition-colors duration-200 ${
                      isActive
                        ? "font-semibold text-white"
                        : "font-medium text-[#ffffff99] hover:text-white"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}

              {isLoggedIn ? (<div className="pt-4 border-t border-[#267a6f]"><NavMenu /></div>) : (<div className="flex flex-col gap-3 pt-4 border-t border-[#267a6f]">
                <a
                  href="/login"
                  className="block w-full text-left text-base font-figtree font-medium text-white hover:text-[#ffffff99] transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="block w-full text-center text-base font-figtree font-semibold text-white bg-[#267a6f] hover:bg-[#1f6159] px-4 py-2 rounded-lg transition-all duration-200 capitalize"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </a>
              </div>)}
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