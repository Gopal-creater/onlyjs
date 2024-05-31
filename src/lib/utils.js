import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import cookie from "js-cookie";
import { store } from "@/redux/store";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const logout = () => {
  store.dispatch({ type: "logout" });
  cookie.remove("onlyjs-jwt");
};
