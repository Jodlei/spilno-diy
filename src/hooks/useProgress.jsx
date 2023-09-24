import { useSelector } from "react-redux";

import {
    selectCountExercises,
    selectIsLoading, selectProgressAmount
} from "../redux/progress/selectors";

export const useProgress = () => {
    const isLoading = useSelector(selectIsLoading);
    const progressAmount = useSelector(selectProgressAmount);
    const countExercises = useSelector(selectCountExercises);

    return {
        isLoading,
        progressAmount,
        countExercises
    };
};
