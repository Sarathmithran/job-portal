import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchJobs, fetchRecentJobs } from "./api";
import { mapApiJobToJob } from "./mapper";
import { Job } from "@/types/job";

// Fetch recent jobs
export const getRecentJobs = createAsyncThunk(
  "jobs/fetchRecent",
  async (_, thunkAPI) => {
    try {
      const response = await fetchRecentJobs();
      return response.data.results.map(mapApiJobToJob); 
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null && "response" in error) {
        // @ts-expect-error: error might have response property
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const getJobs = createAsyncThunk(
  "jobs/fetchWithFilters",
  async (
    filters: {
      what?: string;
      where?: string;
      category?: string;
      salary_min?: number;
      full_time?: boolean;
      page?: number;
    },
    thunkAPI
  ) => {
    try {
      const response = await fetchJobs(filters);
      return {
        jobs: response.data.results.map(mapApiJobToJob) as Job[],
        total: response.data.count, // total jobs available
        page: filters.page || 1,   // current page
      };
    } catch (err: unknown) {
      if (typeof err === "object" && err !== null && "message" in err) {
        return thunkAPI.rejectWithValue((err as { message?: string }).message ?? "Unknown error");
      }
      return thunkAPI.rejectWithValue(String(err));
    }
  }
);