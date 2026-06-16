"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";

export default function Contact() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <h1>Kontakt</h1>
      <p>Detta är kontaktsidan. Hör gärna av dig!</p>

      <Link href="/">Tillbaka hem</Link>

      <br />

      <button onClick={() => router.push("/")}>Hem med push</button>
    </main>
  );
}
