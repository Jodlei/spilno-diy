import {
    ACTION_SET_FITNESS_PROGRAM,
    ACTION_LOADER_FITNESS_PROGRAM
} from '../actions/fitness_programs'


const initialState = {
    list: [],
    isLoading: false,
};

export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_SET_FITNESS_PROGRAM:
            return {
                ...state,
                list: payload
            }

        case ACTION_LOADER_FITNESS_PROGRAM:

            return {
                ...state,
                isLoading: payload
            }

        default:
            return state;
    }
}
