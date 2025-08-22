"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const locationOptions = [
    { value: "gb", label: "Great Britan" },
    { value: "in", label: "India" }
  ];

  const categoryOptions = [
    { value: "tech", label: "Technology" }
  ];

interface Option {
    value: string;
    label: string;
}

const handleLocationSelect = (option: Option): void => {
    setLocation(option.label);
    setIsLocationOpen(false);
};

  const handleCategorySelect = (option: Option): void => {
    setCategory(option.label);
    setIsCategoryOpen(false);
  };

  const handleSearch = () => {
    const query = new URLSearchParams({
      ...(keyword && { what: keyword }),
      ...(location && { where: location }),
      ...(category && { category }),
    });
    router.push(`/jobs?${query.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-[46px]">
      <div className="bg-white rounded-2xl shadow-lg overflow-visible">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Job Title Input */}
          <div className="flex flex-1 px-6 py-4 border-b lg:border-b-0 lg:border-r border-gray-200">
            <input
              type="text"
              placeholder="Search.."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full text-sm sm:text-base lg:text-[16px] font-medium text-[#0000007f] placeholder-[#0000007f] border-none outline-none bg-transparent"
            />
          </div>

          {/* Location Dropdown */}
          <div className="flex relative border-b lg:border-b-0 lg:border-r border-gray-200">
            <button
              onClick={() => {
                setIsLocationOpen(!isLocationOpen);
                setIsCategoryOpen(false); // Close other dropdown
              }}
              className="flex items-center justify-between w-full px-6 py-4 text-sm sm:text-base lg:text-[16px] font-medium text-[#0000007f] hover:bg-gray-50 transition-colors duration-200 min-w-[180px]"
            >
              <span>{location || "Select Location"}</span>
              <svg 
                className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                  isLocationOpen ? "rotate-180" : ""
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isLocationOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-20 mt-1">
                {locationOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleLocationSelect(option)}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="flex relative border-b lg:border-b-0 lg:border-r border-gray-200">
            <button
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen);
                setIsLocationOpen(false); // Close other dropdown
              }}
              className="flex items-center justify-between w-full px-6 py-4 text-sm sm:text-base lg:text-[16px] font-medium text-[#0000007f] hover:bg-gray-50 transition-colors duration-200 min-w-[180px]"
            >
              <span>{category || "Select Category"}</span>
              <svg 
                className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                  isCategoryOpen ? "rotate-180" : ""
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isCategoryOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-20 mt-1">
                {categoryOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleCategorySelect(option)}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Button     
            className="w-full lg:w-auto bg-[#309689] hover:bg-[#267a6f] text-white font-figtree font-semibold text-base sm:text-lg lg:text-[18px] leading-5 sm:leading-6 lg:leading-[22px] px-6 sm:px-8 lg:px-[54px] py-6 sm:py-7 lg:py-[28px] rounded-lg lg:rounded-l-none mt-4 lg:mt-0 flex items-center justify-center gap-2 lg:gap-[10px] min-h-[60px] lg:min-h-[76px]"
            onClick={handleSearch}
            >
                <Image
                src="/images/img_search.svg"
                alt="Search"
                width={16}
                height={16}
                className="w-9 h-5 pe-2"
                />
                Search Job
            </Button>
        </div>
      </div>
    </div>
  );
}