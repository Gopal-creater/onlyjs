"use client";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSun } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import React from "react";
import Navigation from "../navigation/navigation";

export default function Header() {
  const [state, setState] = React.useState({
    isToggled: false,
    isDarkMode: true,
  });
  return (
    <header className="flex justify-between items-center py-2 px-6">
      <div className="flex items-center space-x-10">
        <div>
          <Link href="/" className="text-xl">
            OnlyJS
          </Link>
        </div>
        <Navigation />
      </div>
      <div className="flex space-x-2">
        <div>
          {state.isDarkMode ? (
            <AiOutlineSun size={20} />
          ) : (
            <MdOutlineDarkMode size={20} />
          )}
        </div>

        <div className="block md:hidden">
          {state.isToggled ? <RxCross2 size={20} /> : <FaBars size={20} />}
        </div>
      </div>
    </header>
  );
}
