import {createSlice} from "@reduxjs/toolkit";
import {programs, detailProgram} from "./operations";
import {toast} from "react-toastify";

const initialState = {
    listProgram: [],
    programDetail: {},
    isLoading: false,
    error: null,
};

export const programSlice = createSlice({
    name: "program",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(programs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(programs.fulfilled, (state, action) => {
                state.listProgram = action.payload
                state.isLoading = false;

            })
            .addCase(programs.rejected, (state, action) => {
                toast.error(action.payload);
                state.isLoading = false;
            })
            .addCase(detailProgram.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(detailProgram.fulfilled, (state, action) => {

                state.isLoading = false;

            })
            .addCase(detailProgram.rejected, (state, action) => {
                toast.error(action.payload);
                state.isLoading = false;
            })
});

export const programReducer = programSlice.reducer;
