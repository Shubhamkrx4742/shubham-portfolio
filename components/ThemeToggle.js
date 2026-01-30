
"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    // initialize theme from localStorage
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "dark") document.documentElement.classList.add("dark");
  }, []);

  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  if (!mounted) return null;
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="fixed right-4 top-4 z-50 rounded-full border border-white/20 bg-white/70 px-3 py-2 text-sm backdrop-blur hover:shadow dark:bg-neutral-900/70"
    >
      Toggle Theme
    </button>
  );
}
