'use client'
import React, { useEffect } from 'react'
import Card from '../jobs/Card';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { RootState } from '@/store/store';
import { getRecentJobs } from '@/store/jobs/jobsThunk';
import CardSkeleton from '../skeletons/CardSkelton';

const RecentJobs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recentJobs, loading } = useSelector((state: RootState) => state.jobs);

  useEffect(() => {
    dispatch(getRecentJobs());
  }, [dispatch]);

  return (
    <div className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-semibold mb-3">
            Recent Jobs Available
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto sm:mx-0">
            Find your next career move from the most recent listings
          </p>
        </div>
        <div className="space-y-6 lg:space-y-[24px] mb-8 lg:mb-[40px]">
            {loading ? <CardSkeleton /> : recentJobs.map((job) => (
                <Card key={job?.id} job={job} type="recent" />
            ))}        
        </div>
    </div>
  )
}

export default RecentJobs