import requestService from "../services/requestService";
import config from "../config";

const getPrograms = (request) => requestService.get(`${config.getApiAuthUrl()}/programs`, {}, request);
const getDetailProgram = (item) => requestService.get(`${config.getApiAuthUrl()}/program/` + item.id, {}, {});

export {
    getPrograms,
    getDetailProgram
};
