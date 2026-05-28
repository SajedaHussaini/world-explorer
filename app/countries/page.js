import CountriesClient from "./countriesClient";
// import CountriesClient from "@/CountriesClient";
import { fetchAllCountries } from "@lib/api";

// This page can be statically rendered and cached.
export default async function CountriesPage() {
  const countries = await fetchAllCountries();

  return (
    // <main className="p-6">
     <main className="px-4 sm:px-6 lg:px-8 py-6">
      <CountriesClient initial={countries} />
    </main>
  );
}
