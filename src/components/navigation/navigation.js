"use client";
import Link from "next/link";
import styles from "./navigation.module.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const auth = useSelector((state) => state?.auth);
  const router = useRouter();
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/tutorials" className={styles.link}>
            Tutorials
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className={styles.link}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/signin" className={styles.link}>
            Signin
          </Link>
        </li>
      </ul>
    </nav>
  );
}
