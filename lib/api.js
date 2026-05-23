// const BASE = "https://restcountries.com/v3.1";

// export async function fetchAllCountries() {
//   const res = await fetch(`${BASE}/all`, { cache: "force-cache" });
//   if (!res.ok) throw new Error("Could not fetch country list");
//   return res.json();
// }

// export async function fetchCountryByCode(code) {
//   const res = await fetch(`${BASE}/alpha/${code}`, { cache: "no-store" });
//   if (!res.ok) throw new Error("Could not fetch country");
//   return res.json();
// }

// export async function searchCountriesByName(name) {
//   const res = await fetch(`${BASE}/name/${encodeURIComponent(name)}`, {
//     cache: "no-store",
//   });
//   if (!res.ok) return [];
//   return res.json();
// }






















// const BASE = "https://restcountries.com/v3.1";

// export async function fetchAllCountries() {
//   const res = await fetch(
//     `${BASE}/all?fields=name,flags,capital,region,population,cca3`,
//     { cache: "force-cache" }
//   );

//   if (!res.ok) throw new Error("Could not fetch country list");

//   return res.json();
// }



















const BASE = "https://restcountries.com/v3.1";

export async function fetchAllCountries() {
  const res = await fetch(
    `${BASE}/all?fields=name,flags,capital,region,population,cca3`,
    { cache: "force-cache" }
  );

  if (!res.ok) throw new Error("Failed to fetch countries");

  const data = await res.json();

  // IMPORTANT FIX
  return Array.isArray(data) ? data : [];
}

export async function fetchCountryByCode(code) {
  const res = await fetch(`${BASE}/alpha/${code}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch country");

  const data = await res.json();
  return data?.[0] ?? null;
}




