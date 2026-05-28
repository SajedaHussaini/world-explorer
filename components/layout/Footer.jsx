import Link from "next/link";
import {
  Globe,
  Code2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        mt-16
        border-t
        border-zinc-300
        dark:border-zinc-800
        bg-zinc-100
        dark:bg-zinc-950
        transition-colors
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          py-14
        "
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-12
          "
        >

          {/* Brand */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <div
                className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-black
                  dark:bg-white
                  text-white
                  dark:text-black
                  flex
                  items-center
                  justify-center
                "
              >
                <Globe size={20} />
              </div>

              <div>
                <h2
                  className="
                    text-xl
                    font-bold
                    text-zinc-900
                    dark:text-white
                  "
                >
                  World Explorer
                </h2>

                <p
                  className="
                    text-sm
                    text-zinc-500
                    dark:text-zinc-400
                  "
                >
                  Explore the world beautifully
                </p>
              </div>

            </div>

            <p
              className="
                text-sm
                leading-7
                text-zinc-600
                dark:text-zinc-400
                max-w-sm
              "
            >
              Discover countries, capitals, populations,
              regions, flags, and detailed information
              from all around the world in one modern
              experience.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-zinc-900
                dark:text-white
                mb-5
              "
            >
              Navigation
            </h3>

            <ul className="space-y-3">

              {[
                {
                  href: "/",
                  label: "Home",
                },
                {
                  href: "/countries",
                  label: "Countries",
                },
                {
                  href: "/search",
                  label: "Search",
                },
                {
                  href: "/favorites",
                  label: "Favorites",
                },
                {
                  href: "/about",
                  label: "About",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      text-zinc-600
                      dark:text-zinc-400
                      hover:text-black
                      dark:hover:text-white
                      transition-colors
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Resources */}
          <div>

            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-zinc-900
                dark:text-white
                mb-5
              "
            >
              Resources
            </h3>

            <div className="space-y-4">

              <a
                href="https://restcountries.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  text-zinc-600
                  dark:text-zinc-400
                  hover:text-black
                  dark:hover:text-white
                  transition-colors
                "
              >
                <Globe size={16} />
                REST Countries API
              </a>

              <a
                href="https://github.com/SajedaHussaini"
                className="
                  flex
                  items-center
                  gap-2
                  text-zinc-600
                  dark:text-zinc-400
                  hover:text-black
                  dark:hover:text-white
                  transition-colors
                "
              >
                <Code2 size={16} />
                GitHub Repository
              </a>

            </div>

          </div>

        </div>

        {/* bottom */}
        <div
          className="
            mt-14
            pt-6
            border-t
            border-zinc-300
            dark:border-zinc-800
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >

          <p
            className="
              text-sm
              text-zinc-500
              dark:text-zinc-400
            "
          >
           
            © 2026 World Explorer.
            All rights reserved.
          </p>

          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              text-zinc-500
              dark:text-zinc-400
            "
          >
            Made with Love using Next.js & TailwindCSS
          </div>

        </div>
      </div>
    </footer>
  );
}
