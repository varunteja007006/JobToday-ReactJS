import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addThemeToLocalStorage,
  getThemeFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  theme: getThemeFromLocalStorage(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      addThemeToLocalStorage(state.theme);
      if (state.theme === "dark") {
        toast.success(state.theme, { autoClose: 1000, theme: "dark" });
        return;
      }
      toast.success(state.theme, { autoClose: 2000 });
      return;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
