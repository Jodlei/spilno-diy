import axios from "axios";
import storage from "./storage";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  config.headers["X-Requested-With"] = "XMLHttpRequest";

  //config.headers["Content-type"] = "application/json";

  if (storage.hasToken()) {
    config.headers.Authorization = "Bearer " + storage.getToken();
  }

  return config;
});

axiosInstance.interceptors.response.use((response) => response.data);

const get = (url, headers = {}, params = {}) => {
  return axiosInstance.get(url, {
    params: params,
    headers: headers,
  });
};

const create = (url, data, headers = {}) => {
  return axiosInstance.post(url, data, {
    headers: headers,
  });
};

const update = (url, data, headers = {}) => {
  return axiosInstance.put(url, data, {
    headers: headers,
  });
};

const destroy = (url) => axiosInstance.delete(url);

const requestService = {
  create,
  get,
  update,
  destroy,
};

export default requestService;
