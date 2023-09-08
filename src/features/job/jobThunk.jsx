import customFetch from "../../utils/axios";
import { getAllJobs, hideLoading, showLoading } from "../alljobs/alljobsSlice";
import { logoutUser } from "../user/userSlice";
import { clearValues } from "./jobSlice";

const authHeader = (thunkAPI) => {
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
    },
  };
};

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post("/jobs", job, authHeader(thunkAPI));
    thunkAPI.dispatch(clearValues());
    return resp.data.msg;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("unauthorized");
    }
    return thunkAPI.rejectWithValue(error?.response?.data?.msg);
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(`/jobs/${jobId}`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(getAllJobs());
    return resp.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editJobThunk = // async ({ jobId, job }, thunkAPI) => {
  async (_, thunkAPI) => {
    try {
      // const resp = await customFetch.patch(`/jobs/${jobId}`, job, {
      const resp = await customFetch.patch(
        `/jobs/${thunkAPI.getState().job.editJobId}`,
        thunkAPI.getState().job,
        {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          },
        }
      );
      thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  };
