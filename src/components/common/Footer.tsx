'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');

  const companyLinks = [
    { label: 'Home', href: '/' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const jobCategories = [
    { label: 'Accounting & Finance', href: '/jobs?category=accounting-finance-jobs' },
    { label: 'IT Jobs', href: '/jobs?category=it-jobs' },
    { label: 'Sales Jobs', href: '/jobs?category=sales-jobs' },
    { label: 'HR & Recruitmen', href: '/jobs?category=hr-jobs' },
    { label: 'Part Time', href: '/jobs?category=part-time-jobs' }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe email:', email);
    setEmail('');
  };

  return (
    <footer className={`w-full bg-black ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[72px]">
        <div className="py-12 sm:py-[52px]">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-[76px]">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 sm:gap-[10px] mb-8 lg:mb-[38px]">
                <Image
                  src="/images/img_check_1_1.svg"
                  alt="Job Portal Logo"
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
                <h2 className="text-lg sm:text-xl lg:text-[20px] font-inter font-semibold leading-5 sm:leading-6 text-white">
                  Job Portal
                </h2>
              </Link>
              <p className="text-base sm:text-lg lg:text-[14px] font-lexend font-semibold leading-6 sm:leading-7 lg:leading-8 text-[#ffffffcc] max-w-sm">
                We make job searching easier by bringing you closer to the opportunities that truly match your skills and goals.
              </p>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl lg:text-[20px] font-inter font-semibold leading-5 sm:leading-6 text-white mb-4 lg:mb-[14px]">
                Company
              </h3>
              <nav className="space-y-1 lg:space-y-1">
                {companyLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-4 sm:leading-5 text-white hover:text-[#ffffffcc] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Job Categories */}
            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl lg:text-[20px] font-inter font-semibold leading-5 sm:leading-6 text-white mb-4 lg:mb-[14px]">
                Job Categories
              </h3>
              <nav className="space-y-1 lg:space-y-1">
                {jobCategories.map((category) => (
                  <Link
                    key={category.label}
                    href={category.href}
                    className="block text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-4 sm:leading-5 text-white hover:text-[#ffffffcc] transition-colors duration-200"
                  >
                    {category.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl lg:text-[20px] font-inter font-semibold leading-5 sm:leading-6 text-white mb-3 lg:mb-[12px]">
                Newsletter
              </h3>
              <p className="text-xs sm:text-sm lg:text-[14px] font-inter font-normal leading-3 sm:leading-4 text-[#ffffffcc] mb-4 lg:mb-[12px]">
                Subscribe to stay updated with the latest job opportunities and career tips.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3 lg:space-y-[12px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-4 sm:px-5 lg:px-[20px] py-3 sm:py-3.5 lg:py-[14px] text-xs sm:text-sm lg:text-[14px] font-inter font-normal leading-3 sm:leading-4 text-[#ffffff99] placeholder:text-[#ffffff99] bg-transparent border border-[#ffffff99] rounded-lg sm:rounded-xl focus:outline-none focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-20 transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 lg:px-[34px] py-3 sm:py-3.5 lg:py-[12px] text-sm sm:text-base lg:text-[16px] font-inter font-bold leading-4 sm:leading-5 text-white bg-[#309689] hover:bg-[#267a6f] rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Subscribe now
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 lg:pt-0 border-t border-[#ffffff1a] sm:border-t-0">
            <p className="text-xs sm:text-sm lg:text-[14px] font-inter font-normal leading-3 sm:leading-4 text-footer-1 mb-4 sm:mb-0">
              © Copyright Job Portal {new Date().getFullYear()}
            </p>        
            <div className="flex items-center gap-4 sm:gap-5 lg:gap-[20px]">
              <Link
                href="/privacy"
                className="text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-4 sm:leading-5 text-white hover:text-[#ffffffcc] underline transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-4 sm:leading-5 text-white hover:text-[#ffffffcc] underline transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;