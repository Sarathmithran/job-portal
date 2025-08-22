import { createSlice } from "@reduxjs/toolkit";
import type { Job } from "@/types/job";
import { getRecentJobs } from "./jobsThunk";

interface JobsState {
  jobs: Job | null;
  recentJobs: Job | null;
  loading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  jobs: null,
  recentJobs: null,
  loading: false,
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
      });
  },
});

export default jobsSlice.reducer;