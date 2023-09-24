import { useSelector } from "react-redux";

import {
    selectCountExercises,
    selectDayOfWeekProgress,
    selectIsLoading,
    selectProgressAmount
} from "../redux/progress/selectors";

export const useProgress = () => {
    const isLoading = useSelector(selectIsLoading);
    const progressAmount = useSelector(selectProgressAmount);
    const countExercises = useSelector(selectCountExercises);
    const daysWithProgress = useSelector(selectDayOfWeekProgress);

    return {
        isLoading,
        progressAmount,
        countExercises,
        daysWithProgress
    };
};
