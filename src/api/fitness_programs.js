import requestService from "../services/requestService";
import config from "../config";


const getReqFitnessProgram = (request) => requestService.get(`${config.getApiAuthUrl()}/program`, {}, request);

export {
    getReqFitnessProgram
};
