import axiosInstance from "@/services/api";

export const fetchRecentJobs = () =>
  axiosInstance.get(`/search/1`, {
    params: { results_per_page: 5 },
});

export const fetchJobs = (params: {
  country?: string;
  page?: number;
  what?: string;
  where?: string;
  category?: string;
  salary_min?: number;
  full_time?: boolean;
}) =>
  axiosInstance.get(`/search/${params.page || 1}`, {
    params: {
      results_per_page: 10,
      what: params.what,
      where: params.where,
      category: params.category,
      salary_min: params.salary_min,
      full_time: params.full_time ? 1 : undefined,
      sort_by: "date",
    },
  });