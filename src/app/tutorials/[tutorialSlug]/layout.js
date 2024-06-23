import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import TutorialSlugLayoutWrapper from "./tutorialSlugLayoutWrapper";

const Loading = () => {
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
    <div className="absolute flex flex-col lg:flex-row w-full gap-4 h-full">
      <Skeleton className="min-w-[300px] p-4  hidden lg:block flex-col" />
      <div className="h-full w-full flex flex-col space-y-3 overflow-hidden">
        {skeletons}
      </div>
      <Skeleton className="min-w-[300px] pt-4" />
    </div>
  );
};

export default function Layout({ params, children }) {
  return (
    <Suspense fallback={<Loading />}>
      <TutorialSlugLayoutWrapper params={params}>
        {children}
      </TutorialSlugLayoutWrapper>
    </Suspense>
  );
}
