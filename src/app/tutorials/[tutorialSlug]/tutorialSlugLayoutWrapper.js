import { FaArrowsTurnRight } from "react-icons/fa6";
import topicServices from "@/lib/services/topic.services";
import Link from "next/link";

export default async function TutorialSlugLayoutWrapper({ children, params }) {
  const res = await topicServices.getAllTutorialTopics(params?.tutorialSlug);

  return (
    <div className="absolute flex flex-col lg:flex-row w-full gap-4 h-full">
      <div className="min-w-[300px] p-4 bg-gray-100 hidden lg:block flex-col space-y-1 overflow-auto">
        <h1 className="text-lg font-semibold text-center uppercase">
          {params?.tutorialSlug}
        </h1>
        {res?.data?.docs?.map((topic) => (
          <Link
            key={topic?.slug}
            href={`/tutorials/${params?.tutorialSlug}/${topic?.slug}`}
            className="flex w-full items-center gap-2"
          >
            <FaArrowsTurnRight />
            {topic?.slug}
          </Link>
        ))}
      </div>

      <div className="flex-1 pt-4 overflow-auto">{children}</div>
      <div className="min-w-[300px] pt-4"></div>
    </div>
  );
}
