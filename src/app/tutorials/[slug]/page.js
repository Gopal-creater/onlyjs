import tutorialsServices from "@/lib/services/tutorials.services";
import React from "react";

export async function generateMetadata({ params }) {
  const res = await tutorialsServices.getTutorialBySlug(params?.slug);
  const tutorial = res?.data;

  return {
    title: tutorial?.title,
    description: tutorial?.description,
    keywords: tutorial?.keywords?.join(", "),
  };
}

export default async function Page({ params }) {
  const res = await tutorialsServices.getTutorialBySlug(params?.slug);
  return (
    <>
      <h1>{res?.data?.title}</h1>
      <h1>{res?.data?.description}</h1>
      <h1>{res?.data?.slug}</h1>
      <h1>{res?.data?.createdAt}</h1>
    </>
  );
}
