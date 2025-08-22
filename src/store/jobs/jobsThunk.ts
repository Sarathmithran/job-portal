import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRecentJobs } from "./api";
import { mapApiJobToJob } from "./mapper";

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