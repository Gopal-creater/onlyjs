import TutorialCard from "@/components/tutorialCard/tutorialCard";
import * as tutorialsServices from "@/lib/services/tutorials.services";
import React from "react";
import NoData from "../noData/noData";

export default async function TutorialCardWrapper() {
  const response = await tutorialsServices.getAllTutorials();

  if (response?.data?.totalDocs === 0) return <NoData />;

  return (
    <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {response?.data?.docs?.map((el, index) => {
        return <TutorialCard key={index} tutorial={el} />;
      })}
    </div>
  );
}
