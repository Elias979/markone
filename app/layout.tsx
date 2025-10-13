import "./globals.css";

export const metadata = {
  title: "Min Next-app",
  description: "En enkel start",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <header style={{ padding: 16 }}>
          <nav><a href="/">Hem</a> | <a href="/about">About</a></nav>
        </header>
        {children}
        <footer style={{ padding: 16 }}>© 2025</footer>
      </body>
    </html>
  );
}