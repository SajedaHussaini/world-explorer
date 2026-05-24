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
          : "bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-zinc-700 hover:border-red-400 hover:text-red-500 dark:hover:text-red-400"
      }`}
    >
      <Heart
        size={16}
        className={`transition-all duration-300 ${
          favorite
            ? "fill-white"
            : "fill-transparent"
        }`}
      />

      {favorite ? "Saved" : "Favorite"}
    </button>
  );
}

