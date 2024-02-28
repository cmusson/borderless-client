import { configureStore } from "@reduxjs/toolkit";
import candidatesSlice from "./candidatesSlice";

export const store = configureStore({
  reducer: {
    candidates: candidatesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
