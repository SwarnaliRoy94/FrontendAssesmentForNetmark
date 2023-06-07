"use client";

import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="/">
        Home
      </Link>
      <Link className={styles.link} href="/faq">
        FAQs
      </Link>
    </div>
  );
};

export default Navbar;
