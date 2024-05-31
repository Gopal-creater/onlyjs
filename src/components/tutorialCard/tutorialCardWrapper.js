import TutorialCard from "@/components/tutorialCard/tutorialCard";
import tutorialsServices from "@/lib/services/tutorials.services";
import React from "react";

export default async function TutorialCardWrapper() {
  const response = await tutorialsServices.getAllTutorials();

  return (
    <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {response?.data?.docs?.map((el, index) => {
        return <TutorialCard key={index} tutorial={el} />;
      })}
    </div>
  );
}
