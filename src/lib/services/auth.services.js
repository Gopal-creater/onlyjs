"use server";
import { cookies } from "next/headers";
import { unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";
import { AppWebRequest } from "../networkManager";

export const signIn = async (payload) => {
  unstable_noStore();

  try {
    const res = await AppWebRequest("users/signin", "post", {
      data: payload,
    });

    const cookieData = { token: res.token, user: res.data };
    // Serialize the cookie with necessary options
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    };

    // Set the cookie using cookies module
    cookies().set("onlyjs_cookie", JSON.stringify(cookieData), cookieOptions);

    return res;
  } catch (err) {
    throw new Error(err?.message || "Failed to signin");
  }
};

export const getMe = async () => {
  unstable_noStore();

  try {
    const data = await AppWebRequest("users/me");
    return data;
  } catch (err) {
    throw new Error(err?.message || "Authentication failed!!");
  }
};

export const logout = () => {
  cookies().delete("onlyjs_cookie");
  return redirect("/signin");
};

export const getToken = async () => {
  const cookie = cookies().get("onlyjs_cookie");
  if (cookie) {
    try {
      const data = await JSON.parse(cookie.value);
      return data.token;
    } catch (err) {
      return undefined;
    }
  }
  return undefined;
};

export const getCookie = async () => {
  const cookie = cookies().get("onlyjs_cookie");
  if (cookie) {
    try {
      const data = await JSON.parse(cookie.value);
      return data;
    } catch (err) {
      return undefined;
    }
  }
  return undefined;
};
