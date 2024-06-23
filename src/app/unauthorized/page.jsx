import Link from "next/link";
import React from "react";

const page = async () => {
  return (
    <div className="absolute flex h-full w-full">
      <div className="m-auto p-10  rounded-lg shad  ow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Session Expired</h2>
        <p className="text-lg text-gray-700 text-center">
          Your session has expired. Please sign in again.
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/signin" className="underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
