import axios from "axios";
import apiUrls from "@/lib/apiUrls";
import cookie from "js-cookie";
import { store } from "@/redux/store";

const appAxiosInstance = axios.create({
  baseURL: apiUrls.API_URL,
  withCredentials: true,
});

//request interceptor that will add auth token to every request
appAxiosInstance.interceptors.request.use(function (config) {
  const token = cookie.get("onlyjs-jwt");
  if (token) {
    config.headers["authorization"] = `Bearer ${token}`;
  }
  return config;
});

//Any Request to Server
export function AppWebRequest(endUrl, method, config) {
  var errorMsg = null;
  return new Promise((resolve, reject) => {
    const defaultConfig = {
      url: endUrl,
      method: method || "get",
      baseURL: apiUrls.API_URL,
    };

    const finalConfig = Object.assign(defaultConfig, config || {});
    appAxiosInstance(finalConfig)
      .then((response) => {
        console.log("--- App response ----", response);
        resolve(response.data);
      })
      .catch((error) => {
        console.log("--- App error ----", error);
        if (error?.response) {
          if (error.response.status === 401) {
            // case for refresh token / Invalid token
            store.dispatch({ type: "logout" });
            cookie.remove("onlyjs-jwt");
          }
        } else if (error?.request) {
          errorMsg = "Can not made connection to the server";
        } else {
          errorMsg = "Unexpected error occured!";
        }
        reject({
          ...error?.response?.data,
          message: errorMsg || error?.response?.data?.message,
        });
      });
  });
}
