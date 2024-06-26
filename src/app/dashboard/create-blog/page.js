"use client";
import React from "react";
import { toast } from "react-toastify";
import { createBlog } from "@/lib/services/blogs.services";
import { useRouter } from "next/navigation";
import BlogForm from "@/components/blogForm/blogForm";

export default function Page() {
  const router = useRouter();

  const handleBlogSubmit = async (data) => {
    try {
      await createBlog({ ...data, keywords: data.keywords.split(",") });
      toast.success("Successfully created the blog.");
      router.push("/blogs");
    } catch (err) {
      toast.error(`${err?.message}` || "Error creating blog.");
    }
  };

  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
        Create - Tutorial
      </h2>
      <BlogForm handleBlogSubmit={handleBlogSubmit} />
    </div>
  );
}
