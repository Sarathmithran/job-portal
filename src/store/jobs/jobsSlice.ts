import { createSlice } from "@reduxjs/toolkit";
import type { Job } from "@/types/job";
import { getJobs, getRecentJobs } from "./jobsThunk";

interface JobsState {
  jobs: Job[];
  recentJobs: Job[];
  total: number;
  page: number;
  loading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  jobs: [],
  recentJobs: [],
  total: 0,
  page: 1,
  loading: true,
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecentJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRecentJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.recentJobs = action.payload;
      })
      .addCase(getRecentJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(getJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload.jobs;
        state.total = action.payload.total;
        state.page = action.payload.page;
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default jobsSlice.reducer;