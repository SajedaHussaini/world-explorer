// "use client";
// import { useFavorites } from "@context/FavoritesContext";
// import { useEffect, useState } from "react";
// import CountryGrid from "@components/country/CountryGrid";

// export const metadata = {
//   title: "Favorites | World Explorer",
// };

// export default function FavoritesPage() {
//   const { favorites } = useFavorites();
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     if (favorites.length === 0) {
//       setCountries([]);
//       return;
//     }
//     fetch(
//       "https://restcountries.com/v3.1/alpha?codes=" + favorites.join(",")
//     )
//       .then((r) => r.json())
//       .then(setCountries);
//   }, [favorites]);

//   return (
//     <div>
//       <h1 className="font-bold text-2xl mb-4">Favorite Countries</h1>
//       {countries.length === 0 ? (
//         <div className="text-gray-600 py-16">No favorite countries yet.</div>
//       ) : (
//         <CountryGrid countries={countries} />
//       )}
//     </div>
//   );
// }














import FavoritesClient from "./favoriteClients";

export const metadata = {
  title: "Favorites | World Explorer",
};

export default function FavoritesPage() {
  return <FavoritesClient />;
}
