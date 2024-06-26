"use client";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import {
  authenticatedNavItems,
  notAuthenticatedNavItems,
} from "@/constants/constants";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const MobileNav = ({ cookie }) => {
  const links = cookie ? authenticatedNavItems : notAuthenticatedNavItems;
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries size={20} />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <Link href="/" className="text-center flex justify-center mt-20 mb-10">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={90}
            priority={true}
          />
        </Link>
        {/* Navigation */}
        <nav className="flex flex-col justify-center items-center gap-6">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
