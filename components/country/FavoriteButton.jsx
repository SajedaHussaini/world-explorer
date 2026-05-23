// "use client";
// import { useFavorites } from "@context/FavoritesContext";

// export default function FavoriteButton({ cca3 }) {
//   const { isFavorite, addFavorite, removeFavorite } = useFavorites();

//   return (
//     <button
//       aria-label={isFavorite(cca3) ? "Remove Favorite" : "Add Favorite"}
//       type="button"
//       className={`mt-1 w-full rounded py-1 px-2 ${
//         isFavorite(cca3)
//           ? "bg-danger text-white"
//           : "bg-success text-white"
//       }`}
//       onClick={() =>
//         isFavorite(cca3) ? removeFavorite(cca3) : addFavorite(cca3)
//       }
//     >
//       {isFavorite(cca3) ? "★ Remove Favorite" : "☆ Add Favorite"}
//     </button>
//   );
// }



















// "use client";

// import { useFavorites } from "@context/FavoritesContext";

// export default function FavoriteButton({ cca3 }) {
//   const { isFavorite, addFavorite, removeFavorite } =
//     useFavorites();

//   return (
//     <button
//       type="button"
//       className={`w-full text-xs rounded-lg py-2 px-2 transition ${
//         isFavorite(cca3)
//           ? "bg-red-500 text-white"
//           : "bg-green-600 text-white"
//       }`}
//       onClick={() =>
//         isFavorite(cca3)
//           ? removeFavorite(cca3)
//           : addFavorite(cca3)
//       }
//     >
//       {isFavorite(cca3)
//         ? "★ Remove"
//         : "☆ Favorite"}
//     </button>
//   );
// }







"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@context/FavoritesContext";

export default function FavoriteButton({ cca3 }) {
  const {
    isFavorite,
    addFavorite,
    removeFavorite,
  } = useFavorites();

  const favorite = isFavorite(cca3);

  function toggleFavorite() {
    if (favorite) {
      removeFavorite(cca3);
    } else {
      addFavorite(cca3);
    }
  }

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300 w-full border
        ${
          favorite
            ? "bg-red-500 text-white border-red-500 hover:bg-red-600"
            : "bg-white text-gray-700 border-gray-300 hover:border-red-400 hover:text-red-500"
        }`}
    >
      <Heart
        size={16}
        className={`transition-all duration-300 ${
          favorite ? "fill-white" : ""
        }`}
      />

      {favorite ? "Saved" : "Favorite"}
    </button>
  );
}