"use client";

import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">
        {error?.message || "Something went very wrong!"}
      </h2>
      <Button
        className="mt-4 rounded-md px-4 py-2 text-sm text-white transition-colors"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </Button>
    </main>
  );
}
