// "use client";
import axios from "axios";
import apiUrls from "@/lib/api/apiUrls";

const appAxiosInstance = axios.create({
  baseURL: apiUrls.API_URL,
});

//request interceptor that will add auth token to every request
appAxiosInstance.interceptors.request.use(function (config) {
  // const token = getAccessToken();
  const token = null;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

//Any Request to Server
export function AppWebRequest(endUrl, method, config) {
  var responseError = {};
  return new Promise((resolve, reject) => {
    const defaultConfig = {
      url: endUrl,
      method: method || "get",
      baseURL: apiUrls.API_URL,
    };

    const finalConfig = Object.assign(defaultConfig, config || {});
    appAxiosInstance(finalConfig)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log("--- App error ----", error);
        // if (error?.response) {
        //   if (error.response.status === 401) {
        //     // case for refresh token / Invalid token
        //   }
        //   responseError = {
        //     ...error.response?.data,
        //     ...getProperErrorMessageFromError(error.response?.data),
        //     status: error.response.status,
        //     headers: error.response.headers,
        //   };
        // } else if (error?.request) {
        //   responseError = {
        //     ...error,
        //     message: "Can not made connection to the server",
        //   };
        // } else {
        //   responseError = {
        //     ...error,
        //     message: "Unexpected error occured!",
        //   };
        // }
        reject({
          ...error,
          message: error?.message || "Something went very wrong!",
        });
      });
  });
}
