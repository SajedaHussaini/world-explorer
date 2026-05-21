// export default function Footer() {
//   return (
//     <footer className="bg-gray-200 text-black dark:bg-gray-800 text-center text-white py-4">
//       World Explorer © {new Date().getFullYear()}
//     </footer>
//   );
// }

















import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
      // mt-10
      // border-t
      // border-zinc-300
      // dark:border-zinc-800
      // bg-zinc-200
      // dark:bg-zinc-900
      // transition-colors


       mt-10
      border-t
      border-gray-300
      dark:border-gray-800
      bg-gray-200
      dark:bg-gray-900
      transition-colors
    "
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              World Explorer
            </h2>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-sm">
              Explore countries, capitals, regions, populations,
              and discover information from around the world.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-zinc-800 dark:text-zinc-200">
              Navigation
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/countries"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                >
                  Countries
                </Link>
              </li>

              <li>
                <Link
                  href="/favorites"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                >
                  Favorites
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-zinc-800 dark:text-zinc-200">
              Data Source
            </h3>

            <a
              href="https://restcountries.com"
              target="_blank"
              className="
                text-sm
                text-zinc-600
                dark:text-zinc-400
                hover:text-zinc-900
                dark:hover:text-white
              "
            >
              REST Countries API
            </a>
          </div>
        </div>

        <div
          className="
          mt-8
          pt-4
          border-t
          border-zinc-300
          dark:border-zinc-800
          text-center
          text-sm
          text-zinc-500
          dark:text-zinc-400
        "
        >
          © {new Date().getFullYear()} World Explorer.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
