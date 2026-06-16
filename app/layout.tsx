import "./globals.css";
import Header from "./components/Header";
export const metadata = {
  title: "Min Next-app",
  description: "En enkel start",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <Header />
        {children}
        <footer style={{ padding: 16 }}>© 2025</footer>
      </body>
    </html>
  );
}
