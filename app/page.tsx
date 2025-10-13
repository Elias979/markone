'use client'; // Lägg överst i page.tsx
import Button from "./components/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hej Next.js </h1>
      <p>Detta är startsidan.</p>
      <Button onClick={() => alert("Hello!")}>Primär</Button>
      <Button dark>Knight Mode</Button>
      <Button fullWidth>Full bredd</Button>

    </main>
  );
}