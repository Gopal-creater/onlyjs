import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
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
          <Link href="/blogs" className={styles.link}>
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
