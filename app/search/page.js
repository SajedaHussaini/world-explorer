import CountrySearch from "@components/country/CountrySearch";

export const metadata = {
  title: "Search Countries | World Explorer",
  description: "Search and explore countries worldwide",
};

export default function SearchPage() {
  return (
    <div
      className="
        max-w-6xl
        mx-auto

        px-4
        sm:px-6

        py-6
        sm:py-10

        space-y-6
      "
    >

      {/* HEADER */}
      <div className="text-center space-y-2">

        <h1
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl

            font-bold
          "
        >
          Search Countries
        </h1>

        <p
          className="
            text-sm
            sm:text-base

            text-gray-500
            dark:text-gray-400
          "
        >
          Find any country by name instantly
        </p>

      </div>

      <CountrySearch />
    </div>
  );
}
