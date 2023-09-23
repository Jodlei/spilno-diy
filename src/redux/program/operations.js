import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getDetailProgram,
    getPrograms
} from "../../api/programs.js";


export const programs = createAsyncThunk(
    "program/getPrograms",
    async () => {

        const response = await getPrograms();
        return response.data
    }
);

export const detailProgram = createAsyncThunk(
    "program/getDetailProgram",
    async ( id) => {

        const response = await getDetailProgram(id);
        return response.data
    }
);
