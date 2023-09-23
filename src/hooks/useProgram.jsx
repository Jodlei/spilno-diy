import { useSelector } from "react-redux";

import {
    selectPrograms,
    selectIsLoading,
    selectProgramDetails
} from "../redux/program/selectors";

export const useProgram = () => {
    const listProgram = useSelector(selectPrograms);
    const isLoading = useSelector(selectIsLoading);
    const programDetails = useSelector(selectProgramDetails);

    return {
        listProgram,
        isLoading,
        programDetails
    };
};
