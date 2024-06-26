"use client";
import BlogForm from "@/components/blogForm/blogForm";
import { Skeleton } from "@/components/ui/skeleton";
import { getBlogBySlug, updateBlogBySlug } from "@/lib/services/blogs.services";
import React from "react";
import { toast } from "react-toastify";

const Page = ({ params }) => {
  const [state, setState] = React.useState({
    loading: true,
    blog: "",
    error: null,
  });

  React.useEffect(() => {
    setState({ ...state, loading: true });
    getBlogBySlug(params.slug)
      .then((res) => {
        setState({ ...state, blog: res?.data, loading: false });
      })
      .catch((err) => {
        setState({ ...state, loading: false, error: err });
        return toast.error(err || "Error fetching blog");
      });
  }, []);

  const handleSubmit = async (data) => {
    try {
      await updateBlogBySlug(params.slug, {
        ...data,
        keywords: data.keywords.split(","),
      });
      toast.success("Successfully updated the blog");
    } catch (err) {
      toast.error(err || "Error updating blog");
    }
  };

  if (state.loading)
    return (
      <div className="flex flex-col space-y-3 w-full">
        <div className="space-y-4">
          {Array.from({ length: 5 }).map(() => {
            return (
              <>
                <Skeleton className="w-full h-20" />
                <Skeleton className="h-10 w-[400px]" />
              </>
            );
          })}
        </div>
      </div>
    );

  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
        Update - Blog : {params.slug}
      </h2>
      <BlogForm
        handleBlogSubmit={handleSubmit}
        defaultVal={{ ...state.blog, keywords: state.blog.keywords.join(",") }}
      />
    </div>
  );
};

export default Page;
