import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button className={theme} onClick={toggleTheme}>
        Mode: {theme}
      </button>
    </>
  );
}
