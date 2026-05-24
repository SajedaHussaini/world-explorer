// "use client";

// import { useState, useMemo, useEffect } from "react";

// import {
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// import CountryGrid from "@components/country/CountryGrid";
// import RegionFilter from "@components/country/RegionFilter";
// import SortSelect from "@components/country/SortSelect";

// function sortCountries(countries, sort) {
//   if (!Array.isArray(countries)) return [];

//   if (sort === "pop-asc") {
//     return [...countries].sort(
//       (a, b) => a.population - b.population
//     );
//   }

//   if (sort === "pop-desc") {
//     return [...countries].sort(
//       (a, b) => b.population - a.population
//     );
//   }

//   if (sort === "alpha-asc") {
//     return [...countries].sort((a, b) =>
//       a.name.common.localeCompare(
//         b.name.common
//       )
//     );
//   }

//   if (sort === "alpha-desc") {
//     return [...countries].sort((a, b) =>
//       b.name.common.localeCompare(
//         a.name.common
//       )
//     );
//   }

//   return countries;
// }

// export default function CountriesClient({
//   initial = [],
// }) {
//   const [region, setRegion] =
//     useState("");

//   const [sort, setSort] =
//     useState("");

//   const [page, setPage] =
//     useState(1);

//   const countriesPerPage = 12;

  

//   // filtered countries
//   const filtered = useMemo(() => {
//     let arr = Array.isArray(initial)
//       ? initial
//       : [];

//     if (region) {
//       arr = arr.filter(
//         (c) => c.region === region
//       );
//     }

//     return sortCountries(arr, sort);
//   }, [initial, region, sort]);

//   // reset page
//   useEffect(() => {
//     setPage(1);
//   }, [region, sort]);

//   // pagination
//   const totalPages = Math.ceil(
//     filtered.length / countriesPerPage
//   );

//   const start =
//     (page - 1) * countriesPerPage;

//   const end =
//     start + countriesPerPage;

//   const currentCountries =
//     filtered.slice(start, end);

//   return (
//     <div className="space-y-8">

//       {/* heading */}
//       <div className="text-center space-y-3">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
//           Explore All Countries
//         </h1>

//         <p className="mt-9 mb-14 text-gray-600 dark:text-gray-400 text-lg">
//           Discover 250+ countries around the world
//         </p>
//       </div>

//       {/* filter card */}
//       <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-5 shadow-sm">

//         <div className="  flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

//           {/* filter */}
//           <div className="flex-1">
//             <p className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
//               Filter by Region
//             </p>

//             <RegionFilter
//               region={region}
//               setRegion={setRegion}
//             />
//           </div>

//           {/* sort */}
//           <div className="w-full lg:w-[220px]">
//             <p className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
//               Sort By
//             </p>

//             <SortSelect
//               value={sort}
//               setValue={setSort}
//             />
//           </div>
//         </div>

//         {/* text */}
//         <div className="mt-5 pt-4 border-t border-gray-200 dark:border-zinc-700">
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             Showing{" "}
//             <span className="font-semibold text-gray-900 dark:text-white">
//               {currentCountries.length}
//             </span>{" "}
//             of{" "}
//             <span className="font-semibold text-gray-900 dark:text-white">
//               {filtered.length}
//             </span>{" "}
//             countries
//           </p>
//         </div>
//       </div>

//       {/* grid */}
//       <CountryGrid
//         countries={currentCountries}
//       />

//       {/* pagination */}
//       <div className="flex items-center justify-center gap-3 pt-4 flex-wrap">

//         {/* left */}
//         <button
//           onClick={() =>
//             setPage((prev) =>
//               Math.max(prev - 1, 1)
//             )
//           }
//           disabled={page === 1}
//           className="w-11 h-11 rounded-2xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:scale-105 transition disabled:opacity-40"
//         >
//           <ChevronLeft size={18} />
//         </button>

//         {/* numbers */}
//         {Array.from(
//           { length: totalPages },
//           (_, i) => i + 1
//         )
//           .slice(
//             Math.max(page - 2, 0),
//             Math.max(page - 2, 0) + 5
//           )
//           .map((num) => (
//             <button
//               key={num}
//               onClick={() =>
//                 setPage(num)
//               }
//               className={`w-11 h-11 rounded-2xl text-sm font-medium transition-all duration-300
//               ${
//                 page === num
//                   ? "bg-black text-white dark:bg-white dark:text-black shadow-lg scale-105"
//                   : "bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 text-gray-800 dark:text-gray-200 hover:scale-105"
//               }`}
//             >
//               {num}
//             </button>
//           ))}

//         {/* right */}
//         <button
//           onClick={() =>
//             setPage((prev) =>
//               Math.min(
//                 prev + 1,
//                 totalPages
//               )
//             )
//           }
//           disabled={
//             page === totalPages
//           }
//           className="w-11 h-11 rounded-2xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:scale-105 transition disabled:opacity-40"
//         >
//           <ChevronRight size={18} />
//         </button>
//       </div>
//     </div>
//   );
// }









































"use client";

import { useState, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Loader from "@ui/Loader";
import CountryGrid from "@components/country/CountryGrid";
import RegionFilter from "@components/country/RegionFilter";
import SortSelect from "@components/country/SortSelect";

function sortCountries(countries, sort) {
  if (!Array.isArray(countries)) return [];

  if (sort === "pop-asc") {
    return [...countries].sort((a, b) => a.population - b.population);
  }

  if (sort === "pop-desc") {
    return [...countries].sort((a, b) => b.population - a.population);
  }

  if (sort === "alpha-asc") {
    return [...countries].sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
  }

  if (sort === "alpha-desc") {
    return [...countries].sort((a, b) =>
      b.name.common.localeCompare(a.name.common)
    );
  }

  return countries;
}

export default function CountriesClient({ initial = [] }) {
  const [region, setRegion] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);

  const countriesPerPage = 12;

  const [allCountries, setAllCountries] = useState([]);

  // گرفتن دیتا + loading واقعی
  useEffect(() => {
    setLoading(true);

    // اگر initial از server آمد استفاده کن
    if (initial.length > 0) {
      setAllCountries(initial);
      setLoading(false);
      return;
    }

    // fallback fetch
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setAllCountries(data);
        setLoading(false);
      });
  }, [initial]);

  // filter + sort
  const filtered = useMemo(() => {
    let arr = Array.isArray(allCountries) ? allCountries : [];

    if (region) {
      arr = arr.filter((c) => c.region === region);
    }

    return sortCountries(arr, sort);
  }, [allCountries, region, sort]);

  // reset page
  useEffect(() => {
    setPage(1);
  }, [region, sort]);

  const totalPages = Math.ceil(filtered.length / countriesPerPage);

  const start = (page - 1) * countriesPerPage;
  const end = start + countriesPerPage;

  const currentCountries = filtered.slice(start, end);

  // ✅ LOADING STATE واقعی
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="space-y-8">

      {/* heading */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Explore All Countries
        </h1>

        <p className="mt-9 mb-14 text-gray-600 dark:text-gray-400 text-lg">
          Discover 250+ countries around the world
        </p>
      </div>

      {/* filter card */}
      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-5 shadow-sm">

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

          <div className="flex-1">
            <p className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
              Filter by Region
            </p>

            <RegionFilter region={region} setRegion={setRegion} />
          </div>

          <div className="w-full lg:w-[220px]">
            <p className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
              Sort By
            </p>

            <SortSelect value={sort} setValue={setSort} />
          </div>

        </div>

        <div className="mt-5 pt-4 border-t border-gray-200 dark:border-zinc-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {currentCountries.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {filtered.length}
            </span>{" "}
            countries
          </p>
        </div>

      </div>

      {/* grid */}
      <CountryGrid countries={currentCountries} />

      {/* pagination */}
      <div className="flex items-center justify-center gap-3 pt-4 flex-wrap">

        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="w-11 h-11 rounded-2xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center justify-center"
        >
          <ChevronLeft size={18} />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .slice(Math.max(page - 2, 0), Math.max(page - 2, 0) + 5)
          .map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`w-11 h-11 rounded-2xl text-sm font-medium
              ${
                page === num
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700"
              }`}
            >
              {num}
            </button>
          ))}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="w-11 h-11 rounded-2xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center justify-center"
        >
          <ChevronRight size={18} />
        </button>

      </div>
    </div>
  );
}
