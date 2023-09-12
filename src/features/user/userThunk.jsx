import customFetch from "../../utils/axios";
import { clearAllJobsState } from "../alljobs/alljobsSlice";
import { clearValues } from "../job/jobSlice";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.response?.data?.msg);
  }
};

export const clearStoreThunk = async (_, thunkAPI) => {
  try {
    // logout user
    thunkAPI.dispatch(logoutUser());
    // clear jobs value
    thunkAPI.dispatch(clearAllJobsState());
    // clear job input values
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
