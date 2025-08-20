import Image from "next/image";
import React from "react";

const HiringBanner = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[460px] rounded-lg sm:rounded-xl overflow-hidden">
      <Image
        src="/images/img_img.png"
        alt="We are hiring"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 sm:px-8 lg:px-[28px]">
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-figtree font-bold leading-tight sm:leading-snug lg:leading-[39px] text-white uppercase mb-2 sm:mb-3 lg:mb-[4px]">
          We are hiring
        </h2>
        <p className="text-lg sm:text-xl lg:text-[24px] font-figtree font-medium leading-6 sm:leading-7 lg:leading-[29px] text-white">
          Apply Today!
        </p>
      </div>
    </div>
  );
};

export default HiringBanner;
