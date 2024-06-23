// import { signOut } from "../../../auth";
import { AppWebRequest } from "../networkManager";
import { unstable_noStore } from "next/cache";

class TopicServices {
  getAllTutorialTopics = async (tutorialSlug, page = 1, limit = 1000) => {
    // Disabling cache to make app dynamic
    unstable_noStore();

    const params = new URLSearchParams();
    if (tutorialSlug) {
      params.append("filter", { tutorial: tutorialSlug });
    }

    try {
      const data = await AppWebRequest("topics", "get", params);
      return data;
    } catch (err) {
      throw new Error(err?.message || "Failed to fetch all topics");
    }
  };

  getTopicBySlug = async (slug) => {
    // Disabling cache to make app dynamic
    unstable_noStore();
    try {
      const data = await AppWebRequest(`topics/${slug}`);
      return data;
    } catch (err) {
      throw new Error(err?.message || "Failed to fetch blog data");
    }
  };

  createTopic = async (payload) => {
    // Disabling cache to make app dynamic
    unstable_noStore();
    try {
      const data = await AppWebRequest("topics", "post", {
        data: { ...payload, index: 1 },
      });
      return data;
    } catch (err) {
      // await signOut({ redirectTo: "/signout" });

      throw new Error(err?.message || "Failed to create blog");
    }
  };
}

const topicServices = new TopicServices();
export default topicServices;
