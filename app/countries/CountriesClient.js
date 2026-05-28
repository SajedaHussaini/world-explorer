"use client";

import { useState, useMemo, useEffect } from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import CountryGrid from "@components/country/CountryGrid";
import RegionFilter from "@components/country/RegionFilter";
import SortSelect from "@components/country/SortSelect";

function sortCountries(
  countries = [],
  sort = ""
) {
  if (!Array.isArray(countries)) {
    return [];
  }

  const sorted = [...countries];

  switch (sort) {

    case "pop-asc":
      return sorted.sort(
        (a, b) =>
          (a.population || 0) -
          (b.population || 0)
      );

    case "pop-desc":
      return sorted.sort(
        (a, b) =>
          (b.population || 0) -
          (a.population || 0)
      );

    case "alpha-asc":
      return sorted.sort((a, b) =>
        a.name.common.localeCompare(
          b.name.common
        )
      );

    case "alpha-desc":
      return sorted.sort((a, b) =>
        b.name.common.localeCompare(
          a.name.common
        )
      );

    default:
      return sorted;
  }
}

export default function CountriesClient({
  initial = [],
}) {

  const [region, setRegion] =
    useState("");

  const [sort, setSort] =
    useState("");

  const [page, setPage] =
    useState(1);

  const countriesPerPage = 12;

  const filtered = useMemo(() => {

    let arr = Array.isArray(initial)
      ? initial
      : [];

    if (region) {
      arr = arr.filter(
        (c) => c.region === region
      );
    }

    return sortCountries(arr, sort);

  }, [initial, region, sort]);

  useEffect(() => {
    setPage(1);
  }, [region, sort]);

  const totalPages =
    Math.ceil(
      filtered.length /
      countriesPerPage
    );

  const start =
    (page - 1) *
    countriesPerPage;

  const end =
    start + countriesPerPage;

  const currentCountries =
    filtered.slice(start, end);

  return (
    <div
      className="
        w-full
        space-y-8
        sm:space-y-10
      "
    >

      {/* HEADER */}
      <div
        className="
          text-center
          space-y-4
          py-4
        "
      >

        <h1
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            tracking-tight
            text-gray-900
            dark:text-white
          "
        >
          Explore All Countries
        </h1>

        <p
          className="
            text-sm
            sm:text-base
            lg:text-lg
            text-gray-600
            dark:text-gray-400
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >
          Discover 250+ countries
          around the world
        </p>

      </div>

      {/* FILTER SECTION */}
      <div
        className="
          bg-white
          dark:bg-zinc-900
          border
          border-gray-200
          dark:border-zinc-800
          rounded-2xl
          sm:rounded-3xl
          p-4
          sm:p-6
          shadow-sm
        "
      >

        <div
          className="
            flex
            flex-col
            xl:flex-row
            xl:items-start
            xl:justify-between
            gap-6
          "
        >

          {/* REGION */}
          <div className="flex-1 min-w-0">

            <p
              className="
                text-sm
                font-semibold
                mb-3
                text-gray-700
                dark:text-gray-300
              "
            >
              Filter by Region
            </p>

            <RegionFilter
              region={region}
              setRegion={setRegion}
            />

          </div>

          {/* SORT */}
          <div
            className="
              w-full
              xl:w-[240px]
              shrink-0
            "
          >

            <p
              className="
                text-sm
                font-semibold
                mb-3
                text-gray-700
                dark:text-gray-300
              "
            >
              Sort By
            </p>

            <SortSelect
              value={sort}
              setValue={setSort}
            />

          </div>

        </div>

      </div>

      {/* GRID */}
      <CountryGrid
        countries={currentCountries}
      />

      {/* PAGINATION */}
      {totalPages > 1 && (

        <div
          className="
      flex
      items-center
      justify-center
      gap-1.5
      sm:gap-2
      pt-2
      overflow-x-auto
      scrollbar-hide
      px-1
    "
        >

          {/* PREV */}
          <button
            onClick={() =>
              setPage((p) =>
                Math.max(p - 1, 1)
              )
            }
            disabled={page === 1}
            className="
        min-w-[34px]
        h-[34px]
        sm:min-w-[42px]
        sm:h-[42px]
        rounded-lg
        sm:rounded-xl
        border
        border-gray-300
        dark:border-zinc-700
        bg-white
        dark:bg-zinc-900
        flex
        items-center
        justify-center
        disabled:opacity-50
        disabled:cursor-not-allowed
        transition
        shrink-0
      "
          >
            <ChevronLeft size={16} />
          </button>

          {/* PAGE NUMBERS */}
          {Array.from(
            { length: totalPages },
            (_, i) => i + 1
          )
            .slice(
              Math.max(page - 1, 0),
              Math.max(page - 1, 0) + 3
            )
            .map((num) => (

              <button
                key={num}
                onClick={() =>
                  setPage(num)
                }
                className={`
            min-w-[34px]
            h-[34px]
            sm:min-w-[42px]
            sm:h-[42px]
            rounded-lg
            sm:rounded-xl
            text-xs
            sm:text-sm
            font-medium
            transition
            shrink-0

            ${page === num
                    ? `
                  bg-black
                  text-white
                  dark:bg-white
                  dark:text-black
                `
                    : `
                  bg-white
                  dark:bg-zinc-900
                  border
                  border-gray-300
                  dark:border-zinc-700
                `
                  }
          `}
              >
                {num}
              </button>
            ))}

          {/* NEXT */}
          <button
            onClick={() =>
              setPage((p) =>
                Math.min(
                  p + 1,
                  totalPages
                )
              )
            }
            disabled={
              page === totalPages
            }
            className="
        min-w-[34px]
        h-[34px]
        sm:min-w-[42px]
        sm:h-[42px]
        rounded-lg
        sm:rounded-xl
        border
        border-gray-300
        dark:border-zinc-700
        bg-white
        dark:bg-zinc-900
        flex
        items-center
        justify-center
        disabled:opacity-50
        disabled:cursor-not-allowed
        transition
        shrink-0
      "
          >
            <ChevronRight size={16} />
          </button>

        </div>
      )}

    </div>
  );
}