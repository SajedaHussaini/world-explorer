import Link from "next/link";
// import Image from "next/image"

import {
  Globe,
  BadgeInfo,
  MapPinned,
  Landmark,
  Users,
  Clock3,
  Languages,
  Coins,
  Map,
  Earth,
  ArrowRight,
} from "lucide-react";

import {
  formatPopulation,
  formatCurrencies,
} from "@lib/formatters";

export default function CountryDetails({
  country,
}) {
  const languages = country.languages
    ? Object.values(country.languages)
    : [];

  const borders =
    country.borders || [];

  return (
    <div className="space-y-8 sm:space-y-10">

      {/* TITLE */}
      <div className="text-center">

        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-black
            text-zinc-900
            dark:text-white
            break-words
          "
        >
          {country.name.common}
        </h1>

        <p
          className="
            mt-3
            text-base
            sm:text-lg
            text-zinc-500
            dark:text-zinc-400
            break-words
          "
        >
          {country.name.official}
        </p>
      </div>

      {/* MAIN GRID */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-5
          sm:gap-8
        "
      >

        {/* COUNTRY INFO */}
        <div
          className="
            rounded-2xl
            border
            border-zinc-200
            dark:border-zinc-800
            bg-white
            dark:bg-zinc-900
            p-4
            sm:p-6
            shadow-sm
          "
        >

          {/* HEADING */}
          <div className="flex items-center gap-3 mb-6">

            <div
              className="
                w-9
                h-9
                rounded-2xl
                bg-blue-600
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <BadgeInfo
                size={19}
                className="text-white"
              />
            </div>

            <div>
              <h2
                className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-zinc-900
                  dark:text-white
                "
              >
                Country Information
              </h2>

              <p
                className="
                  text-sm
                  text-zinc-500
                  dark:text-zinc-400
                "
              >
                Important country details
              </p>
            </div>
          </div>

          {/* INFO ROWS */}
          <div className="space-y-4">

            <InfoRow
              icon={<Landmark size={18} />}
              title="Capital"
              value={country.capital?.[0] || "—"}
            />

            <InfoRow
              icon={<Users size={18} />}
              title="Population"
              value={formatPopulation(
                country.population
              )}
            />

            <InfoRow
              icon={<Earth size={18} />}
              title="Subregion"
              value={
                country.subregion || "—"
              }
            />
          </div>

          {/* DIVIDER */}
          <div
            className="
              my-7
              border-t
              border-zinc-200
              dark:border-zinc-700
            "
          />

          {/* CURRENCIES */}
          <div>

            <div className="flex items-center gap-2 mb-4">

              <Coins
                size={18}
                className="text-blue-600"
              />

              <h3
                className="
                  font-semibold
                  text-zinc-900
                  dark:text-white
                "
              >
                Currencies
              </h3>
            </div>

            <div
              className="
                rounded-2xl
                bg-zinc-100
                dark:bg-zinc-800
                p-4
                text-sm
                text-zinc-700
                dark:text-zinc-300
                break-words
              "
            >
              {formatCurrencies(
                country.currencies
              )}
            </div>
          </div>

          {/* DIVIDER */}
          <div
            className="
              my-7
              border-t
              border-zinc-200
              dark:border-zinc-700
            "
          />

          {/* LANGUAGES */}
          <div>

            <div className="flex items-center gap-2 mb-4">

              <Languages
                size={18}
                className="text-blue-600"
              />

              <h3
                className="
                  font-semibold
                  text-zinc-900
                  dark:text-white
                "
              >
                Languages
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">

              {languages.length > 0 ? (
                languages.map((lang) => (
                  <div
                    key={lang}
                    className="
                      px-3
                      py-2
                      sm:px-4
                      rounded-xl
                      bg-blue-100
                      dark:bg-blue-900/30
                      text-blue-700
                      dark:text-blue-300
                      text-xs
                      sm:text-sm
                      font-medium
                    "
                  >
                    {lang}
                  </div>
                ))
              ) : (
                <p>No languages</p>
              )}

            </div>
          </div>
        </div>

        {/* MAP CARD */}
        <div
          className="
            rounded-2xl
            border
            border-zinc-200
            dark:border-zinc-800
            bg-white
            dark:bg-zinc-900
            p-4
            sm:p-6
            shadow-sm
          "
        >

          {/* HEADING */}
          <div className="flex items-center gap-3 mb-6">

            <div
              className="
                w-9
                h-9
                rounded-2xl
                bg-orange-600
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <MapPinned
                size={20}
                className="text-white"
              />
            </div>

            <div>

              <h2
                className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-zinc-900
                  dark:text-white
                "
              >
                Location Map
              </h2>

              <p
                className="
                  text-sm
                  text-zinc-500
                  dark:text-zinc-400
                "
              >
                Country geographic location
              </p>

            </div>
          </div>

          {/* IMAGE */}
          <a
            href={country.maps?.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >

            <img
              src={
                country.flags?.png ||
                "/no-flag.png"
              }
              alt={country.name.common}
              className="
                w-full
                h-[220px]
                sm:h-[300px]
                md:h-[300px]
                object-cover
                rounded-2xl
                border
                border-zinc-200
                dark:border-zinc-700
                hover:scale-[1.01]
                transition
              "
            />

            {/* <Image
  src={
    country.flags?.png ||
    "/no-flag.png"
  }
  alt={country.name.common}
  width={800}
  height={500}
  className="
    w-full
    h-[220px]
    sm:h-[300px]
    md:h-[300px]
    object-cover
    rounded-2xl
    border
    border-zinc-200
    dark:border-zinc-700
    hover:scale-[1.01]
    transition
  "
/> */}
          </a>

          {/* MAP BUTTON */}
          <a
            href={country.maps?.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-5
              flex
              sm:inline-flex
              items-center
              justify-center
              gap-2
              w-full
              sm:w-fit
              rounded-2xl
              bg-orange-600
              hover:bg-orange-700
              px-5
              py-3
              text-white
              text-sm
              sm:text-base
              font-medium
              transition
            "
          >

            <Map size={18} />

            Open in Google Maps
          </a>
        </div>
      </div>

      {/* SMALL CARDS */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-4
          sm:gap-6
        "
      >

        <SmallCard
          icon={<Earth size={20} />}
          title="Continent"
          value={country.continents?.[0]}
        />

        <SmallCard
          icon={<Globe size={20} />}
          title="Region"
          value={country.region}
        />

        <SmallCard
          icon={<Clock3 size={20} />}
          title="Timezone"
          value={
            country.timezones?.[0]
              ?.replace("UTC", "UTC ") ||
            "—"
          }
        />

      </div>

      {/* NEIGHBORING COUNTRIES */}
      <div
        className="
          rounded-2xl
          border
          border-zinc-200
          dark:border-zinc-800
          bg-white
          dark:bg-zinc-900
          p-4
          sm:p-6
          shadow-sm
        "
      >

        <div className="flex items-center gap-3 mb-6">

          <div
            className="
              w-11
              h-11
              rounded-2xl
              bg-purple-600
              flex
              items-center
              justify-center
              shrink-0
            "
          >

            <Globe
              size={22}
              className="text-white"
            />
          </div>

          <div>

            <h2
              className="
                text-xl
                sm:text-2xl
                font-bold
                text-zinc-900
                dark:text-white
              "
            >
              Neighboring Countries
            </h2>

            <p
              className="
                text-sm
                text-zinc-500
                dark:text-zinc-400
              "
            >
              Countries sharing borders
            </p>

          </div>
        </div>

        {borders.length > 0 ? (

          <div className="flex flex-wrap gap-3">

            {borders.map((border) => (
              <div
                key={border}
                className="
                  px-3
                  py-2
                  rounded-xl
                  bg-zinc-100
                  dark:bg-zinc-800
                  text-zinc-800
                  dark:text-zinc-200
                  text-xs
                  sm:text-sm
                  font-medium
                "
              >
                {border}
              </div>
            ))}

          </div>

        ) : (

          <p
            className="
              text-zinc-500
              dark:text-zinc-400
            "
          >
            No neighboring countries
          </p>

        )}
      </div>

      {/* BUTTONS */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          items-stretch
          sm:items-center
          justify-center
          gap-4
          pt-2
        "
      >

        <Link
          href="/countries"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-zinc-600
            hover:bg-zinc-700
            px-5
            sm:px-7
            py-3
            sm:py-4
            text-white
            text-sm
            sm:text-base
            font-semibold
            transition
          "
        >

          <Globe size={18} />

          Explore More Countries
        </Link>

        <Link
          href="/"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-zinc-300
            dark:border-zinc-700
            bg-white
            dark:bg-zinc-900
            px-5
            sm:px-7
            py-3
            sm:py-4
            text-sm
            sm:text-base
            font-semibold
            text-zinc-800
            dark:text-zinc-200
            hover:bg-zinc-100
            dark:hover:bg-zinc-800
            transition
          "
        >

          <ArrowRight size={18} />

          Back to Home
        </Link>

      </div>
    </div>
  );
}

/* INFO ROW */
function InfoRow({
  icon,
  title,
  value,
}) {
  return (
    <div
      className="
        flex
        items-start
        sm:items-center
        gap-3
        sm:gap-4
        rounded-2xl
        bg-zinc-100
        dark:bg-zinc-800
        p-4
      "
    >

      <div
        className="
          w-9
          h-9
          rounded-xl
          bg-blue-600
          text-white
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        {icon}
      </div>

      <div className="min-w-0">

        <p
          className="
            text-sm
            text-zinc-500
            dark:text-zinc-400
          "
        >
          {title}
        </p>

        <p
          className="
            font-semibold
            text-sm
            sm:text-base
            text-zinc-900
            dark:text-white
            break-words
          "
        >
          {value}
        </p>

      </div>
    </div>
  );
}

/* SMALL CARD */
function SmallCard({
  icon,
  title,
  value,
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-zinc-200
        dark:border-zinc-800
        bg-white
        dark:bg-zinc-900
        p-5
        sm:p-8
        text-center
        shadow-sm
      "
    >

      <div
        className="
          w-10
          h-10
          rounded-2xl
          bg-blue-600
          text-white
          flex
          items-center
          justify-center
          mx-auto
          mb-4
        "
      >
        {icon}
      </div>

      <p
        className="
          text-sm
          text-zinc-500
          dark:text-zinc-400
        "
      >
        {title}
      </p>

      <h3
        className="
          mt-2
          text-base
          sm:text-lg
          font-bold
          text-zinc-900
          dark:text-white
          break-words
        "
      >
        {value || "—"}
      </h3>

    </div>
  );
}

