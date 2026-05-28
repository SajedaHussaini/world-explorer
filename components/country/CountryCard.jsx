import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { formatPopulation } from "@lib/formatters";
// import Image from "next/image"

export default function CountryCard({
  country,
  highlight,
}) {
  const capital =
    Array.isArray(country.capital) &&
    country.capital.length > 0
      ? country.capital[0]
      : "No Capital";

  const population =
    typeof country.population === "number"
      ? formatPopulation(country.population)
      : "Unknown";

  function HighlightedText({
    text,
    highlight,
  }) {
    if (!highlight) {
      return text;
    }

    const regex = new RegExp(
      `(${highlight})`,
      "gi"
    );

    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <mark
              key={index}
              className="
                bg-yellow-300
                text-black
                rounded
                px-1
              "
            >
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  }

  return (
    <div
      className="
        w-full
        bg-white
        dark:bg-zinc-900
        border
        border-gray-200
        dark:border-zinc-800
        rounded-2xl
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        overflow-hidden
        hover:-translate-y-1
      "
    >

      {/* IMAGE */}
      <div className="relative">

        <img
          src={country.flags?.png}
          alt={`${country.name.common} flag`}
          className="
            w-full
            h-44
            sm:h-38
            md:h-40
            object-cover
          "
          loading="lazy"
        />


{/* <Image
  src={country.flags?.png}
  alt={`${country.name.common} flag`}
  width={500}
  height={300}
  className="
    w-full
    h-44
    sm:h-38
    md:h-40
    object-cover
  "
/> */}

        {/* REGION */}
        <span
          className="
            absolute
            top-3
            right-3
            bg-black/70
            text-white
            text-xs
            px-3
            py-1
            rounded-full
            backdrop-blur-sm
          "
        >
          {country.region}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5">

        {/* NAME */}
        <h2
          className="
            text-lg
            sm:text-xl
            font-bold
            mb-3
            text-gray-900
            dark:text-white
            line-clamp-1
          "
        >
          <HighlightedText
            text={country.name.common}
            highlight={highlight}
          />
        </h2>

        {/* INFO */}
        <div
          className="
            space-y-2
            text-sm
            sm:text-base
            text-gray-700
            dark:text-gray-300
          "
        >

          <p className="truncate">
            <span className="font-semibold">
              Capital:
            </span>{" "}
            {capital}
          </p>

          <p>
            <span className="font-semibold">
              Population:
            </span>{" "}
            {population}
          </p>

        </div>

        {/* DIVIDER */}
        <div
          className="
            border-t
            border-gray-200
            dark:border-zinc-700
            my-4
          "
        />

        {/* ACTIONS */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-3
          "
        >

          <Link
            href={`/countries/${country.cca3?.toUpperCase()}`}
            className="
              inline-flex
              items-center
              gap-1
              text-blue-600
              dark:text-blue-400
              hover:text-blue-800
              dark:hover:text-blue-300
              text-sm
              font-semibold
              transition
            "
          >
            View Details
            <span>{">"}</span>
          </Link>

          <div className="w-full sm:w-auto">
            <FavoriteButton
              cca3={country.cca3}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
