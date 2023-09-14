import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import jobSlice from "./features/job/jobSlice";
import alljobsSlice from "./features/alljobs/alljobsSlice";
import themeSlice from "./features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    alljobs: alljobsSlice,
    theme: themeSlice,
  },
});
