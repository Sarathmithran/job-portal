'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/', active: true },
    { label: 'Jobs', href: '/jobs', active: false },
    { label: 'About Us', href: '/about', active: false },
    { label: 'Contact Us', href: '/contact', active: false }
  ];

  return (
    <header className={`w-full ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[72px]">
        <div className="flex justify-between items-center py-4 sm:py-5 lg:py-[20px]">
          {/* Logo Section */}
          <div className="flex items-center gap-2 sm:gap-[10px]">
            <Image
              src="/images/img_check_1_1.svg"
              alt="Job Portal Logo"
              width={28}
              height={28}
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
            <h1 className="text-base sm:text-lg lg:text-[20px] font-figtree font-semibold leading-5 sm:leading-6 text-white">
              Job Portal
            </h1>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-[44px]">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm xl:text-[16px] font-figtree leading-5 transition-colors duration-200 hover:text-white ${
                  item.active 
                    ? 'font-semibold text-white' :'font-medium text-[#ffffff99] hover:text-white'
                }`}
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <Link
              href="/login"
              className="text-sm xl:text-[16px] font-figtree font-medium leading-5 text-white hover:text-[#ffffff99] transition-colors duration-200"
              role="menuitem"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-sm xl:text-[16px] font-figtree font-semibold leading-5 text-white bg-[#309589] hover:bg-[#267a6f] px-4 xl:px-[20px] py-2 xl:py-[8px] rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 capitalize"
              role="menuitem"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 w-full bg-[#309589] border-t border-[#267a6f] z-50`}>
            <div className="flex flex-col px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-base font-figtree leading-5 transition-colors duration-200 hover:text-white ${
                    item.active 
                      ? 'font-semibold text-white' :'font-medium text-[#ffffff99] hover:text-white'
                  }`}
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-[#267a6f]">
                <a
                  href="/login"
                  className="text-base font-figtree font-medium leading-5 text-white hover:text-[#ffffff99] transition-colors duration-200"
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="text-base font-figtree font-semibold leading-5 text-white bg-[#267a6f] hover:bg-[#1f6159] px-4 py-2 rounded-lg transition-all duration-200 text-center capitalize"
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;