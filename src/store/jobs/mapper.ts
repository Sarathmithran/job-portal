import { Job } from "@/types/job";
import { formatTimeAgo } from "@/utils/formatTime";

export function mapApiJobToJob(apiJob: Job): Job {
  return {
    ...apiJob,
    logo: "/images/img_logo_1.png", // fallback
    timeAgo: formatTimeAgo(apiJob.created),
  };
}