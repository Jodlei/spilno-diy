export const selectIsLoading = (state) => state.progress.isLoading;
export const selectProgressAmount = (state) => state.progress.progressAmount;
export const selectCountExercises = (state) => state.progress.countExercises;
export const selectDayOfWeekProgress = (state) =>
  state.progress.dayOfWeekProgress;

export const getToken = (state) => state.auth.token;
