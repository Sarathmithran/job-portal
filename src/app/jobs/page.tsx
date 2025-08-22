'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Dropdown from '@/components/ui/Dropdown';
import CommonHeader from '@/components/common/CommonHeader';
import Filter from '@/components/jobs/Filter';
import Card from '@/components/jobs/Card';
import { TopCompany } from '@/components/jobs/TopCompany';
import Pagination from '@/components/jobs/Pagination';

const Jobs: React.FC = () => {
  const [sortBy, setSortBy] = useState('latest');

  const sortOptions = [
    { value: 'latest', label: 'Sort by latest' },
    { value: 'oldest', label: 'Sort by oldest' },
    { value: 'salary-high', label: 'Salary: High to Low' },
    { value: 'salary-low', label: 'Salary: Low to High' }
  ];
  
  return (
    <div className="w-full bg-gray-50">
      {/* Header */}
      <CommonHeader />
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[72px] py-12 sm:py-16 lg:py-[60px]">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[16px]">
            <Filter />
          <div className="w-full lg:w-[76%]">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 lg:mb-[40px]">
              <p className="text-lg sm:text-xl lg:text-[20px] font-figtree font-medium leading-5 sm:leading-6 text-[#6c757d]">
                Showing 6-6 of 10 results
              </p>
              <div className="w-full sm:w-auto min-w-[200px]">
                <Dropdown
                  options={sortOptions}
                  value={sortBy}
                  onChange={setSortBy}
                  rightIcon={
                    <Image
                      src="/images/img_arrowdown.svg"
                      alt="Arrow down"
                      width={24}
                      height={20}
                    />
                  }
                />
              </div>
            </div>
            {/* Job Listings */}
            {/* <div className="space-y-6 lg:space-y-[24px] mb-8 lg:mb-[40px]">
              {jobs.map((job) => (
                <Card key={job?.id} job={job}/>
              ))}
            </div> */}
            <Pagination />
          </div>
        </div>
      </main>
      <TopCompany />
    </div>
  );
};
export default Jobs;