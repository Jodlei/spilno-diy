import { useSelector } from "react-redux";

import {
    selectPrograms,
    selectIsLoading
} from "../redux/program/selectors";

export const useProgram = () => {
    const listProgram = useSelector(selectPrograms);
    const isLoading = useSelector(selectIsLoading);

    return {
        listProgram,
        isLoading
    };
};
