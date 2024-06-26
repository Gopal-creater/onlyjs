import BlogCard from "@/components/blogCard/blogCard";
import NoData from "@/components/noData/noData";
import CustomPagination from "@/components/pagination/pagination";
import { getUser } from "@/lib/services/auth.services";
import * as blogsServices from "@/lib/services/blogs.services";
import React from "react";

export const metadata = {
  title: "twitcode blogs",
  description: "Browse all of the blogs in twitcode",
};

export default async function Page({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const response = await blogsServices.getAllBlogs(query, currentPage);
  const user = await getUser();

  if (response?.data?.totalDocs === 0) return <NoData />;

  return (
    <div className="h-full w-full">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight mt-4">
          Browse our all blogs
        </h2>
        <div className="min-w-[250px] mt-3 md:mt-0  md:min-w-[500px]">
          {/* <Searchbar placeholder="Search tutorials..." /> */}
        </div>
      </div>
      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {response?.data?.docs?.map((el, index) => {
          return <BlogCard key={index} blog={el} user={user} />;
        })}
      </div>
      <div className="mt-5 flex w-full justify-center">
        <CustomPagination totalPages={response?.data?.totalPages} />
      </div>
    </div>
  );
}
