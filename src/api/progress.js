import requestService from "../services/requestService";
import config from "../config";

const setProgressReq = (data) => requestService.create(`${config.getApiAuthUrl()}/set-progress`, data);

export {
    setProgressReq
};
