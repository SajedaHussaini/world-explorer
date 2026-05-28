// favoriteClients.jsx
"use client";

import { useFavorites } from "@context/FavoritesContext";
import { useEffect, useState } from "react";

import CountryGrid from "@components/country/CountryGrid";

import {
  Heart,
  Globe,
} from "lucide-react";

export default function FavoritesClient() {
  const { favorites } = useFavorites();

  const [countries, setCountries] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        if (favorites.length === 0) {
          setCountries([]);
          setLoading(false);
          return;
        }

        const res = await fetch(
          "https://restcountries.com/v3.1/alpha?codes=" +
            favorites.join(",")
        );

        const data = await res.json();

        setCountries(
          Array.isArray(data) ? data : []
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, [favorites]);

  /* loading */
  if (loading) {
    return (
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-4
          sm:gap-6
          lg:gap-8
        "
      >
        {Array.from({ length: 8 }).map(
          (_, i) => (
            <div
              key={i}
              className="
                h-52
                sm:h-56
                rounded-2xl
                sm:rounded-3xl
                bg-zinc-200
                dark:bg-zinc-800
                animate-pulse
              "
            />
          )
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8 lg:space-y-10">

      {/* HERO */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          sm:rounded-[32px]
          border
          border-zinc-200
          dark:border-zinc-800
          bg-white
          dark:bg-zinc-900
          p-5
          sm:p-8
          md:p-10
          shadow-sm
        "
      >

        {/* glow */}
        <div
          className="
            absolute
            -top-20
            -right-20
            w-40
            h-40
            sm:w-64
            sm:h-64
            rounded-full
            bg-zinc-600/15
            blur-3xl
          "
        />

        <div className="relative z-10">

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              gap-4
            "
          >

            <div
              className="
                w-12
                h-12
                sm:w-14
                sm:h-14
                rounded-2xl
                bg-red-500
                flex
                items-center
                justify-center
                text-white
                shadow-lg
                shrink-0
              "
            >
              <Heart
                size={22}
                className="fill-white sm:w-7 sm:h-7"
              />
            </div>

            <div>
              <h1
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  font-black
                  text-zinc-900
                  dark:text-white
                  break-words
                "
              >
                Favorite Countries
              </h1>

              <p
                className="
                  mt-2
                  text-sm
                  sm:text-base
                  text-zinc-500
                  dark:text-zinc-400
                  leading-relaxed
                "
              >
                Your personal saved countries
                collection
              </p>
            </div>
          </div>

          {/* stats */}
          <div
            className="
              mt-6
              sm:mt-8
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-3
              sm:gap-4
            "
          >

            <div
              className="
                rounded-2xl
                bg-zinc-100
                dark:bg-zinc-800
                px-4
                sm:px-5
                py-4
                min-w-0
              "
            >
              <p
                className="
                  text-sm
                  text-zinc-500
                  dark:text-zinc-400
                "
              >
                Saved Countries
              </p>

              <h3
                className="
                  mt-1
                  text-2xl
                  sm:text-3xl
                  font-black
                  text-zinc-900
                  dark:text-white
                "
              >
                {countries.length}
              </h3>
            </div>

            <div
              className="
                rounded-2xl
                bg-zinc-100
                dark:bg-zinc-800
                px-4
                sm:px-5
                py-4
                min-w-0
              "
            >
              <p
                className="
                  text-sm
                  text-zinc-500
                  dark:text-zinc-400
                "
              >
                Regions Explored
              </p>

              <h3
                className="
                  mt-1
                  text-2xl
                  sm:text-3xl
                  font-black
                  text-zinc-900
                  dark:text-white
                "
              >
                {
                  new Set(
                    countries.map(
                      (c) => c.region
                    )
                  ).size
                }
              </h3>
            </div>

          </div>
        </div>
      </div>

      {/* EMPTY */}
      {countries.length === 0 ? (
        <div
          className="
            rounded-3xl
            sm:rounded-[32px]
            border
            border-dashed
            border-zinc-300
            dark:border-zinc-700
            bg-white
            dark:bg-zinc-900
            py-16
            sm:py-24
            px-4
            sm:px-6
            text-center
          "
        >

          <div
            className="
              w-16
              h-16
              sm:w-20
              sm:h-20
              rounded-full
              bg-zinc-100
              dark:bg-zinc-800
              flex
              items-center
              justify-center
              mx-auto
            "
          >
            <Globe
              size={30}
              className="
                text-zinc-500
                dark:text-zinc-400
                sm:w-10
                sm:h-10
              "
            />
          </div>

          <h2
            className="
              mt-5
              sm:mt-6
              text-xl
              sm:text-2xl
              font-bold
              text-zinc-900
              dark:text-white
            "
          >
            No Favorites Yet
          </h2>

          <p
            className="
              mt-3
              max-w-md
              mx-auto
              text-sm
              sm:text-base
              leading-relaxed
              text-zinc-500
              dark:text-zinc-400
            "
          >
            Start exploring countries and
            save your favorite ones to
            build your personal collection.
          </p>
        </div>
      ) : (
        <CountryGrid countries={countries} />
      )}
    </div>
  );
}
