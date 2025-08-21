'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Dropdown from '@/components/ui/Dropdown';
import CommonHeader from '@/components/common/CommonHeader';
import Filter from '@/components/jobs/Filter';
import Card from '@/components/jobs/Card';
import { TopCompany } from '@/components/jobs/TopCompany';
import Pagination from '@/components/jobs/Pagination';
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

const Jobs: React.FC = () => {
  const [sortBy, setSortBy] = useState('latest');
  
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Forward Security Director',
      company: 'Bauch, Schuppe and Schulist Co',
      logo: '/images/img_logo_40x40.png',
      category: 'Hotels & Tourism',
      type: 'Full time',
      salary: '$40000-$42000',
      location: 'New-York, USA',
      timeAgo: '10 min ago'
    },
    {
      id: '2',
      title: 'Regional Creative Facilitator',
      company: 'Wisozk - Becker Co',
      logo: '/images/img_logo_1.png',
      category: 'Media',
      type: 'Part time',
      salary: '$28000-$32000',
      location: 'Los- Angeles, USA',
      timeAgo: '12 min ago'
    },
    {
      id: '3',
      title: 'Internal Integration Planner',
      company: 'Mraz, Quigley and Feest Inc.',
      logo: '/images/img_logo_2.png',
      category: 'Construction',
      type: 'Full time',
      salary: '$48000-$50000',
      location: 'Texas, USA',
      timeAgo: '15 min ago'
    },
    {
      id: '4',
      title: 'District Intranet Director',
      company: 'VonRueden - Weber Co',
      logo: '/images/img_logo_3.png',
      category: 'Commerce',
      type: 'Full time',
      salary: '$42000-$48000',
      location: 'Florida, USA',
      timeAgo: '24 min ago'
    },
    {
      id: '5',
      title: 'Corporate Tactics Facilitator',
      company: 'Cormier, Turner and Flatley Inc',
      logo: '/images/img_logo_4.png',
      category: 'Commerce',
      type: 'Full time',
      salary: '$38000-$40000',
      location: 'Boston, USA',
      timeAgo: '26 min ago'
    },
    {
      id: '6',
      title: 'Forward Accounts Consultant',
      company: 'Miller Group',
      logo: '/images/img_logo_5.png',
      category: 'Financial services',
      type: 'Full time',
      salary: '$45000-$48000',
      location: 'Boston, USA',
      timeAgo: '30 min ago'
    }
  ];

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
            <div className="space-y-6 lg:space-y-[24px] mb-8 lg:mb-[40px]">
              {jobs.map((job) => (
                <Card key={job?.id} job={job}/>
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </main>
      <TopCompany />
    </div>
  );
};
export default Jobs;