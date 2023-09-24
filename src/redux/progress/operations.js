import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    setProgressReq,
    getCurrentProgressReq
} from "../../api/progress.js";


export const setProgress = createAsyncThunk(
    "progress/set",
    async (data) => {

        const response = await setProgressReq(data);
        return response.data
    }
);


export const currentProgress = createAsyncThunk(
    "progress/get-current",
    async () => {

        const response = await getCurrentProgressReq();
        return response.data
    }
);


