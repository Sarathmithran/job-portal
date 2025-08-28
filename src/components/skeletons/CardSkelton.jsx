import React from "react";

const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-[20px] p-6 sm:p-8 lg:p-[38px] shadow-[0px_3px_8px_#30968914] animate-pulse">
      {/* Job Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 lg:mb-[16px]">
        <div className="flex items-center gap-4 lg:gap-[20px] flex-1">
          {/* Company Logo Skeleton */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[40px] lg:h-[40px] bg-gray-300 rounded-lg flex-shrink-0"></div>
          
          <div className="flex-1">
            {/* Job Title Skeleton */}
            <div className="h-6 sm:h-7 lg:h-[34px] bg-gray-300 rounded-md mb-1 lg:mb-[2px] w-3/4"></div>
            {/* Company Name Skeleton */}
            <div className="h-4 sm:h-5 bg-gray-300 rounded-md w-1/2"></div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Time Badge Skeleton */}
          <div className="px-2 sm:px-3 lg:px-[8px] py-1 lg:py-[2px] bg-gray-200 rounded-lg">
            <div className="h-3 sm:h-4 lg:h-5 w-12 bg-gray-300 rounded"></div>
          </div>
          {/* Bookmark Icon Skeleton */}
          <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px] bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Job Details */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3 lg:gap-[12px]">
          {/* Category Skeleton */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-[12px]">
            <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px] bg-gray-300 rounded"></div>
            <div className="h-4 sm:h-5 w-16 bg-gray-300 rounded"></div>
          </div>

          {/* Job Type Skeleton */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-[12px]">
            <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px] bg-gray-300 rounded"></div>
            <div className="h-4 sm:h-5 w-20 bg-gray-300 rounded"></div>
          </div>

          {/* Salary Skeleton */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-[12px]">
            <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px] bg-gray-300 rounded"></div>
            <div className="h-4 sm:h-5 w-24 bg-gray-300 rounded"></div>
          </div>

          {/* Location Skeleton */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-[12px]">
            <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px] bg-gray-300 rounded"></div>
            <div className="h-4 sm:h-5 w-20 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="px-4 sm:px-5 lg:px-[20px] py-2 sm:py-2.5 lg:py-[8px] bg-gray-300 rounded-lg">
          <div className="h-4 sm:h-5 lg:h-[16px] w-20 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;