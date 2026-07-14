import { useCallback, useSyncExternalStore } from "react";

export type Theme = "dark" | "light";

declare global {
  interface Window {
    /** Swaps article-diagram <img> sources by theme. Defined in BaseLayout.astro. */
    __applyThemeImages?: (theme: Theme) => void;
  }
}

const STORAGE_KEY = "theme";

const listeners = new Set<() => void>();

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "light" ? "light" : "dark";
}

let currentTheme: Theme = getInitialTheme();

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("theme-light", theme === "light");
  root.classList.toggle("theme-dark", theme === "dark");
  // Mobile status bar
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", theme === "light" ? "#f7f6fb" : "#030303");
  }
  // Article diagrams are a single <img> whose src is swapped by theme (a CSS-hidden
  // image would never be indexed by Google). Defined by the inline script in
  // BaseLayout, which owns that swap.
  window.__applyThemeImages?.(theme);
}

function setThemeGlobal(theme: Theme) {
  if (theme === currentTheme) return;
  currentTheme = theme;
  applyTheme(theme);
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    void 0;
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Theme {
  return currentTheme;
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => setThemeGlobal(next), []);
  const toggleTheme = useCallback(
    () => setThemeGlobal(currentTheme === "dark" ? "light" : "dark"),
    [],
  );

  return { theme, setTheme, toggleTheme };
}
