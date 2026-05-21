// "use client";

// import { useEffect, useState } from "react";
// import { Moon, Sun } from "lucide-react";

// export default function ThemeToggle() {
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//       setDark(true);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const html = document.documentElement;

//     if (dark) {
//       html.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setDark(false);
//     } else {
//       html.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setDark(true);
//     }
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-full bg-white text-black dark:bg-gray-700 dark:text-white transition"
//     >
//       {dark ? <Sun size={18} /> : <Moon size={18} />}
//     </button>
//   );
// }





























"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (dark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        p-2
        rounded-full
        bg-zinc-300
        dark:bg-zinc-800
        text-zinc-900
        dark:text-zinc-100
        hover:scale-105
        transition
      "
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
