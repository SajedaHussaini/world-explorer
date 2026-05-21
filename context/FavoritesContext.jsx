"use client";
import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = localStorage.getItem("favorites");
    if (favs) setFavorites(JSON.parse(favs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (code) => {
    setFavorites((prev) =>
      prev.includes(code) ? prev : [...prev, code]
    );
  };
  const removeFavorite = (code) => {
    setFavorites((prev) => prev.filter((c) => c !== code));
  };
  const isFavorite = (code) => favorites.includes(code);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
