"use client";

import { REGIONS } from "@lib/constants";

export default function RegionFilter({
  region,
  setRegion,
}) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">

      {/* all regions */}
      <button
        onClick={() => setRegion("")}
        className={`

          w-[48%]
          sm:w-auto

          px-3
          sm:px-4

          py-2

          rounded-xl
          border

          text-xs
          sm:text-sm

          transition-all
          duration-300

          ${
            !region
              ? "bg-black text-white dark:bg-white dark:text-black border-transparent"
              : "bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-zinc-700 hover:border-black dark:hover:border-white"
          }
        `}
      >
        All Regions
      </button>

      {/* regions */}
      {REGIONS.map((r) => (
        <button
          key={r}
          onClick={() => setRegion(r)}
          className={`

            w-[48%]
            sm:w-auto

            px-3
            sm:px-4

            py-2

            rounded-xl
            border

            text-xs
            sm:text-sm

            transition-all
            duration-300

            ${
              region === r
                ? "bg-black text-white dark:bg-white dark:text-black border-transparent"
                : "bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-zinc-700 hover:border-black dark:hover:border-white"
            }
          `}
        >
          {r}
        </button>
      ))}
    </div>
  );
}
