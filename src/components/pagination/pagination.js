"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

export default function CustomPagination({ totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber?.toString());
    return `${pathname}?${params?.toString()}`;
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      // If total pages is 5 or less, display all page numbers
      for (let index = 1; index <= totalPages; index++) {
        pages.push(
          <PaginationItem key={index}>
            <PaginationLink
              href={createPageURL(index)}
              isActive={currentPage === index}
            >
              {index}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Display ellipsis and neighboring page numbers around the current page
      pages.push(
        <PaginationItem key={1}>
          <PaginationLink href={createPageURL(1)} isActive={currentPage === 1}>
            {1}
          </PaginationLink>
        </PaginationItem>
      );

      if (currentPage > 2) {
        // Display ellipsis before the current page if current page is not 1 or 2
        pages.push(
          <PaginationItem key="start-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Determine the range of page numbers to display around the current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(currentPage + 1, totalPages - 1);

      // Display neighboring page numbers around the current page
      for (let index = startPage; index <= endPage; index++) {
        pages.push(
          <PaginationItem key={index}>
            <PaginationLink
              href={createPageURL(index)}
              isActive={currentPage === index}
            >
              {index}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (currentPage < totalPages - 1) {
        // Display ellipsis after the current page if current page is not the second last or last
        pages.push(
          <PaginationItem key="end-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Display the last page
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href={createPageURL(totalPages)}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={createPageURL(currentPage - 1)}
              aria-disabled={currentPage <= 1}
              tabIndex={currentPage <= 1 ? -1 : undefined}
              className={
                currentPage <= 1 ? "pointer-events-none opacity-50" : undefined
              }
            />
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            <PaginationNext
              href={createPageURL(currentPage + 1)}
              aria-disabled={currentPage >= totalPages}
              tabIndex={currentPage >= totalPages ? -1 : undefined}
              className={
                currentPage >= totalPages
                  ? "pointer-events-none opacity-50"
                  : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
