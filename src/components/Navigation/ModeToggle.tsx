"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import IconSun from "@/components/SvgIcon/Sun";
import IconMoon from "@/components/SvgIcon/Moon";

export default function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-6 w-6 bg-transparent"></div>;
  }

  function toggleMode() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group transition "
      onClick={toggleMode}
    >
      <IconSun className="dark:hidden h-6 w-6 transition hover:text-blue-500" />
      <IconMoon className="hidden dark:block h-6 w-6 transition text-white hover:text-blue-500" />
    </button>
  );
}
