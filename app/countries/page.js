

// import CountryGrid from "@country/CountryGrid";
// import RegionFilter from "@country/RegionFilter";
// import SortSelect from "@country/SortSelect";
// // import CountriesClient from "@/CountriesClient"

// // This page can be statically rendered and cached.

// async function getCountries() {
//   const res = await fetch("https://restcountries.com/v3.1/all", {
//     cache: "force-cache",
//   });
//   if (!res.ok) throw new Error("Failed to fetch");
//   return res.json();
// }

// export default async function CountriesPage() {
//   const initialCountries = await getCountries();

//   // do the filtering and sorting on client, so we must hydrate with initialCountries on a Client wrapper
//   // Alternatively, for a Server-only version, slice(0, 20) and call it a day

//   return (
//     <CountriesClient initial={initialCountries} />
//   );
// }






















// import CountriesClient from "./CountriesClient";

// // This page can be statically rendered and cached.

// async function getCountries() {
//   const res = await fetch("https://restcountries.com/v3.1/all", {
//     cache: "force-cache",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch countries");
//   }

//   return res.json();


// }

// export default async function CountriesPage() {
//   const countries = await getCountries();

//   return (
//     <main>
//       <CountriesClient initial={countries} />
//     </main>
//   );
// }





























// import CountriesClient from "./CountriesClient";

// // This page can be statically rendered and cached.

// async function getCountries() {
//   try {
//     const res = await fetch(
//       "https://restcountries.com/v3.1/all",
//       {
//         cache: "force-cache",
//       }
//     );

//     const data = await res.json();

//     return data;
//   } catch (error) {
//     console.log(error);

//     return [];
//   }
// }

// export default async function CountriesPage() {
//   const countries = await getCountries();

//   return (
//     <main>
//       <CountriesClient initial={countries} />
//     </main>
//   );
// }
























import CountriesClient from "./CountriesClient";
// import CountriesClient from "@/CountriesClient";
import { fetchAllCountries } from "@lib/api";

// This page can be statically rendered and cached.
export default async function CountriesPage() {
  const countries = await fetchAllCountries();

  return (
    <main className="p-6">
      <CountriesClient initial={countries} />
    </main>
  );
}

