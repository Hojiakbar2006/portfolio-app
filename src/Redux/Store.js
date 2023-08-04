import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reTheme } from "./DarkMode";
import { reSkils } from "./Skils";

const reducer = combineReducers({
  theme: reTheme,
  skils: reSkils,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
