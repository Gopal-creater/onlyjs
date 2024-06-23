import AuthProtect from "@/components/authProtect/authProtect";
import Link from "next/link";
import { FaArrowsTurnRight } from "react-icons/fa6";

export default function layout({ children }) {
  return (
    // <AuthProtect>
    <div className="absolute flex gap-4 h-full w-full overflow-hidden">
      <div className="bg-gray-100 min-w-[300px] p-4 rounded-lg overflow-auto flex flex-col space-y-1">
        <h1 className="text-lg font-semibold text-center uppercase">Menu</h1>
        <Link href="/dashboard/" className="flex w-full items-center gap-2">
          <FaArrowsTurnRight />
          Admin
        </Link>
        <Link
          href="/dashboard/create-blog"
          className="flex w-full items-center gap-2"
        >
          <FaArrowsTurnRight />
          Create Blog
        </Link>
      </div>
      <div className="flex-1 pt-4 overflow-auto">{children}</div>
    </div>
    // </AuthProtect>
  );
}
