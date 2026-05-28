const BASE = "https://restcountries.com/v3.1";

export async function fetchAllCountries() {
  const res = await fetch(
    `${BASE}/all?fields=name,flags,capital,region,population,cca3`,
    { cache: "force-cache" }
  );

  if (!res.ok) throw new Error("Failed");

  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export async function fetchCountryById(id) {
  const res = await fetch(`${BASE}/alpha/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data?.[0] ?? null;
}
