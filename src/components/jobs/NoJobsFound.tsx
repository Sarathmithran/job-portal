import React from "react";
import Button from "../ui/Button";

interface NoJobsFoundProps {
  title?: string;
  message?: string;
  onClearFilters?: () => void;
}

const NoJobsFound = ({ 
  title = "No Jobs Found",
  message = "We couldn't find any jobs matching your criteria. Try adjusting your filters or search terms.",
  onClearFilters
}: NoJobsFoundProps) => {
  return (
    <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-[20px] p-6 sm:p-8 lg:p-[60px] shadow-[0px_3px_8px_#30968914] w-full">
      <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-4 sm:mb-6 lg:mb-8 bg-gray-100 rounded-full flex items-center justify-center">
          <svg 
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl lg:text-[28px] font-figtree font-semibold leading-6 sm:leading-7 lg:leading-[34px] text-black mb-2 sm:mb-3 lg:mb-4">
          {title}
        </h3>

        {/* Message */}
        <p className="text-sm sm:text-base lg:text-[16px] font-figtree font-normal leading-5 sm:leading-6 lg:leading-6 text-[#6c757d] mb-6 sm:mb-8 lg:mb-10">
          {message}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-[16px] w-full">
            <Button 
              onClick={onClearFilters}
              className="w-full sm:w-auto px-4 sm:px-5 lg:px-[24px] py-2 sm:py-2.5 lg:py-[12px] text-sm sm:text-base lg:text-[16px] font-figtree font-semibold text-[#309689] bg-transparent border-2 border-[#309689] hover:bg-[#309689] hover:text-white rounded-lg transition-all duration-200"
            >
              Clear All Filters
            </Button>
        </div>
      </div>
    </div>
  );
};

export default NoJobsFound;