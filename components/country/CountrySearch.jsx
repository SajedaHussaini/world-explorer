"use client";
import { useState, useEffect } from "react";
import CountryGrid from "./CountryGrid";

export default function CountrySearch() {
  const [query, setQuery] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setAllCountries(data);
        setLoading(false);
      });
  }, []);

  const filtered = allCountries.filter((c) =>
    c.name.common.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Type country name..."
        className="w-full max-w-md px-3 py-2 border rounded shadow mb-4"
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CountryGrid countries={filtered} />
      )}
    </div>
  );
}


