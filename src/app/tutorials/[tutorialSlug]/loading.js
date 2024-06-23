import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function loading() {
  const skeletons = [];
  for (let i = 0; i < 5; i++) {
    skeletons.push(
      <div key={i}>
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <div className="space-y-2 mt-2">
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[75%]" />
        </div>
      </div>
    );
  }
  return (
    <div className="h-full w-full flex flex-col space-y-3 overflow-hidden">
      {skeletons}
    </div>
  );
}
