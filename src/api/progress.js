import requestService from "../services/requestService";
import config from "../config";

const setProgressReq = (data) => requestService.create(`${config.getApiAuthUrl()}/set-progress`, data);
const getCurrentProgressReq = () => requestService.get(`${config.getApiAuthUrl()}/get-current-progress`);
const getDayOfWeekProgressReq = () => requestService.get(`${config.getApiAuthUrl()}/get-progress-week`);

export {
    setProgressReq,
    getCurrentProgressReq,
    getDayOfWeekProgressReq
};
