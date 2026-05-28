import CountryCard from "./CountryCard";

export default function CountryGrid({
  countries = [],
  highlight,
}) {
  if (!Array.isArray(countries)) {
    return null;
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-5
        sm:gap-6
        lg:gap-8
      "
    >
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          highlight={highlight}
        />
      ))}
    </div>
  );
}
