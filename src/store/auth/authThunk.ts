import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../services/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }: { name: string; email: string; password: string }, thunkAPI) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res?.user, { displayName: name });
      const user = res.user;
      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };
    } catch (err: unknown) {
      let message = "An error occurred";
      if (err instanceof Error) {
        message = err.message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };
    } catch (err: unknown) {
      let message = "An error occurred";
      if (err instanceof Error) {
        message = err.message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
  return null;
});