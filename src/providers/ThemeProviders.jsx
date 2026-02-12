import { ThemeProvider } from "../context/ThemeContext";
import TodoApp from "../TodoApp";

export default function ThemeProviders() {
  return (
    <>
      <ThemeProvider>
        <TodoApp />
      </ThemeProvider>
    </>
  );
}
