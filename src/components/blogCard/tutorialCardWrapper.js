import BlogCard from "@/components/blogCard/blogCard";
import * as blogsServices from "@/lib/services/blogs.services";
import React from "react";
import NoData from "../noData/noData";

export default async function TutorialCardWrapper() {
  const response = await blogsServices.getAllBlogs();

  if (response?.data?.totalDocs === 0) return <NoData />;

  return (
    <div className="grid grid-cols-1 p-4 gap-4">
      {response?.data?.docs?.map((el, index) => {
        return <BlogCard key={index} blog={el} />;
      })}
    </div>
  );
}
