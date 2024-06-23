import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function TutorialCard({ tutorial }) {
  return (
    <Link href={`/tutorials/${tutorial?.slug}`}>
      <Card className="h-full bg-white hover:bg-gray-100 cursor-pointer active:bg-gray-200 transition duration-300">
        <CardHeader>
          <CardTitle className="uppercase">{tutorial.title}</CardTitle>
          <CardDescription>{tutorial.category}</CardDescription>
        </CardHeader>
        {/* <CardContent className=" overflow-hidden text-ellipsis">
          {tutorial.description}
        </CardContent> */}
        {/* <CardFooter className="flex justify-center">
          {tutorial.createdAt}
        </CardFooter> */}
      </Card>
    </Link>
  );
}
