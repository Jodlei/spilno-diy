import {createSlice} from "@reduxjs/toolkit";
import {setProgress, currentProgress, dayOfWeekProgress} from "./operations";
import {toast} from "react-toastify";

const initialState = {
    progressAmount: 0,
    countExercises: 0,
    dayOfWeekProgress: [
        { id: "1", day: "Пн", progress: 0 },
        { id: "2", day: "Вт", progress: 0 },
        { id: "3", day: "Ср", progress: 0 },
        { id: "4", day: "Чт", progress: 0 },
        { id: "5", day: "Пт", progress: 0 },
        { id: "6", day: "Сб", progress: 0 },
        { id: "7", day: "Нд", progress: 0 },
    ],
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

            .addCase(dayOfWeekProgress.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(dayOfWeekProgress.fulfilled, (state, action) => {
                state.dayOfWeekProgress = action.payload
                state.isLoading = false;
            })
            .addCase(dayOfWeekProgress.rejected, (state, action) => {
                toast.error(action.payload);
                state.isLoading = false;
            })



});

export const progressReducer = progressSlice.reducer;
