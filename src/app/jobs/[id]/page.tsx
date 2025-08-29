"use client"
import CommonHeader from '@/components/common/CommonHeader';
import { RootState } from '@/store/store';
import { Job } from '@/types/job';
import { extractResponsibilities } from '@/utils/parseDescription';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';

const JobDetailsPage: React.FC = () => {
    const { jobs, recentJobs } = useSelector((state: RootState) => state.jobs);
    const { id } = useParams();
    const job: Job | undefined =  jobs.find((j) => j.id === id) || recentJobs.find((j) => j.id === id);

    const responsibilities = extractResponsibilities(job?.description);

  return (
    <div className="min-h-screen bg-gray-50">
        <CommonHeader title='Job Details'/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Job Description</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {job?.description}
                </p>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {responsibilities?.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-full h-48 rounded-lg overflow-hidden">
                    <iframe
                    src={`https://www.google.com/maps?q=${job?.latitude},${job?.longitude}&hl=es;z=14&output=embed`}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen
                    ></iframe>
                </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Job Overview */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Image src="/images/user.svg" width={16} height={16} alt="Job Title" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Job Title</p>
                    <p className="font-medium text-gray-900 capitalize">{job?.title}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Image src="/images/expertise.svg" width={16} height={16} alt="Job type" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Job Type</p>
                    <p className="font-medium text-gray-900 capitalize">{job?.contract_type || "Not specified"}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Image src="/images/img_briefcase_2_2_teal_400_01.svg" width={16} height={16} alt="Category" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium text-gray-900 capitalize">{job?.category?.label}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Image src="/images/img_clip_path_group_black_900.svg" width={16} height={16} alt="Salary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Offered Salary</p>
                    <p className="font-medium text-gray-900 capitalize">
                        {job?.salary_min && job?.salary_max
                        ? `$${job.salary_min.toLocaleString()} - $${job.salary_max.toLocaleString()}`
                        : job?.salary_min
                        ? `From $${job.salary_min.toLocaleString()}`
                        : job?.salary_max
                        ? `Up to $${job.salary_max.toLocaleString()}`
                        : "Not disclosed"}
                        {job?.salary_is_predicted === "1" && " (Estimated)"}
                    </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Image src="/images/img_clock.svg" width={16} height={16} alt="Posted on" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Posted On</p>
                    <p className="font-medium text-gray-900 capitalize">{job?.timeAgo}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Image src="/images/img_map_pin_teal_400_01.svg" width={16} height={16} alt="location" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900 capitalize">{job?.location?.display_name}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                  <Link href={`/jobs?category=${job?.category?.tag}`} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                    {job?.category?.tag}
                  </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    Interested in this role?
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                    You can view the full details and apply directly on the employer&apos;s site.
                </p>
                {job?.redirect_url && (
                    <a
                    href={job.redirect_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center inline-block bg-[#309589] hover:bg-[#267a6f] text-white font-medium py-2 px-4 rounded-lg transition"
                    >
                    View Original Job Post
                    </a>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;