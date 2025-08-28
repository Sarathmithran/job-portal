import Image from "next/image";
import React from "react";
interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  openJobs: string;
}

export const TopCompany = () => {
  const companies: Company[] = [
    {
      id: "1",
      name: "Instagram",
      logo: "/images/img_icon.svg",
      description:
        "Connecting the world through creativity and community.",
      openJobs: "8 open jobs",
    },
    {
      id: "2",
      name: "Tesla",
      logo: "/images/img_icon_bg_white_a700.svg",
      description:
        "Accelerating the world’s transition to sustainable energy.",
      openJobs: "18 open jobs",
    },
    {
      id: "3",
      name: "McDonald's",
      logo: "/images/img_icon_white_a700.svg",
      description:
        "Leading the quick-service restaurant industry with innovation and taste.",
      openJobs: "12 open jobs",
    },
    {
      id: "4",
      name: "Apple",
      logo: "/images/img_icon_white_a700_60x60.svg",
      description:
        "Innovating technology that shapes the world — from iPhone to Mac.",
      openJobs: "9 open jobs",
    },
  ];

  return (
    <section className="w-full bg-[#ebf5f4] py-12 sm:py-16 lg:py-[48px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[72px]">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-[52px]">
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-figtree font-bold leading-tight sm:leading-snug lg:leading-[61px] text-black mb-3 lg:mb-[12px]">
            Top Company
          </h2>
          <p className="text-sm sm:text-base lg:text-[16px] font-figtree font-normal leading-4 sm:leading-5 text-black max-w-2xl mx-auto">
            Discover leading employers offering great opportunities across industries.
          </p>
        </div>
        {/* Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[24px]">
          {companies?.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-lg sm:rounded-xl lg:rounded-[20px] p-6 sm:p-8 lg:p-[48px] shadow-[0px_3px_8px_#3096890c] hover:shadow-[0px_6px_16px_#30968920] transition-all duration-300 text-center"
            >
              <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-[28px]">
                <div className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-[12px]">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] bg-black rounded-lg flex items-center justify-center shadow-[0px_2px_4px_#30968926]">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px] object-contain"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-[24px] font-inter font-semibold leading-6 sm:leading-7 lg:leading-[30px] text-black">
                    {company.name}
                  </h3>
                </div>
                <p className="text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-5 sm:leading-6 lg:leading-[24px] text-[#000000cc] text-center">
                  {company.description}
                </p>
                <span className="px-3 lg:px-[12px] py-1 lg:py-[2px] text-sm sm:text-base lg:text-[16px] font-inter font-normal leading-4 sm:leading-5 text-[#309689] bg-[#30968919] rounded-lg sm:rounded-xl">
                  {company.openJobs}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};