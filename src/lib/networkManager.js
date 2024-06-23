"use server";
import axios from "axios";
import apiUrls from "@/lib/apiUrls";
import { getToken } from "./services/auth.services";
import { redirect } from "next/navigation";

const appAxiosInstance = axios.create({
  baseURL: apiUrls.API_URL,
  withCredentials: true,
});

//Any Request to Server
export async function AppWebRequest(endUrl, method, config) {
  var errorMsg = null;
  return new Promise(async (resolve, reject) => {
    const defaultConfig = {
      url: endUrl,
      method: method || "get",
      baseURL: apiUrls.API_URL,
    };

    const finalConfig = Object.assign(defaultConfig, config || {});

    try {
      const token = await getToken();

      if (token) {
        finalConfig.headers = {
          ...finalConfig.headers,
          authorization: `Bearer ${token}`,
        };
      }

      const response = await appAxiosInstance(finalConfig);
      resolve(response.data);
    } catch (error) {
      if (error?.response && error.response.status === 401) {
        error.isTokenExpired = true;
      } else if (error?.request) {
        errorMsg = "Can not made connection to the server";
      } else {
        errorMsg = "Unexpected error occured!";
      }
      reject({
        message: error?.response?.data?.message || errorMsg,
        isTokenExpired: error.isTokenExpired || false,
      });
    }
  });
}
