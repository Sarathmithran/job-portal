import axiosInstance from "@/services/api";

export const fetchRecentJobs = () =>
  axiosInstance.get(`/in/search/1`, {
    params: { results_per_page: 5 },
  });