import CountriesClient from "./countriesClient";
import { fetchAllCountries } from "@lib/api";

export default async function CountriesPage() {
  const countries = await fetchAllCountries();

  return (
     <main className="px-4 sm:px-6 lg:px-8 py-6">
      <CountriesClient initial={countries} />
    </main>
  );
}
