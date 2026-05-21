// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import ThemeToggle from "./ThemeToggle";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/countries", label: "Countries" },
//   { href: "/search", label: "Search" },
//   { href: "/favorites", label: "Favorites" },
//   { href: "/about", label: "About" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();

//   return (
//     <nav
//       className="
//       bg-zinc-200
//       dark:bg-zinc-900
//       border-b
//       border-zinc-300
//       dark:border-zinc-800
//       transition-colors
//     "
//     >
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
//         <Link
//           href="/"
//           className="
//           text-xl
//           font-bold
//           text-zinc-900
//           dark:text-zinc-100
//         "
//         >
//           Country Explorer
//         </Link>

//         <ul className="flex items-center gap-5">
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <Link
//                 href={link.href}
//                 className={`
//                   transition-colors
//                   hover:text-zinc-500
//                   dark:hover:text-zinc-400
//                   ${
//                     pathname === link.href
//                       ? "font-semibold text-zinc-950 dark:text-white"
//                       : "text-zinc-700 dark:text-zinc-300"
//                   }
//                 `}
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}

//           <ThemeToggle />
//         </ul>
//       </div>
//     </nav>
//   );
// }























"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  House,
  Globe,
  Search,
  Heart,
  CircleHelp,
  Menu,
  X,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: House,
  },
  {
    href: "/countries",
    label: "Countries",
    icon: Globe,
  },
  {
    href: "/search",
    label: "Search",
    icon: Search,
  },
  {
    href: "/favorites",
    label: "Favorites",
    icon: Heart,
  },
  {
    href: "/about",
    label: "About",
    icon: CircleHelp,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        bg-zinc-200
        dark:bg-zinc-900
        border-b
        border-zinc-300
        dark:border-zinc-800
        transition-colors
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          flex
          items-center
          justify-between
          px-4
          py-4
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="
            text-xl
            font-bold
            text-zinc-900
            dark:text-zinc-100
          "
        >
          Country Explorer
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    flex
                    items-center
                    gap-2
                    transition-colors
                    hover:text-zinc-500
                    dark:hover:text-zinc-400
                    ${
                      pathname === link.href
                        ? "font-semibold text-zinc-950 dark:text-white"
                        : "text-zinc-700 dark:text-zinc-300"
                    }
                  `}
                >
                  <Icon size={18} />
                  {link.label}
                </Link>
              </li>
            );
          })}

          <ThemeToggle />
        </ul>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            className="
              p-2
              rounded-lg
              bg-zinc-300
              dark:bg-zinc-800
              text-zinc-900
              dark:text-zinc-100
              transition
            "
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden
            border-t
            border-zinc-300
            dark:border-zinc-800
            bg-zinc-100
            dark:bg-zinc-900
          "
        >
          <ul className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`
                      flex
                      items-center
                      gap-3
                      px-3
                      py-2
                      rounded-xl
                      transition-colors
                      hover:bg-zinc-200
                      dark:hover:bg-zinc-800
                      ${
                        pathname === link.href
                          ? "bg-zinc-300 dark:bg-zinc-800 font-medium"
                          : ""
                      }
                    `}
                  >
                    <Icon size={18} />

                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
