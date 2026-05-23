import { formatPopulation, formatLanguages, formatCurrencies, formatTimezones } from "@lib/formatters";

export default function CountryDetails({ country }) {
  return (
    <div className="md:flex gap-8">
      <img
        src={country.flags?.png}
        alt={country.name.common + ' flag'}
        className="max-w-xs rounded shadow mb-6 md:mb-0"
      />
      <div>
        <h1 className="font-bold text-2xl">{country.name.common}</h1>
        <p><b>Official Name:</b> {country.name.official}</p>
        <p><b>Capital:</b> {country.capital?.[0] ?? "—"}</p>
        <p><b>Region:</b> {country.region}</p>
        <p><b>Subregion:</b> {country.subregion}</p>
        <p><b>Population:</b> {formatPopulation(country.population)}</p>
        <p><b>Languages:</b> {formatLanguages(country.languages)}</p>
        <p><b>Currencies:</b> {formatCurrencies(country.currencies)}</p>
        <p><b>Time Zones:</b> {formatTimezones(country.timezones)}</p>
        <a
          href={country.maps?.googleMaps}
          className="inline-block mt-2 underline text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
}


