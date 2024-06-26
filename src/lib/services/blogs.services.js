import { unstable_noStore } from "next/cache";
import { AppWebRequest } from "../networkManager";
import { redirect } from "next/navigation";

export const getAllBlogs = async (query, page = 1, limit = 10) => {
  // Disabling cache to make app dynamic
  unstable_noStore();

  // Define params
  const params = new URLSearchParams();
  params.append("page", page);
  params.append("limit", limit);
  params.append("sort", "-createdAt");

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
    const data = await AppWebRequest("blogs", "get", { params });
    return data;
  } catch (err) {
    if (err.isTokenExpired) {
      return redirect("/unauthorized");
    }
    throw new Error(err.message || "Failed to fetch all tutorials data");
  }
};

export const getBlogBySlug = async (slug) => {
  // Disabling cache to make app dynamic
  unstable_noStore();
  try {
    const data = await AppWebRequest(`blogs/${slug}`);
    return data;
  } catch (err) {
    if (err.isTokenExpired) {
      return redirect("/unauthorized");
    }
    throw new Error(err.message || "Failed to fetch all blog data");
  }
};

export const createBlog = async (payload) => {
  // Disabling cache to make app dynamic
  unstable_noStore();
  try {
    const data = await AppWebRequest(`blogs`, "post", {
      data: payload,
    });
    return data;
  } catch (err) {
    if (err.isTokenExpired) {
      return redirect("/unauthorized");
    }
    console.log("Error---", err);

    throw new Error(err.message || "Failed to create blog");
  }
};

export const updateBlogBySlug = async (slug, payload) => {
  try {
    const data = await AppWebRequest(`blogs/${slug}`, "patch", {
      data: payload,
    });
    return data;
  } catch (err) {
    if (err.isTokenExpired) {
      return redirect("/unauthorized");
    }
    throw new Error(err.message || "Failed to update blog");
  }
};

export const deleteBlogBySlug = async (slug) => {
  try {
    const data = await AppWebRequest(`blogs/${slug}`, "delete");
    return data;
  } catch (err) {
    if (err.isTokenExpired) {
      return redirect("/unauthorized");
    }
    throw new Error(err.message || "Failed to delete blog");
  }
};
