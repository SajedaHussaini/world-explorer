"use client";
import { REGIONS } from "@lib/constants";

export default function RegionFilter({ region, setRegion }) {
  return (
    <div className="flex flex-wrap gap-2 my-3">
      <button
        onClick={() => setRegion("")}
        className={`px-3 py-1 rounded-full border ${
          !region
            ? "bg-primary text-white"
            : "bg-white dark:bg-surface text-gray-900"
        }`}
      >
        All Regions
      </button>
      {REGIONS.map((r) => (
        <button
          key={r}
          onClick={() => setRegion(r)}
          className={`px-3 py-1 rounded-full border ${
            region === r
              ? "bg-primary text-white"
              : "bg-white dark:bg-surface text-gray-900"
          }`}
        >
          {r}
        </button>
      ))}
    </div>
  );
}


