import React from 'react'
import Card from '../jobs/Card';
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

const RecentJobs = () => {

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
    }]

  return (
    <div className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-semibold mb-3">
            Recent Jobs Available
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto sm:mx-0">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
          </p>
        </div>
        <div className="space-y-6 lg:space-y-[24px] mb-8 lg:mb-[40px]">
            {jobs?.map((job) => (
                <Card key={job?.id} job={job}/>
            ))}
        </div>
    </div>
  )
}

export default RecentJobs