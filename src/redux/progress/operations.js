import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  setProgressReq,
  getCurrentProgressReq,
  getDayOfWeekProgressReq,
} from "../../api/progress.js";
// import { getToken } from "../progress/selectors";

export const setProgress = createAsyncThunk("progress/set", async (data) => {
  const response = await setProgressReq(data);
  return response.data;
});

export const currentProgress = createAsyncThunk(
  "progress/get-current",
  async (_, thunkApi) => {
    // const { getState } = thunkApi;

    // const token = getToken(getState());

    const response = await getCurrentProgressReq();
    return response.data;
  }
);

export const dayOfWeekProgress = createAsyncThunk(
  "progress/get-day-of-week",
  async () => {
    const response = await getDayOfWeekProgressReq();
    return response.data;
  }
);
