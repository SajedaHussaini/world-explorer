import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { formatPopulation } from "@lib/formatters";

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
    typeof country.population ===
    "number"
      ? formatPopulation(
          country.population
        )
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

  const parts =
    text.split(regex);

  return (
    <>
      {parts.map(
        (part, index) =>
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
    <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden w-full max-w-[260px] mx-auto hover:-translate-y-1">

      {/* image */}
      <div className="relative">
        <img
          src={country.flags?.png}
          alt={`${country.name.common} flag`}
          className="w-full h-36 object-cover"
          loading="lazy"
        />

        {/* region badge */}
        <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
          {country.region}
        </span>
      </div>

      <div className="p-4">

        {/* country name */}
        <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
          {/* {country.name.common} */}
          <HighlightedText
  text={country.name.common}
  highlight={highlight}
/>
        </h2>

        {/* info */}
        <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">

          <p>
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

        {/* divider */}
        <div className="border-t border-gray-200 dark:border-zinc-700 my-3"></div>

        {/* actions */}
        <div className="flex items-center justify-between gap-2">

          <Link
            // href={`/countries/${country.cca3}`}
            // href={`/countries/${country.cca3?.toLowerCase()}`}
            //  href={`/countries/${country.cca3?.toLowerCase()`}
            href={`/countries/${country.cca3?.toUpperCase()}`}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-semibold flex items-center gap-1 transition"
          >
            View Details
            <span>{">"}</span>
          </Link>

          <div className="min-w-[120px]">
            <FavoriteButton
              cca3={country.cca3}
            />
          </div>

        </div>
      </div>
    </div>
  );
}


