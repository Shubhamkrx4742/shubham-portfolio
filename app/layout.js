
import "./globals.css";
import ThemeToggle from "../components/ThemeToggle";

export const metadata = {
  title: "Shubham Karsh | Full Stack Developer",
  description: "Modern portfolio of Shubham Karsh — Full Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[radial-gradient(1000px_600px_at_20%_-20%,#c7f3ff,transparent),radial-gradient(1000px_600px_at_120%_20%,#f5d0fe,transparent)] dark:bg-[radial-gradient(1000px_600px_at_20%_-20%,#0b1220,transparent),radial-gradient(1000px_600px_at_120%_20%,#1b1130,transparent)] text-gray-900 dark:text-gray-100 min-h-screen">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
