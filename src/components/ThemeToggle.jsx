import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
export const ThemeToggle = () => {
    // to start with a dark mode set it to true
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        // Check for saved user preference, like theme and apply it
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
          setIsDarkMode(true);
          document.documentElement.classList.add("dark");
        }else {
          setIsDarkMode(false);
          document.documentElement.classList.remove("dark");
        }
      }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
          setIsDarkMode(false);
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          //store this to the local storage so that the theme remains even after refreshing and we need to use effect to use it
          localStorage.setItem("theme", "dark");
          setIsDarkMode(true);
        }
    };
    // the cn function pass a list of class names instead of writing a long string of class names
  return (
    <button type="button" 
    onClick={toggleTheme} 
    className={cn(
      "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 ",
      "focus:outline-hidden",
    )}>
        {isDarkMode ? (<Sun className="h-6 w-6 text-yellow-300"/> 
      ):( 
      <Moon className="h-6 w-6 text-blue-900"/>
      )}
    </button>
  )}
 