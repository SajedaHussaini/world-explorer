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

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

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
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-4
          sm:gap-6
        "
      >
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
      <div
        className="
          text-center
          py-16
          sm:py-20

          text-red-500
        "
      >
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">

      {/* search */}
      <div
        className="
          max-w-6xl
          mx-auto

          rounded-2xl
          sm:rounded-3xl

          border
          border-zinc-200
          dark:border-zinc-800

          bg-white
          dark:bg-zinc-900

          p-4
          sm:p-5

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

              pl-11
              sm:pl-13

              pr-4

              py-3
              sm:py-4

              rounded-2xl

              border
              border-zinc-300
              dark:border-zinc-700

              bg-zinc-50
              dark:bg-zinc-950

              text-sm
              sm:text-base

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
            <div className="mt-4 sm:mt-5">

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

                      text-xs
                      sm:text-sm
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
                        break-all
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
      <div
        className="
          text-center

          text-xs
          sm:text-sm

          text-zinc-500
          dark:text-zinc-400
        "
      >
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
        <div
          className="
            text-center

            py-16
            sm:py-20

            text-sm
            sm:text-base

            text-zinc-500
            dark:text-zinc-400
          "
        >
          No countries found for "
          {debouncedQuery}"
        </div>
      )}
    </div>
  );
}
