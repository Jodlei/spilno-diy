import requestService from "../services/requestService";
import config from "../config";


const getReqProgram = (request) => requestService.get(`${config.getApiAuthUrl()}/programs`, {}, request);
const getReqProgramWorkout = (item) => requestService.get(`${config.getApiAuthUrl()}/program-workout/` + item.id, {}, {});

export {
    getReqProgram,
    getReqProgramWorkout
};
