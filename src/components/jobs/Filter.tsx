"use client";
import Image from "next/image";
import React, { useState } from "react";
import Dropdown from "../ui/Dropdown";
import EditText from "../ui/EditText";
import HiringBanner from "./HiringBanner";
import { useQueryParams } from "@/utils/useQueryParams";
import Button from "../ui/Button";
import { categories } from "@/data/categories";
import { locationOptions } from "@/data/locations";

const Filter = () => {
  const { getParam, setParam } = useQueryParams();
  const [searchQuery, setSearchQuery] = useState(getParam("what"));

  // get current location & category
  const location = getParam("where") || '';
  const category = getParam("category") || '';

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
            // rightIcon="/images/img_search_gray_600.svg"
            className="w-full"
          />
          <Button
            onClick={() => setParam("what", searchQuery ?? "")}
            className="w-full mt-2 py-2 sm:py-2.5 lg:py-[8px] text-sm sm:text-base lg:text-[16px] font-figtree font-semibold leading-4 sm:leading-5 text-white bg-[#309589] hover:bg-[#267a6f] rounded-lg transition-all duration-200"
          >
            Search
          </Button>
        </div>
        {/* Location */}
        <div className="mb-6 lg:mb-[18px]">
          <h3 className="text-lg sm:text-xl lg:text-[20px] font-figtree font-semibold leading-5 sm:leading-6 text-black mb-3 lg:mb-[12px]">
            Location
          </h3>
          <Dropdown
            options={locationOptions}
            placeholder="Choose city"
            value={location}
            onChange={(val) => setParam("where", val)}
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
          <h3 className="text-lg sm:text-xl lg:text-[20px] font-figtree font-semibold leading-5 sm:leading-6 text-black mb-3 lg:mb-[12px]">
            Category
          </h3>
          <Dropdown
            options={categories}
            placeholder="Choose category"
            value={category}
            onChange={(val) => setParam("category", val)}
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
        {/* Job Type */}
        <div className="mt-6 mb-6 lg:mb-[12px]">
          <h3 className="text-lg sm:text-xl lg:text-[20px] font-figtree font-semibold leading-5 sm:leading-6 text-black mb-3 lg:mb-[8px]">
            Job Type
          </h3>
          <div className="space-y-2 lg:space-y-[8px]">
              <div
                className="flex items-center justify-between"
              >
                <label className="flex items-center gap-2 lg:gap-[8px] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={getParam("full_time") === "1"}
                    onChange={(e) =>
                      setParam("full_time", e.target.checked ? "1" : '')
                    }
                    className="w-4 h-4 border border-[#6c757d] rounded"
                  />
                  <span className="text-sm sm:text-base lg:text-[16px] font-figtree font-normal leading-4 sm:leading-5 text-black">
                    Full Time
                  </span>
                </label>
              </div>
              <div
                className="flex items-center justify-between"
              >
                <label className="flex items-center gap-2 lg:gap-[8px] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={getParam("permanent") === "1"}
                    onChange={(e) =>
                      setParam("permanent", e.target.checked ? "1" : '')
                    }
                    className="w-4 h-4 border border-[#6c757d] rounded"
                  />
                  <span className="text-sm sm:text-base lg:text-[16px] font-figtree font-normal leading-4 sm:leading-5 text-black">
                    Permanent
                  </span>
                </label>
              </div>
          </div>
        </div>
      </div>
      {/* Hiring Banner */}
      <HiringBanner />
    </aside>
  );
};

export default Filter;