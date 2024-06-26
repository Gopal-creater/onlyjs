import {
  authenticatedNavItems,
  notAuthenticatedNavItems,
} from "@/constants/constants";
import Link from "next/link";

export default async function Navigation({ session }) {
  const navItems = session ? authenticatedNavItems : notAuthenticatedNavItems;

  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-4">
        {navItems?.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
