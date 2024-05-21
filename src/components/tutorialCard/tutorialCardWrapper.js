import TutorialCard from "@/components/tutorialCard/tutorialCard";
import tutorialsApi from "@/lib/api/tutorials/tutorials.api";
import React from "react";

export default async function TutorialCardWrapper() {
  const response = await tutorialsApi.getAllTutorials();

  return (
    <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {response?.data?.docs?.map((el, index) => {
        return <TutorialCard key={index} tutorial={el} />;
      })}
    </div>
  );
}
