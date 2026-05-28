"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Globe,
  Users,
  Landmark,
  Earth,
  Search,
  Heart,
  MoonStar,
  ChevronDown,
} from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  const [countries, setCountries] =
    useState([]);

  const [selectedCountry, setSelectedCountry] =
    useState("");

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca3"
        );

        if (!res.ok) {
          throw new Error("Failed");
        }

        const data = await res.json();

        const sorted = data.sort(
          (a, b) =>
            a.name.common.localeCompare(
              b.name.common
            )
        );

        setCountries(sorted);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCountries();
  }, []);

  return (
    <div className="space-y-16 md:space-y-24">

      {/* HERO */}
      <section
        className="
          min-h-screen
          flex
          items-center
          justify-center
          px-4
          py-16
        "
      >
        <div className="w-full max-w-6xl text-center">

          {/* TITLE */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              tracking-tight
              text-zinc-900
              dark:text-white
              mb-6
            "
          >
            World Explorer
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-base
              sm:text-lg
              md:text-xl
              leading-relaxed
              text-zinc-600
              dark:text-zinc-400
              max-w-3xl
              mx-auto
              mb-10
            "
          >
            Explore countries around the world
            and discover their capitals,
            populations, currencies,
            languages, regions, and much more.
          </p>

          {/* STATS */}
          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-4
              mb-12
            "
          >

            {[
              {
                icon: Globe,
                value: "195+",
                label: "Countries",
              },
              {
                icon: Users,
                value: "8B+",
                label: "Population",
              },
              {
                icon: Landmark,
                value: "193",
                label: "UN Members",
              },
              {
                icon: Earth,
                value: "7",
                label: "Continents",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-zinc-900
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    rounded-2xl
                    p-4
                    sm:p-5
                    shadow-sm
                  "
                >
                  <Icon
                    className="
                      mx-auto
                      mb-3
                      text-zinc-700
                      dark:text-zinc-300
                    "
                    size={28}
                  />

                  <h3 className="text-xl sm:text-2xl font-bold">
                    {item.value}
                  </h3>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* START */}
          <div className="mb-6">
            <h2
              className="
                text-2xl
                md:text-3xl
                font-bold
                text-zinc-900
                dark:text-white
                mb-3
              "
            >
              Start Exploring
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400">
              Select a country and begin your journey.
            </p>
          </div>

          {/* SELECT */}
          <div
            className="
              max-w-xl
              mx-auto
              relative
              mb-6
            "
          >
            <Globe
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-zinc-500
                pointer-events-none
              "
              size={20}
            />

            <ChevronDown
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-zinc-500
                pointer-events-none
              "
              size={20}
            />

            <select
              value={selectedCountry}
              onChange={(e) => {
                const value =
                  e.target.value.toUpperCase();

                setSelectedCountry(value);

                if (value) {
                  router.push(
                    `/countries/${value}`
                  );
                }
              }}
              className="
                w-full
                appearance-none
                bg-white
                dark:bg-zinc-900
                border
                border-zinc-300
                dark:border-zinc-700
                rounded-2xl
                py-4
                pl-12
                pr-12
                text-sm
                sm:text-base
                text-zinc-800
                dark:text-zinc-100
                outline-none
                focus:ring-2
                focus:ring-zinc-400
                transition
              "
            >
              <option value="">
                Select a country to explore...
              </option>

              {countries.map((country) => (
                <option
                  key={country.cca3}
                  value={country.cca3}
                >
                  {country.name.common}
                </option>
              ))}
            </select>
          </div>

          {/* BUTTON */}
          <Link
            href="/countries"
            className="
              inline-flex
              w-full
              sm:w-auto
              items-center
              justify-center
              gap-2
              bg-zinc-900
              dark:bg-zinc-100
              text-white
              dark:text-black
              px-8
              py-4
              rounded-2xl
              font-semibold
              hover:scale-[1.02]
              transition
            "
          >
            <Globe size={18} />
            Browse All Countries
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 pb-16">

        <div
          className="
            max-w-7xl
            mx-auto
            bg-white
            dark:bg-zinc-900
            border
            border-zinc-200
            dark:border-zinc-800
            rounded-3xl
            p-6
            sm:p-8
            md:p-10
          "
        >

          {/* TITLE */}
          <div className="text-center mb-12">
            <h2
              className="
                text-3xl
                md:text-4xl
                font-black
                text-zinc-900
                dark:text-white
                mb-4
              "
            >
              Powerful Features
            </h2>

            <p
              className="
                text-zinc-600
                dark:text-zinc-400
                max-w-2xl
                mx-auto
              "
            >
              Everything you need to explore
              countries efficiently and beautifully.
            </p>
          </div>

          {/* GRID */}
          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >

            {[
              {
                icon: Globe,
                title: "Interactive Maps",
                desc: "Explore countries with interactive map navigation.",
              },
              {
                icon: Users,
                title: "Detailed Statistics",
                desc: "Population, area, GDP and more insights.",
              },
              {
                icon: Earth,
                title: "Global Coverage",
                desc: "Access data for all countries worldwide.",
              },
              {
                icon: Search,
                title: "Smart Search",
                desc: "Find countries by name or capital.",
              },
              {
                icon: Heart,
                title: "Favorites",
                desc: "Save countries for quick access.",
              },
              {
                icon: MoonStar,
                title: "Dark Mode",
                desc: "Switch between light and dark themes.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    p-6
                    bg-zinc-50
                    dark:bg-zinc-950
                    hover:shadow-md
                    transition
                  "
                >
                  <div className="flex flex-col items-center text-center">
                    <Icon
                      size={32}
                      className="
                        mb-3
                        text-zinc-700
                        dark:text-zinc-300
                      "
                    />

                    <h3
                      className="
                        font-bold
                        mb-2
                        text-zinc-900
                        dark:text-white
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        text-sm
                        text-zinc-600
                        dark:text-zinc-400
                      "
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
