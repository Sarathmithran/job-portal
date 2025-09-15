'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { useAuth } from '@/hooks/useAuth';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const { isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/', active: true },
    { label: 'Jobs', href: '/jobs', active: false },
    { label: 'About Us', href: '/about', active: false },
    { label: 'Contact Us', href: '/contact', active: false }
  ];

  return (
    <header className={`w-full ${className} relative`}>
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

          {/* Hamburger / Close Icon */}
          <button
            className="block lg:hidden p-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              // Close icon (X)
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
              // Hamburger icon
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-[44px]">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm xl:text-[16px] font-figtree leading-5 transition-colors duration-200 hover:text-white ${
                  item.active
                    ? 'font-semibold text-white'
                    : 'font-medium text-[#ffffff99] hover:text-white'
                }`}
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex">
            <NavMenu />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } lg:hidden absolute top-full left-0 w-full bg-[#309589] border-t border-[#267a6f] z-50`}
      >
        <div className="flex flex-col w-full px-4 py-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block w-full text-left text-base font-figtree leading-5 transition-colors duration-200 hover:text-white ${
                item.active
                  ? 'font-semibold text-white'
                  : 'font-medium text-[#ffffff99] hover:text-white'
              }`}
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {isLoggedIn ? <div className="pt-4 border-t border-[#267a6f]"><NavMenu /></div> : (
            <div className="flex flex-col gap-3 pt-4 border-t border-[#267a6f]">
            <Link
              href="/login"
              className="block w-full text-left text-base font-figtree font-medium leading-5 text-white hover:text-[#ffffff99] transition-colors duration-200"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="block w-full text-center text-base font-figtree font-semibold leading-5 text-white bg-[#267a6f] hover:bg-[#1f6159] px-4 py-2 rounded-lg transition-all duration-200 capitalize"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
          </div>
           ) }
        </div>
      </nav>
    </header>
  );
};

export default Header;