"use client";
import Image from "next/image";
import React, { useState } from "react";
import SeekBar from "../ui/SeekBar";
import Button from "../ui/Button";
import Dropdown from "../ui/Dropdown";
import EditText from "../ui/EditText";
import HiringBanner from "./HiringBanner";
import { useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("what"));
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState<
    string[]
  >([]);
  const [selectedDatePosted, setSelectedDatePosted] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState({ min: 0, max: 9999 });

  const locationOptions = [
    { value: "", label: "Choose city" },
    { value: "new-york", label: "New York, USA" },
    { value: "los-angeles", label: "Los Angeles, USA" },
    { value: "texas", label: "Texas, USA" },
    { value: "florida", label: "Florida, USA" },
    { value: "boston", label: "Boston, USA" },
  ];

  const categories = [
    { name: "Commerce", count: 10 },
    { name: "Telecomunications", count: 10 },
    { name: "Hotels & Tourism", count: 10 },
    { name: "Education", count: 10 },
    { name: "Financial Services", count: 10 },
  ];
  const jobTypes = [
    { name: "Full Time", count: 10 },
    { name: "Part Time", count: 10 },
    { name: "Freelance", count: 10 },
    { name: "Seasonal", count: 10 },
    { name: "Fixed-Price", count: 10 },
  ];
  const experienceLevels = [
    { name: "No-experience", count: 10 },
    { name: "Fresher", count: 10 },
    { name: "Intermediate", count: 10 },
    { name: "Expert", count: 10 },
  ];
  const datePostedOptions = [
    { name: "All", count: 10 },
    { name: "Last Hour", count: 10 },
    { name: "Last 24 Hours", count: 10 },
    { name: "Last 7 Days", count: 10 },
    { name: "Last 30 Days", count: 10 },
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  const handleJobTypeChange = (jobType: string) => {
    setSelectedJobTypes((prev) =>
      prev.includes(jobType)
        ? prev.filter((jt) => jt !== jobType)
        : [...prev, jobType]
    );
  };
  const handleExperienceLevelChange = (level: string) => {
    setSelectedExperienceLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };
  const handleDatePostedChange = (date: string) => {
    setSelectedDatePosted((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  };
  const handleSalaryRangeChange = (min: number, max: number) => {
    setSalaryRange({ min, max });
  };

  const tags = [
    "engineering",
    "design",
    "ui/ux",
    "marketing",
    "management",
    "soft",
    "construction",
  ];

  return (
    <aside className="w-full lg:w-[24%]">
      <div className="bg-[#ebf5f4] rounded-lg sm:rounded-xl lg:rounded-[20px] p-6 sm:p-8 lg:p-[34px] mb-6 lg:mb-[24px]">
        {/* Search by Job Title */}
        <div className="mb-6 lg:mb-[18px]">
          <h3 className="text-lg sm:text-xl lg:text-[20px] font-figtree font-semibold leading-5 sm:leading-6 text-black mb-3 lg:mb-[10px]">
            Search by Job Title
          </h3>
          <EditText
            placeholder="Job title or company"
            value={searchQuery ?? ""}
            onChange={setSearchQuery}
            leftIcon="/images/img_search_gray_600.svg"
            className="w-full"
          />
        </div>
        {/* Location */}
        <div className="mb-6 lg:mb-[18px]">
          <h3 className="text-lg sm:text-xl lg:text-[20px] font-figtree font-semibold leading-5 sm:leading-6 text-black mb-3 lg:mb-[12px]">
            Location
          </h3>
          <Dropdown
            options={locationOptions}
            placeholder="Choose city"
            value={selectedLocation}
            onChange={setSelectedLocation}
            rightIcon={
              <Image
                src="/images/img_arrowdown.svg"
                alt="Arrow down"
                width={20}
                height={20}
              />
            }
          />
        </div>
        {/* Category */}
        <div className="mb-6 lg:mb-[18px]">
          <h3 className="text-lg sm:text-xl lg:text-[20px] font-figtree font-semibold leading-5 sm:leading-6 text-black mb-3 lg:mb-[8px]">
            Category
          </h3>
          <div className="space-y-2 lg:space-y-[8px] mb-4 lg:mb-[18px]">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center justify-between"
              >
                <label className="flex items-center gap-2 lg:gap-[8px] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.name)}
                    onChange={() => handleCategoryChange(category.name)}
                    className="w-4 h-4 border border-[#6c757d] rounded"
                  />
                  <span className="text-sm sm:text-base lg:text-[16px] font-figtree font-normal leading-4 sm:leading-5 text-black">
                    {category.name}
                  </span>
                </label>
                <span className="px-2 lg:px-[8px] text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-4 sm:leading-5 text-[#6c757d] bg-white rounded-lg">
                  {category.count}
                </span>
              </div>
            ))}
          </div>
          <Button className="w-full px-6 sm:px-8 lg:px-[34px] py-2 sm:py-2.5 lg:py-[8px] text-sm sm:text-base lg:text-[16px] font-figtree font-semibold text-white bg-[#309589] hover:bg-[#267a6f] rounded-lg">
            Show More
          </Button>
        </div>
        {/* Job Type */}
        <div className="mb-6 lg:mb-[18px]">
          <h3 className="text-lg sm:text-xl lg:text-[20px] font-figtree font-semibold leading-5 sm:leading-6 text-black mb-3 lg:mb-[8px]">
            Job Type
          </h3>
          <div className="space-y-2 lg:space-y-[8px]">
            {jobTypes.map((jobType) => (
              <div
                key={jobType.name}
                className="flex items-center justify-between"
              >
                <label className="flex items-center gap-2 lg:gap-[8px] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedJobTypes.includes(jobType.name)}
                    onChange={() => handleJobTypeChange(jobType.name)}
                    className="w-4 h-4 border border-[#6c757d] rounded"
                  />
                  <span className="text-sm sm:text-base lg:text-[16px] font-figtree font-normal leading-4 sm:leading-5 text-black">
                    {jobType.name}
                  </span>
                </label>
                <span className="px-2 lg:px-[8px] text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-4 sm:leading-5 text-[#6c757d] bg-white rounded-lg">
                  {jobType.count}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Experience Level */}
        <div className="mb-6 lg:mb-[16px]">
          <h3 className="text-lg sm:text-xl lg:text-[20px] font-figtree font-semibold leading-5 sm:leading-6 text-black mb-3 lg:mb-[10px]">
            Experience Level
          </h3>
          <div className="space-y-2 lg:space-y-[8px]">
            {experienceLevels.map((level) => (
              <div
                key={level.name}
                className="flex items-center justify-between"
              >
                <label className="flex items-center gap-2 lg:gap-[8px] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedExperienceLevels.includes(level.name)}
                    onChange={() => handleExperienceLevelChange(level.name)}
                    className="w-4 h-4 border border-[#6c757d] rounded"
                  />
                  <span className="text-sm sm:text-base lg:text-[16px] font-figtree font-normal leading-4 sm:leading-5 text-black">
                    {level.name}
                  </span>
                </label>
                <span className="px-2 lg:px-[8px] text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-4 sm:leading-5 text-[#6c757d] bg-white rounded-lg">
                  {level.count}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Date Posted */}
        <div className="mb-6 lg:mb-[16px]">
          <h3 className="text-lg sm:text-xl lg:text-[20px] font-figtree font-semibold leading-5 sm:leading-6 text-black mb-3 lg:mb-[10px]">
            Date Posted
          </h3>
          <div className="space-y-1 lg:space-y-[6px]">
            {datePostedOptions.map((option) => (
              <div
                key={option.name}
                className="flex items-center justify-between"
              >
                <label className="flex items-center gap-2 lg:gap-[8px] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedDatePosted.includes(option.name)}
                    onChange={() => handleDatePostedChange(option.name)}
                    className="w-4 h-4 border border-[#6c757d] rounded"
                  />
                  <span className="text-sm sm:text-base lg:text-[16px] font-figtree font-normal leading-4 sm:leading-5 text-black">
                    {option.name}
                  </span>
                </label>
                <span className="px-2 lg:px-[8px] text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-4 sm:leading-5 text-[#6c757d] bg-white rounded-lg">
                  {option.count}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Salary Range */}
        <div className="mb-6 lg:mb-[24px]">
          <h3 className="text-lg sm:text-xl lg:text-[20px] font-figtree font-semibold leading-5 sm:leading-6 text-black mb-3 lg:mb-[10px]">
            Salary
          </h3>
          <SeekBar
            min={0}
            max={9999}
            dual={true}
            minValue={salaryRange.min}
            maxValue={salaryRange.max}
            onRangeChange={handleSalaryRangeChange}
            className="mb-4 lg:mb-[20px]"
          />
          <div className="flex items-center justify-between">
            <span className="text-sm sm:text-base lg:text-[16px] font-figtree font-semibold leading-4 sm:leading-5 text-black">
              Salary: ${salaryRange.min} - ${salaryRange.max}
            </span>
            <button className="px-3 sm:px-4 lg:px-[16px] py-1 lg:py-[2px] text-xs sm:text-sm lg:text-[14px] font-figtree font-semibold leading-3 sm:leading-4 text-white bg-[#309689] hover:bg-[#267a6f] rounded transition-all duration-200">
              Apply
            </button>
          </div>
        </div>
        {/* Tags */}
        <div>
          <h3 className="text-lg sm:text-xl lg:text-[20px] font-figtree font-semibold leading-5 sm:leading-6 text-black mb-3 lg:mb-[10px]">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-[12px]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 sm:px-3 lg:px-[8px] py-1 lg:py-[3px] text-xs sm:text-sm lg:text-[16px] font-figtree font-normal leading-3 sm:leading-4 lg:leading-5 text-[#309689] bg-[#30968919] rounded-lg sm:rounded-xl cursor-pointer hover:bg-[#30968930] transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Hiring Banner */}
      <HiringBanner />
    </aside>
  );
};

export default Filter;