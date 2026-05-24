import Link from "next/link";

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
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import {
  formatPopulation,
  formatLanguages,
  formatCurrencies,
  formatTimezones,
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
    <div className="space-y-10">

      {/* top button */}
      

      {/* title */}
      <div className="text-center">

        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">
          {country.name.common}
        </h1>

        <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
          {country.name.official}
        </p>
      </div>

      {/* main cards */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* country info */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">


{/* heading */}
{/* <div className="mb-6">

  top row
  <div className="flex items-center gap-3">

    <div className="w-9 h-9 rounded-2xl bg-blue-600 flex items-center justify-center">
      <BadgeInfo
        size={16}
        className="text-white"
      />
    </div>

    <div>
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
        Country Information
      </h2>

      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Important country details
      </p>
    </div>
  </div>

  country flag
  <img
    src={
      country.flags?.png ||
      country.flags?.svg ||
      "/no-flag.png"
    }
    alt={country.name.common}
    className="
      mt-5
      w-full
      h-[250px]
      object-cover
      rounded-3xl
      border
      border-zinc-200
      dark:border-zinc-700
      shadow-sm
    "
  />
</div> */}

<div className="flex items-center gap-3 mb-6">

  <div className="w-9 h-9 rounded-2xl bg-blue-600 flex items-center justify-center">
    <BadgeInfo
      size={19}
      className="text-white"
    />
  </div>

  <div>
    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
      Country Information
    </h2>

    <p className="text-sm text-zinc-500 dark:text-zinc-400">
      Important country details
    </p>
  </div>
</div>


          {/* info rows */}
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

          {/* divider */}
          <div className="my-7 border-t border-zinc-200 dark:border-zinc-700"></div>

          {/* currencies */}
          <div>

            <div className="flex items-center gap-2 mb-4">
              <Coins
                size={18}
                className="text-blue-600"
              />

              <h3 className="font-semibold text-zinc-900 dark:text-white">
                Currencies
              </h3>
            </div>

            <div className="rounded-2xl bg-zinc-100 dark:bg-zinc-800 p-4 text-sm text-zinc-700 dark:text-zinc-300">
              {formatCurrencies(
                country.currencies
              )}
            </div>
          </div>

          {/* divider */}
          <div className="my-7 border-t border-zinc-200 dark:border-zinc-700"></div>

          {/* languages */}
          <div>

            <div className="flex items-center gap-2 mb-4">
              <Languages
                size={18}
                className="text-blue-600"
              />

              <h3 className="font-semibold text-zinc-900 dark:text-white">
                Languages
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">

              {languages.length > 0 ? (
                languages.map((lang) => (
                  <div
                    key={lang}
                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-blue-100
                      dark:bg-blue-900/30
                      text-blue-700
                      dark:text-blue-300
                      text-sm
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

        {/* map card */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">

          {/* heading */}
          <div className="flex items-center gap-3 mb-6">

            <div className="w-9 h-9 rounded-2xl bg-orange-600 flex items-center justify-center">
              <MapPinned
                size={20}
                className="text-white"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Location Map
              </h2>

              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Country geographic location
              </p>
            </div>
          </div>

          {/* map image */}
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
              
              
  // src={`https://maps.googleapis.com/maps/api/staticmap?center=${country.latlng?.[0]},${country.latlng?.[1]}&zoom=4&size=800x500&markers=color:red%7C${country.latlng?.[0]},${country.latlng?.[1]}`}

  
  // src={`https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=800&height=500&center=lonlat:${country.latlng?.[1]},${country.latlng?.[0]}&zoom=4&marker=lonlat:${country.latlng?.[1]},${country.latlng?.[0]};color:%23ea580c;size:large`}
              // alt={`${country.name.common} map`}
              alt={country.name.common} 
              className="
                w-full
                h-[400px]
                object-cover
                // object-fill
                rounded-2xl
                border
                border-zinc-200
                dark:border-zinc-700
                hover:scale-[1.01]
                transition
              "
            />
          </a>

          <a
            href={country.maps?.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-orange-600
              hover:bg-orange-700
              px-5
              py-3
              text-white
              font-medium
              transition
            "
          >
            <Map size={18} />
            Open in Google Maps
          </a>
        </div>
      </div>

      {/* small cards */}
      <div className="grid md:grid-cols-3 gap-6">

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

        {/* <SmallCard
          icon={<Clock3 size={28} />}
          title="Timezone"
          value={formatTimezones(
            country.timezones
          )}
        /> */}

        <SmallCard
  icon={<Clock3 size={20} />}
  title="Timezone"
  value={
    country.timezones?.[0]
      ?.replace("UTC", "UTC ") || "—"
  }
/>

      </div>

      {/* neighboring countries */}
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-11 h-11 rounded-2xl bg-purple-600 flex items-center justify-center">
            <Globe
              size={22}
              className="text-white"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Neighboring Countries
            </h2>

            <p className="text-sm text-zinc-500 dark:text-zinc-400">
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
                  px-4
                  py-2
                  rounded-xl
                  bg-zinc-100
                  dark:bg-zinc-800
                  text-zinc-800
                  dark:text-zinc-200
                  text-sm
                  font-medium
                "
              >
                {border}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-zinc-500 dark:text-zinc-400">
            No neighboring countries
          </p>
        )}
      </div>

      {/* buttons */}
      <div className="flex flex-wrap items-center justify-center gap-5 pt-2">

        <Link
          href="/countries"
          className="
            inline-flex
            items-center
            gap-2
            rounded-2xl
            bg-zinc-600
            hover:bg-zinc-700
            px-7
            py-4
            text-white
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
            gap-2
            rounded-2xl
            border
            border-zinc-300
            dark:border-zinc-700
            bg-white
            dark:bg-zinc-900
            px-7
            py-4
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
    <div className="
      flex
      items-center
      gap-4
      rounded-2xl
      bg-zinc-100
      dark:bg-zinc-800
      p-4
    ">

      <div className="
        w-9
        h-9
        rounded-xl
        bg-blue-600
        text-white
        flex
        items-center
        justify-center
      ">
        {icon}
      </div>

      <div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {title}
        </p>

        <p className="font-semibold text-zinc-900 dark:text-white">
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
    <div className="
      rounded-2xl
      border
      border-zinc-200
      dark:border-zinc-800
      bg-white
      dark:bg-zinc-900
      p-8
      text-center
      shadow-sm
    ">

      <div className="
        w-10
        h-9
        rounded-2xl
        bg-blue-600
        text-white
        flex
        items-center
        justify-center
        mx-auto
        mb-4
      ">
        {icon}
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {title}
      </p>

      <h3 className="mt-2 text-lg font-bold text-zinc-900 dark:text-white break-words">
        {value || "—"}
      </h3>
    </div>
  );
}

