import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  category: string;
  type: string;
  salary: string;
  location: string;
  timeAgo: string;
}

const Card = ({ job }: { job: Job }) => {
  return (
    <div
      key={job.id}
      className="bg-white rounded-lg sm:rounded-xl lg:rounded-[20px] p-6 sm:p-8 lg:p-[38px] shadow-[0px_3px_8px_#30968914] hover:shadow-[0px_6px_16px_#30968920] transition-all duration-300"
    >
      {/* Job Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 lg:mb-[16px]">
        <div className="flex items-center gap-4 lg:gap-[20px] flex-1">
          <Image
            src={job.logo}
            alt={`${job.company} logo`}
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[40px] lg:h-[40px] object-contain flex-shrink-0"
          />
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-figtree font-semibold leading-6 sm:leading-7 lg:leading-[34px] text-black mb-1 lg:mb-[2px]">
              {job.title}
            </h3>
            <p className="text-sm sm:text-base lg:text-[16px] font-figtree font-normal leading-4 sm:leading-5 text-black">
              {job.company}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="px-2 sm:px-3 lg:px-[8px] py-1 lg:py-[2px] text-xs sm:text-sm lg:text-[16px] font-figtree font-normal leading-3 sm:leading-4 lg:leading-5 text-[#309689] bg-[#30968919] rounded-lg">
            {job.timeAgo}
          </span>
          <Image
            src="/images/img_clip_path_group.svg"
            alt="Bookmark"
            width={24}
            height={24}
            className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px] cursor-pointer hover:opacity-70 transition-opacity duration-200"
          />
        </div>
      </div>
      {/* Job Details */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3 lg:gap-[12px]">
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-[12px]">
            <Image
              src="/images/img_briefcase_2_2_teal_400_01.svg"
              alt="Category"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px]"
            />
            <span className="text-sm sm:text-base lg:text-[16px] font-figtree font-semibold leading-4 sm:leading-5 text-[#6c757d]">
              {job.category}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-[12px]">
            <Image
              src="/images/img_clock.svg"
              alt="Job type"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px]"
            />
            <span className="text-sm sm:text-base lg:text-[16px] font-figtree font-semibold leading-4 sm:leading-5 text-[#6c757d]">
              {job.type}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-[12px]">
            <Image
              src="/images/img_clip_path_group_black_900.svg"
              alt="Salary"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px]"
            />
            <span className="text-sm sm:text-base lg:text-[16px] font-figtree font-semibold leading-4 sm:leading-5 text-[#6c757d]">
              {job.salary}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-[12px]">
            <Image
              src="/images/img_map_pin_teal_400_01.svg"
              alt="Location"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px]"
            />
            <span className="text-sm sm:text-base lg:text-[16px] font-figtree font-semibold leading-4 sm:leading-5 text-[#6c757d]">
              {job.location}
            </span>
          </div>
        </div>
        <Button className="px-4 sm:px-5 lg:px-[20px] py-2 sm:py-2.5 lg:py-[8px] text-sm sm:text-base lg:text-[16px] font-figtree font-semibold text-white bg-[#309589] hover:bg-[#267a6f] rounded-lg transition-all duration-200">
          Job Details
        </Button>
      </div>
    </div>
  );
};

export default Card;