import DeleteBlogBtn from "@/components/deleteBlogBtn/deleteBlogBtn";
import { getUser } from "@/lib/services/auth.services";
import { getBlogBySlug } from "@/lib/services/blogs.services";
import Link from "next/link";
import React from "react";

const Page = async ({ params }) => {
  const blog = await getBlogBySlug(params.slug);
  const user = await getUser();

  return (
    <div className="w-full h-full flex mt-4">
      <div className="w-0 lg:w-[300px]"></div>

      <div className="flex-1 overflow-auto w-full">
        <h2 className="border-b pb-2 text-xl font-semibold tracking-tight pt-2">
          {blog.data.title}
        </h2>

        <div className="flex flex-wrap gap-4 items-center mt-2">
          {blog.data.category}
          <span className="ml-8">Tags : </span>
          {blog.data.keywords.map((el, index) => {
            return (
              <span key={index} className="bg-black text-white p-2 rounded-lg">
                {el}
              </span>
            );
          })}
        </div>

        <div className="mt-3">{blog.data.description}</div>

        <div className="mt-4 flex gap-4 items-center">
          {user?.role === "admin" && (
            <Link
              className="underline"
              href={`/dashboard/edit-blog/${blog.data.slug}`}
            >
              Edit
            </Link>
          )}
          {user?.role === "admin" && <DeleteBlogBtn slug={params.slug} />}
        </div>

        <div
          className="mt-10"
          dangerouslySetInnerHTML={{ __html: blog?.data?.blog }}
        />
      </div>
      <div className="w-0 lg:w-[300px]"></div>
    </div>
  );
};

export default Page;
