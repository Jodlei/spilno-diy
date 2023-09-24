import {createSlice} from "@reduxjs/toolkit";
import {setProgress, currentProgress} from "./operations";
import {toast} from "react-toastify";

const initialState = {
    progressAmount: 0,
    countExercises: 0,
    isLoading: false,
    error: null,
};

export const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(setProgress.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(setProgress.fulfilled, (state, action) => {
                state.progressAmount = action.payload.progressAmount
                state.countExercises = action.payload.countExercises
                state.isLoading = false;
            })
            .addCase(setProgress.rejected, (state, action) => {
                toast.error(action.payload);
                state.isLoading = false;
            })
            .addCase(currentProgress.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(currentProgress.fulfilled, (state, action) => {
                state.progressAmount = action.payload.progressAmount
                state.countExercises = action.payload.countExercises
                state.isLoading = false;
            })
            .addCase(currentProgress.rejected, (state, action) => {
                toast.error(action.payload);
                state.isLoading = false;
            })
});

export const progressReducer = progressSlice.reducer;
