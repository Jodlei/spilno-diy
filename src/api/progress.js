import requestService from "../services/requestService";
import config from "../config";

const setProgressReq = (data) =>
  requestService.create(`${config.getApiAuthUrl()}/set-progress`, data);
const getCurrentProgressReq = (token) =>
  requestService.get(`${config.getApiAuthUrl()}/get-current-progress`, token);
const getDayOfWeekProgressReq = () =>
  requestService.get(`${config.getApiAuthUrl()}/get-progress-week`);

export { setProgressReq, getCurrentProgressReq, getDayOfWeekProgressReq };
