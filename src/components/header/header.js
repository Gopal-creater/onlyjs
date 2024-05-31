"use client";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import React from "react";
import Navigation from "../navigation/navigation";
import { IoIosLogOut } from "react-icons/io";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { store } from "@/redux/store";
import cookie from "js-cookie";

export default function Header() {
  const router = useRouter();

  const logOut = () => {
    store.dispatch({ type: "logout" });
    cookie.remove("onlyjs-jwt");
    router.push("/");
  };

  return (
    <header className="fixed h-14 top-0 left-0 right-0 bg-white shadow z-10 flex justify-between items-center py-2 px-6">
      <div className="flex items-center space-x-10">
        <div>
          <Link href="/" className="text-xl">
            OnlyJS
          </Link>
        </div>
        <Navigation />
      </div>
      <div className="flex items-center space-x-2">
        <div>
          <Button variant="outline" size="icon" onClick={() => logOut()}>
            <IoIosLogOut className="h-5 w-5" />
          </Button>
        </div>

        <div className="block md:hidden">{<FaBars size={20} />}</div>
      </div>
    </header>
  );
}
