'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Dropdown from '@/components/ui/Dropdown';
import CommonHeader from '@/components/common/CommonHeader';
import Filter from '@/components/jobs/Filter';
import Card from '@/components/jobs/Card';
import { TopCompany } from '@/components/jobs/TopCompany';
import Pagination from '@/components/jobs/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { getJobs } from '@/store/jobs/jobsThunk';
import { useQueryParams } from '@/utils/useQueryParams';

const Jobs: React.FC = () => {
  const { getParam, setParam, searchParams } = useQueryParams();
  const dispatch = useDispatch<AppDispatch>();
  const { jobs, total, page, loading } = useSelector((state: RootState) => state.jobs);

  // get current value
  const sort = getParam("sort_by") || "date";

  useEffect(() => {
    const filters = {
      what: getParam("what") || undefined,
      where: getParam("where") || undefined,
      category: getParam("category") || undefined,
      salary_min: getParam("salary_min")
        ? Number(getParam("salary_min")!)
        : undefined,
      full_time: getParam("full_time") === "1",
      permanent: getParam("permanent") === "1",
      sort_by: sort, // using helper instead of raw searchParams
      page: Number(getParam("page")) || 1,
    };

    dispatch(getJobs(filters));
  }, [searchParams, dispatch]);
  
  // Calculate showing text
  const itemsPerPage = 10; 
  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, total);
  
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
                {loading ? 'Loading...' : `Showing ${startItem}-${endItem} of ${total} results`}
              </p>
              <div className="w-full sm:w-auto min-w-[200px]">
                <Dropdown
                value={sort}
                onChange={(val) => setParam("sort_by", val)}
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
            <Pagination 
              currentPage={page} 
              totalItems={total} 
              itemsPerPage={itemsPerPage} 
            />
          </div>
        </div>
      </main>
      <TopCompany />
    </div>
  );
};
export default Jobs;