import TutorialCardWrapper from "../components/blogCard/tutorialCardWrapper";
import { Suspense } from "react";
import TutorialCardSkeleton from "../components/blogCard/tutorialCardSkeleton";
import ErrorBoundary from "@/components/errorBoundary/ErrorBoundary";

export const metadata = {
  title: "twitcode",
};

export default async function Home() {
  return (
    <div className="absolute w-full h-full flex">
      <div className="w-0 lg:w-[300px] lg:border-r-2"></div>
      <div className="flex-1 overflow-auto">
        <h2 className="lg:ml-4 border-b pb-2 text-2xl font-semibold tracking-tight pt-2">
          Our latest blogs
        </h2>
        <ErrorBoundary isDefault={false}>
          <Suspense fallback={<TutorialCardSkeleton />}>
            <TutorialCardWrapper />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="w-0 lg:w-[300px] lg:border-l-2"></div>
    </div>
  );
}
