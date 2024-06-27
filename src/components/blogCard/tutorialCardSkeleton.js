import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function TutorialCardSkeleton() {
  return (
    <div className="">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex flex-col space-y-3 p-2 w-full h-full">
          <Skeleton className="h-[200px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}
