// "use client";
// import { REGIONS } from "@lib/constants";

// export default function RegionFilter({ region, setRegion }) {
//   return (
//     <div className="flex flex-wrap gap-2 my-3">
//       <button
//         onClick={() => setRegion("")}
//         className={`px-3 py-1 rounded-full border ${
//           !region
//             ? "bg-primary text-white"
//             : "bg-white dark:bg-surface text-gray-900"
//         }`}
//       >
//         All Regions
//       </button>
//       {REGIONS.map((r) => (
//         <button
//           key={r}
//           onClick={() => setRegion(r)}
//           className={`px-3 py-1 rounded-full border ${
//             region === r
//               ? "bg-primary text-white"
//               : "bg-white dark:bg-surface text-gray-900"
//           }`}
//         >
//           {r}
//         </button>
//       ))}
//     </div>
//   );
// }



























"use client";

import { REGIONS } from "@lib/constants";

export default function RegionFilter({
  region,
  setRegion,
}) {
  return (
    <div className="flex flex-wrap gap-3">

      {/* all regions */}
      <button
        onClick={() =>
          setRegion("")
        }
        className={`px-4 py-2 rounded-xl border text-sm transition-all duration-300
        ${
          !region
            ? "bg-black text-white dark:bg-white dark:text-black border-transparent"
            : "bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-zinc-700 hover:border-black dark:hover:border-white"
        }`}
      >
        All Regions
      </button>

      {/* regions */}
      {REGIONS.map((r) => (
        <button
          key={r}
          onClick={() =>
            setRegion(r)
          }
          className={`px-4 py-2 rounded-xl border text-sm transition-all duration-300
          ${
            region === r
              ? "bg-black text-white dark:bg-white dark:text-black border-transparent"
              : "bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-zinc-700 hover:border-black dark:hover:border-white"
          }`}
        >
          {r}
        </button>
      ))}
    </div>
  );
}
