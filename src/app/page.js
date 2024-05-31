import Banner from "@/components/banner/banner";
import TutorialCardWrapper from "../components/tutorialCard/tutorialCardWrapper";
import { Suspense } from "react";
import TutorialCardSkeleton from "../components/tutorialCard/tutorialCardSkeleton";
import ErrorBoundary from "@/components/errorBoundary/ErrorBoundary";

export const metadata = {
  title: "onlyjs",
};

export default async function Home() {
  return (
    <div>
      <Banner />
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-2">
        Some of our top tutorials
      </h2>
      <ErrorBoundary isDefault={false}>
        <Suspense fallback={<TutorialCardSkeleton />}>
          <TutorialCardWrapper />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
