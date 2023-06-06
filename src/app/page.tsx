"use client";

import Expandable from "@/components/expandable/expandable";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <button aria-pressed="true">Press Me</button> */}
      <Expandable>
        <Expandable.Header>Header</Expandable.Header>
        <Expandable.Icon icon={"+"} />
        <Expandable.Body>This is Content</Expandable.Body>
      </Expandable>
    </main>
  );
}
