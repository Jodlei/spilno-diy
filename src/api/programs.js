import requestService from "../services/requestService";
import config from "../config";

const getPrograms = (request) => requestService.get(`${config.getApiAuthUrl()}/programs`, {}, request);
const getDetailProgram = (id) => requestService.get(`${config.getApiAuthUrl()}/program/` + id, {}, {});

export {
    getPrograms,
    getDetailProgram
};
