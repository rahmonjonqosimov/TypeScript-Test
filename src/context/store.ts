import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterState";
import { apiSlice } from "./api/api";

export const store = configureStore({
  reducer: {
    // bu yerda sizning reduksiyalaringiz joylashadi
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// TypeScript uchun turlari
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
