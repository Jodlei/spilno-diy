import requestService from "../services/requestService";
import config from "../config";


const getReqFitnessProgram = (request) => requestService.get(`${config.getApiAuthUrl()}/programs`, {}, request);

export {
    getReqFitnessProgram
};
