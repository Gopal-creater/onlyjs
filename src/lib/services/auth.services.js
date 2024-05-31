import { AppWebRequest } from "../networkManager";
import { unstable_noStore } from "next/cache";

class AuthServices {
  signIn = async (payload) => {
    unstable_noStore();

    try {
      const data = await AppWebRequest("users/signin", "post", {
        data: payload,
      });
      return data;
    } catch (err) {
      throw new Error(err?.message || "Failed to signin");
    }
  };

  getMe = async () => {
    unstable_noStore();

    try {
      const data = await AppWebRequest("users/me");
      return data;
    } catch (err) {
      throw new Error(err?.message || "Authentication failed!!");
    }
  };
}

const authServices = new AuthServices();
export default authServices;
