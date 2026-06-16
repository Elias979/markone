"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={{ padding: 16 }}>
      <nav>
        <Link
          href="/"
          style={{ fontWeight: pathname === "/" ? "bold" : "normal" }}
        >
          Hem
        </Link>

        {" | "}

        <Link
          href="/contact"
          style={{ fontWeight: pathname === "/contact" ? "bold" : "normal" }}
        >
          Kontakt
        </Link>
      </nav>
    </header>
  );
}
