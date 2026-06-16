"use client";

import Link from "next/link";
import Button from "./components/Button";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <p>Detta är startsidan.</p>

      <Link href="/contact">Kontakt</Link>

      <br />

      <button onClick={() => router.push("/contact")}>Kontakt med push</button>

      <Button onClick={() => alert("Hello!")}>Primär</Button>

      <Button dark>Knight Mode</Button>

      <Button fullWidth>Full bredd</Button>
    </main>
  );
}
