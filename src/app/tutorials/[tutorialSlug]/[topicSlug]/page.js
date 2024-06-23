import topicServices from "@/lib/services/topic.services";
import React from "react";

export default async function page({ params }) {
  const res = await topicServices.getTopicBySlug(params.topicSlug);

  return <div dangerouslySetInnerHTML={{ __html: res?.data?.blog }} />;
}
