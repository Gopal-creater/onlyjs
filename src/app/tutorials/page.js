import CustomPagination from "@/components/pagination/pagination";
import Searchbar from "@/components/searchbar/searchbar";
import TutorialCard from "@/components/tutorialCard/tutorialCard";
import tutorialsApi from "@/lib/api/tutorials/tutorials.api";
import React from "react";

export default async function TutorialsPage({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const response = await tutorialsApi.getAllTutorials(query, currentPage);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Browse our all tutorials
        </h2>
        <div className="min-w-[250px] mt-3 md:mt-0  md:min-w-[500px]">
          <Searchbar placeholder="Search invoices..." />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {response?.data?.docs?.map((el, index) => {
          return <TutorialCard key={index} tutorial={el} />;
        })}
      </div>
      <div className="mt-5 flex w-full justify-center">
        <CustomPagination totalPages={response?.data?.totalPages} />
      </div>
    </div>
  );
}
