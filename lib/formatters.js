export function formatPopulation(num) {
  if (typeof num !== "number") return "-";
  return num.toLocaleString();
}

export function formatLanguages(langs) {
  return langs && Object.values(langs).join(", ");
}

export function formatCurrencies(currencies) {
  if (!currencies) return "-";
  return Object.values(currencies)
    .map((cur) => `${cur.name} (${cur.symbol})`)
    .join(", ");
}

export function formatTimezones(tzs) {
  return tzs?.join(", ") || "-";
}



