import {
    getReqFitnessProgram
} from "../../api/fitness_programs";



export const ACTION_SET_FITNESS_PROGRAM = 'ACTION_SET_FITNESS_PROGRAM';
export function setFitnessProgram(data) {

    return {
        type: ACTION_SET_FITNESS_PROGRAM,
        payload: data
    };
}


export const ACTION_LOADER_FITNESS_PROGRAM = 'ACTION_LOADER_FITNESS_PROGRAM';
export function loaderFitnessProgram(value) {
    return {
        type: ACTION_LOADER_FITNESS_PROGRAM,
        payload: value
    };
}



export const THUNK_GET_FITNESS_PROGRAM = 'THUNK_GET_FITNESS_PROGRAM';
export function getFitnessProgram() {

    return function (dispatch) {

        getReqFitnessProgram().then(resp => {

            dispatch(setFitnessProgram(resp.data));
         //   dispatch(loaderFitnessProgram(false));
        }).catch(error => {
            console.error("Error fetching fitness program:", error);
        });
    };
}

