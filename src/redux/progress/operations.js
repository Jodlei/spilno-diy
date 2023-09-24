import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    setProgressReq
} from "../../api/progress.js";


export const setProgress = createAsyncThunk(
    "progress/set",
    async (data) => {

        const response = await setProgressReq(data);
        return response.data
    }
);
