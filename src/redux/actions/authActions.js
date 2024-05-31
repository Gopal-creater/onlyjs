import authServices from "@/lib/services/auth.services";
import cookie from "js-cookie";
import * as authActions from "@/redux/slices/authSlice";
import { toast } from "react-toastify";

export const signInAction = (payload, router) => {
  return (dispatch) => {
    dispatch(authActions.setLoading());
    authServices
      .signIn(payload)
      .then((res) => {
        dispatch(authActions.setData({ payload: res?.data }));
        cookie.set("onlyjs-jwt", res?.token, { expires: 30 });
        router.push("/dashboard");
      })
      .catch((err) => {
        console.log("Being called--");
        dispatch(authActions.setError({ payload: err?.message }));
        toast.error(err?.message || "Hi");
      });
  };
};

export const getMeAction = (router) => {
  return (dispatch) => {
    dispatch(authActions.setProfileLoading());
    authServices
      .getMe()
      .then((res) => {
        dispatch(authActions.setProfileData({ payload: res?.data }));
      })
      .catch((err) => {
        router.push("/signin");
        dispatch(authActions.setProfileError({ payload: err?.message }));
        toast.error(err?.message);
      });
  };
};
