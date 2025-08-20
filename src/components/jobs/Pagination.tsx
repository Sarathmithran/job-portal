import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const Pagination = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-[24px]">
        <Button className="px-4 sm:px-5 lg:px-[16px] py-2 sm:py-2.5 lg:py-[6px] text-lg sm:text-xl lg:text-[20px] font-figtree font-semibold text-white bg-[#309689] rounded-lg">
          1
        </Button>
        <Button className="px-3 sm:px-4 lg:px-[14px] py-2 sm:py-2.5 lg:py-[6px] text-lg sm:text-xl lg:text-[20px] font-figtree font-semibold text-[#6c757d] bg-transparent border-2 border-[#6c757d] rounded-lg hover:bg-[#6c757d] hover:text-white transition-all duration-200">
          2
        </Button>
      </div>
      <Button className="flex items-center gap-2 lg:gap-[4px] px-4 sm:px-5 lg:px-[16px] py-2 sm:py-2.5 lg:py-[6px] text-lg sm:text-xl lg:text-[20px] font-figtree font-medium text-[#6c757d] bg-transparent border-2 border-[#6c757d] rounded-lg hover:bg-[#6c757d] hover:text-white transition-all duration-200">
        Next
        <Image
          src="/images/img_arrowright.svg"
          alt="Arrow right"
          width={24}
          height={24}
          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px]"
        />
      </Button>
    </div>
  );
};

export default Pagination;
