"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function BlogCard({ blog, user }) {
  const router = useRouter();
  return (
    <Card
      className="h-full bg-white hover:bg-gray-100 hover:cursor-pointer"
      onClick={() => router.push(`/blogs/${blog?.slug}`)}
    >
      <CardHeader>
        <CardTitle className="">{blog.title}</CardTitle>
        <CardDescription className="flex flex-wrap gap-4 items-center">
          {blog.category} <span className="ml-8">Tags : </span>
          {blog.keywords?.map((el, index) => {
            return (
              <span key={index} className="bg-black p-2 rounded-lg text-white">
                {el}
              </span>
            );
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-hidden text-ellipsis">
        {blog.description}
      </CardContent>
      {/* <CardFooter className="flex justify-center gap-2"></CardFooter> */}
    </Card>
  );
}
