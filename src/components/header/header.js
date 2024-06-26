import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import React from "react";
import Navigation from "../navigation/navigation";
import { IoIosLogOut } from "react-icons/io";
import { Button } from "../ui/button";
import { getCookie, logout } from "@/lib/services/auth.services";
import Searchbar from "../searchbar/searchbar";
import MobileNav from "../mobileNavigation/mobileNavigation";
import Image from "next/image";

export default async function Header() {
  const cookie = await getCookie();
  return (
    <header className="fixed h-14 top-0 left-0 right-0 bg-white shadow z-10 flex gap-8 justify-between items-center py-2 px-6">
      <div className="flex-1 flex items-center space-x-8 ">
        <Link href="/" className="text-xl">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={90}
            priority={true}
          />
        </Link>
        <Navigation session={cookie ? true : false} />
        <Searchbar placeholder="Search tutorials..." />
      </div>
      <div className="flex items-center space-x-2 ">
        {cookie && (
          <div>
            <form
              action={async () => {
                "use server";
                return logout();
              }}
            >
              <Button variant="outline" size="icon">
                <IoIosLogOut className="h-5 w-5" />
              </Button>
            </form>
          </div>
        )}

        <div className="block md:hidden">
          <MobileNav cookie={cookie} />
        </div>
      </div>
    </header>
  );
}
