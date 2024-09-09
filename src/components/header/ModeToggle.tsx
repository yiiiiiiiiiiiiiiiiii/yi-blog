"use client";
import IconSun from "@/components/SvgIcon/Sun";
import IconMoon from "@/components/SvgIcon/Moon";

export default function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add("[&_*]:!transition-none");
    window.setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none");
    }, 0);
  }

  function toggleMode() {
    disableTransitionsTemporarily();

    let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    let isSystemDarkMode = darkModeMediaQuery.matches;
    let isDarkMode = document.documentElement.classList.toggle("dark");

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group transition"
      onClick={toggleMode}
    >
      <IconSun className="dark:hidden h-6 w-6 transition " />
      <IconMoon className="hidden dark:block h-6 w-6 transition text-white " />
    </button>
  );
}
