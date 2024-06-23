import { unstable_noStore } from "next/cache";
import { AppWebRequest } from "../networkManager";
import { redirect } from "next/navigation";

export const getAllTutorials = async (query, page = 1, limit = 10) => {
  // Disabling cache to make app dynamic
  unstable_noStore();

  // Define params
  const params = new URLSearchParams();
  params.append("page", page);
  params.append("limit", limit);

  if (query) {
    const filter = JSON.stringify({
      $or: [
        { category: { $regex: query, $options: "i" } },
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    params.append("filter", filter);
  }

  try {
    const data = await AppWebRequest("tutorials", "get", { params });
    return data;
  } catch (err) {
    if (err.isTokenExpired) {
      return redirect("/unauthorized");
    }
    throw new Error(err.message || "Failed to fetch all tutorials data");
  }
};

export const getTutorialBySlug = async (slug) => {
  // Disabling cache to make app dynamic
  unstable_noStore();
  try {
    const data = await AppWebRequest(`tutorials/${slug}`);
    return data;
  } catch (err) {
    if (err.isTokenExpired) {
      return redirect("/unauthorized");
    }
    throw new Error(err.message || "Failed to fetch all tutorials data");
  }
};
