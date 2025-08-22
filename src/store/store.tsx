"use client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import jobsReducer from './jobs/jobsSlice'

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}