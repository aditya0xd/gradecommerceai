import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-lg bg-transparent border border-border text-text2 cursor-pointer flex items-center justify-center transition-all hover:text-text hover:border-text2 hover:bg-surface"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </button>
  );
}
