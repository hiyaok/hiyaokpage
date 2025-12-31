"use client";

import { useEffect, useState } from "react";

type Theme = "soft" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("soft");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme | null) ?? "soft";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  function toggle() {
    const next: Theme = theme === "soft" ? "dark" : "soft";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <button
      onClick={toggle}
      className="rounded-xl border border-zinc-800 bg-zinc-950/50 px-3 py-2 text-xs font-semibold text-zinc-200 hover:bg-zinc-950/80"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "soft" ? "Soft Dark" : "Dark"} ↔
    </button>
  );
}
