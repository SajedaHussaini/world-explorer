// "use client";

// import { useState, useEffect, useMemo } from "react";
// import CountryGrid from "@components/country/CountryGrid";

// export default function CountrySearch() {
//   const [query, setQuery] = useState("");
//   const [allCountries, setAllCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     let ignore = false;

//     async function fetchData() {
//       try {
//         setLoading(true);

//         const res = await fetch(
//           "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3"
//         );

//         if (!res.ok) {
//           throw new Error("Failed to fetch countries");
//         }

//         const data = await res.json();

//         if (!ignore) {
//           setAllCountries(Array.isArray(data) ? data : []);
//         }
//       } catch (e) {
//         console.error(e);

//         if (!ignore) {
//           setError("Failed to load countries");
//         }
//       } finally {
//         if (!ignore) {
//           setLoading(false);
//         }
//       }
//     }

//     fetchData();

//     return () => {
//       ignore = true;
//     };
//   }, []);

//   const filtered = useMemo(() => {
//     return allCountries.filter((country) =>
//       country?.name?.common
//         ?.toLowerCase()
//         .includes(query.toLowerCase())
//     );
//   }, [allCountries, query]);

//   if (loading) {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {Array.from({ length: 12 }).map((_, i) => (
//           <div
//             key={i}
//             className="h-52 rounded-2xl bg-zinc-200 dark:bg-zinc-800 animate-pulse"
//           />
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-20 text-red-500">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-8">

//       {/* SEARCH INPUT */}
//       <div className="flex justify-center">
//         <input
//           type="search"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search country..."
//           className="
//             w-full
//             max-w-xl
//             px-5
//             py-3
//             rounded-2xl
//             border
//             border-gray-300
//             dark:border-zinc-700
//             bg-white
//             dark:bg-zinc-900
//             text-gray-900
//             dark:text-white
//             outline-none
//             focus:ring-2
//             focus:ring-blue-500
//             transition
//           "
//         />
//       </div>

//       {/* RESULTS */}
//       {filtered.length > 0 ? (
//         <CountryGrid countries={filtered} />
//       ) : (
//         <div className="text-center py-20 text-gray-500 dark:text-gray-400">
//           No countries found.
//         </div>
//       )}
//     </div>
//   );
// }



























// "use client";

// import { useState, useEffect, useMemo } from "react";
// import CountryGrid from "@components/country/CountryGrid";

// export default function CountrySearch() {
//   const [query, setQuery] = useState("");
//   const [allCountries, setAllCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // FETCH DATA
//   useEffect(() => {
//     let ignore = false;

//     async function fetchCountries() {
//       try {
//         setLoading(true);
//         setError("");

//         const res = await fetch(
//           "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3"
//         );

//         if (!res.ok) throw new Error("API Error");

//         const data = await res.json();

//         if (!ignore) {
//           setAllCountries(Array.isArray(data) ? data : []);
//         }
//       } catch (err) {
//         if (!ignore) setError("Failed to load countries");
//       } finally {
//         if (!ignore) setLoading(false);
//       }
//     }

//     fetchCountries();

//     return () => {
//       ignore = true;
//     };
//   }, []);

//   // FILTER (optimized)
//   const filtered = useMemo(() => {
//     const q = query.trim().toLowerCase();

//     if (!q) return allCountries;

//     return allCountries.filter((c) =>
//       c?.name?.common?.toLowerCase().includes(q)
//     );
//   }, [allCountries, query]);

//   // LOADING STATE (skeleton)
//   if (loading) {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {Array.from({ length: 12 }).map((_, i) => (
//           <div
//             key={i}
//             className="h-52 rounded-2xl bg-zinc-200 dark:bg-zinc-800 animate-pulse"
//           />
//         ))}
//       </div>
//     );
//   }

//   // ERROR STATE
//   if (error) {
//     return (
//       <div className="text-center py-16 text-red-500 font-medium">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">

//       {/* SEARCH BOX */}
//       <div className="flex justify-center">
//         <input
//           type="search"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search country..."
//           className="
//             w-full
//             max-w-xl
//             px-5
//             py-3
//             rounded-2xl
//             border
//             border-zinc-300
//             dark:border-zinc-700
//             bg-white
//             dark:bg-zinc-900
//             text-zinc-900
//             dark:text-white
//             outline-none
//             focus:ring-2
//             focus:ring-blue-500
//             transition
//           "
//         />
//       </div>

//       {/* EMPTY STATE */}
//       {filtered.length === 0 ? (
//         <div className="text-center py-16 text-gray-500 dark:text-gray-400">
//           No countries found for "{query}"
//         </div>
//       ) : (
//         <CountryGrid countries={filtered} />
//       )}
//     </div>
//   );
// }





















"use client";

import {
  useState,
  useEffect,
  useMemo,
} from "react";

import {
  Search,
  X,
  History,
} from "lucide-react";

import { useRouter, useSearchParams } from "next/navigation";

import CountryGrid from "@components/country/CountryGrid";

export default function CountrySearch() {

  const router = useRouter();
  const searchParams = useSearchParams();

  /* states */
  const [query, setQuery] = useState(
    searchParams.get("q") || ""
  );

  const [debouncedQuery, setDebouncedQuery] =
    useState(query);

  const [allCountries, setAllCountries] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [history, setHistory] =
    useState([]);

  /* fetch countries */
  useEffect(() => {
    let ignore = false;

    async function fetchCountries() {
      try {
        setLoading(true);

        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3"
        );

        if (!res.ok) {
          throw new Error("Failed");
        }

        const data = await res.json();

        if (!ignore) {
          setAllCountries(
            Array.isArray(data)
              ? data
              : []
          );
        }
      } catch (err) {
        console.error(err);

        if (!ignore) {
          setError(
            "Failed to load countries"
          );
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchCountries();

    return () => {
      ignore = true;
    };
  }, []);

  /* debounce */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);

      const params =
        new URLSearchParams(
          searchParams.toString()
        );

      if (query.trim()) {
        params.set("q", query);
      } else {
        params.delete("q");
      }

      router.replace(
        `?${params.toString()}`
      );
    }, 400);

    return () =>
      clearTimeout(timer);
  }, [query]);

  /* search history */
  useEffect(() => {
    if (
      debouncedQuery.trim() &&
      !history.includes(
        debouncedQuery
      )
    ) {
      setHistory((prev) => [
        debouncedQuery,
        ...prev.slice(0, 4),
      ]);
    }
  }, [debouncedQuery]);

  /* filtering */
  const filtered = useMemo(() => {
    const q =
      debouncedQuery
        .trim()
        .toLowerCase();

    if (!q) {
      return allCountries;
    }

    return allCountries.filter(
      (country) =>
        country?.name?.common
          ?.toLowerCase()
          .includes(q)
    );
  }, [
    allCountries,
    debouncedQuery,
  ]);

  /* loading */
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({
          length: 12,
        }).map((_, i) => (
          <div
            key={i}
            className="
              h-52
              rounded-2xl
              bg-zinc-200
              dark:bg-zinc-800
              animate-pulse
            "
          />
        ))}
      </div>
    );
  }

  /* error */
  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* search */}
      {/* <div className="max-w-2xl mx-auto">

        <div className="relative">

          icon
          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-zinc-400
            "
          />

          input
          <input
            type="search"
            value={query}
            onChange={(e) =>
              setQuery(
                e.target.value
              )
            }
            placeholder="Search countries..."
            className="
              w-full
              pl-11
              pr-12
              py-4
              rounded-2xl
              border
              border-zinc-300
              dark:border-zinc-700
              bg-white
              dark:bg-zinc-900
              text-zinc-900
              dark:text-white
              outline-none
              focus:ring-2
              focus:ring-blue-500
              transition
            "
          />

          clear
          {query && (
            <button
              onClick={() =>
                setQuery("")
              }
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-zinc-400
                hover:text-zinc-700
              "
            >
              <X size={18} />
            </button>
          )}
        </div>

        history
        {history.length > 0 &&
          !query && (
            <div className="mt-4">

              <div className="flex items-center gap-2 mb-3">
                <History
                  size={16}
                  className="text-zinc-400"
                />

                <p className="text-sm text-zinc-500">
                  Recent Searches
                </p>
              </div>

              <div className="flex flex-wrap gap-2">

                {history.map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() =>
                        setQuery(item)
                      }
                      className="
                        px-4
                        py-2
                        rounded-xl
                        bg-zinc-100
                        dark:bg-zinc-800
                        text-sm
                        hover:bg-zinc-200
                        dark:hover:bg-zinc-700
                        transition
                      "
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
      </div> */}

      <div
  className="
    max-w-6xl
    mx-auto
    rounded-3xl
    border
    border-zinc-200
    dark:border-zinc-800
    bg-white
    dark:bg-zinc-900
    p-5
    shadow-sm
  "
>

  {/* search */}
  <div className="relative">

    {/* search icon */}
    <Search
      size={18}
      className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-zinc-400
        pointer-events-none
      "
    />

    {/* input */}
    <input
      type="search"
      value={query}
      onChange={(e) =>
        setQuery(e.target.value)
      }
      placeholder="Search countries..."
      className="
        w-full
        pl-13
        py-4
        rounded-2xl
        border
        border-zinc-300
        dark:border-zinc-700
        bg-zinc-50
        dark:bg-zinc-950
        text-zinc-900
        dark:text-white
        outline-none
        focus:ring-2
        focus:ring-blue-500
        transition
      "
    />
  </div>

  {/* recent searches */}
  {history.length > 0 &&
    !query && (
      <div className="mt-5">

        <div className="flex items-center gap-2 mb-3">
          <History
            size={16}
            className="text-zinc-400"
          />

          <p className="text-sm text-zinc-500">
            Recent Searches
          </p>
        </div>

        <div className="flex flex-wrap gap-2">

          {history.map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-2
                px-3
                py-2
                rounded-xl
                bg-zinc-100
                dark:bg-zinc-800
                text-sm
              "
            >

              {/* history button */}
              <button
                onClick={() =>
                  setQuery(item)
                }
                className="
                  hover:text-blue-600
                  transition
                "
              >
                {item}
              </button>

              {/* remove button */}
              <button
                onClick={() =>
                  setHistory((prev) =>
                    prev.filter(
                      (h) => h !== item
                    )
                  )
                }
                className="
                  text-zinc-400
                  hover:text-red-500
                  transition
                "
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    )}
</div>



      {/* results text */}
      <div className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        {filtered.length} countries found
      </div>

      {/* results */}
      {filtered.length > 0 ? (
        <CountryGrid
          countries={filtered}
          highlight={
            debouncedQuery
          }
        />
      ) : (
        <div className="text-center py-20 text-zinc-500 dark:text-zinc-400">
          No countries found for "
          {debouncedQuery}"
        </div>
      )}
    </div>
  );
}
