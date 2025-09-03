"use client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import jobsReducer from './jobs/jobsSlice';
import authReducer from './auth/authSlice'

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}