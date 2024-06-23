import * as tutorialsServices from "@/lib/services/tutorials.services";
import React from "react";

export async function generateMetadata({ params }) {
  const res = await tutorialsServices.getTutorialBySlug(params?.tutorialSlug);
  const tutorial = res?.data;

  return {
    title: tutorial?.title,
    description: tutorial?.description,
    keywords: tutorial?.keywords?.join(", "),
  };
}

export default async function Page({ params }) {
  const res = await tutorialsServices.getTutorialBySlug(params?.tutorialSlug);

  return (
    <div>
      <h1 className="text-lg font-semibold text-center uppercase block lg:hidden">
        {res?.data?.title}
      </h1>
      <h1 className="text-sm font-medium leading-none text-center block lg:hidden pb-2">
        {res?.data?.category}
      </h1>
      <div className="">
        <small className="text-sm leading-none whitespace-pre-wrap break-words">
          {res?.data?.description}
        </small>
      </div>
    </div>
  );
}
