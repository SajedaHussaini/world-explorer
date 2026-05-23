// "use client";
// import { useState, useMemo } from "react";

// function sortCountries(countries, sort) {
//   if (sort === "pop-asc") return [...countries].sort((a, b) => a.population - b.population);
//   if (sort === "pop-desc") return [...countries].sort((a, b) => b.population - a.population);
//   if (sort === "alpha-asc") return [...countries].sort((a, b) => a.name.common.localeCompare(b.name.common));
//   if (sort === "alpha-desc") return [...countries].sort((a, b) => b.name.common.localeCompare(a.name.common));
//   return countries;
// }

// function CountriesClient({ initial }) {
//   const [region, setRegion] = useState("");
//   const [sort, setSort] = useState("");
//   const filtered = useMemo(() => {
//     let arr = initial;
//     if (region) arr = arr.filter((c) => c.region === region);
//     return sortCountries(arr.slice(0, 40), sort);
//   }, [initial, region, sort]);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold my-3">Explore Countries</h1>
//       <RegionFilter region={region} setRegion={setRegion} />
//       <SortSelect value={sort} setValue={setSort} />
//       <div className="my-6" />
//       <CountryGrid countries={filtered} />
//     </div>
//   );
// }




















// "use client";

// import { useState, useMemo } from "react";

// import CountryGrid from "@country/CountryGrid";
// import RegionFilter from "@country/RegionFilter";
// import SortSelect from "@country/SortSelect";

// function sortCountries(countries, sort) {
//   if (sort === "pop-asc") {
//     return [...countries].sort(
//       (a, b) => a.population - b.population
//     );
//   }

//   if (sort === "pop-desc") {
//     return [...countries].sort(
//       (a, b) => b.population - a.population
//     );
//   }

//   if (sort === "alpha-asc") {
//     return [...countries].sort((a, b) =>
//       a.name.common.localeCompare(b.name.common)
//     );
//   }

//   if (sort === "alpha-desc") {
//     return [...countries].sort((a, b) =>
//       b.name.common.localeCompare(a.name.common)
//     );
//   }

//   return countries;
// }

// export default function CountriesClient({ initial }) {
//   const [region, setRegion] = useState("");
//   const [sort, setSort] = useState("");

//   const filtered = useMemo(() => {
//     let arr = initial;

//     if (region) {
//       arr = arr.filter((c) => c.region === region);
//     }

//     return sortCountries(arr.slice(0, 40), sort);
//   }, [initial, region, sort]);

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">
//         Explore Countries
//       </h1>

//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//         <RegionFilter
//           region={region}
//           setRegion={setRegion}
//         />

//         <SortSelect
//           value={sort}
//           setValue={setSort}
//         />
//       </div>

//       <CountryGrid countries={filtered} />
//     </div>
//   );
// }




























"use client";

import { useState, useMemo } from "react";
import CountryGrid from "@components/country/CountryGrid";
import RegionFilter from "@components/country/RegionFilter";
import SortSelect from "@components/country/SortSelect";

function sortCountries(countries, sort) {
  if (!Array.isArray(countries)) return [];

  if (sort === "pop-asc") {
    return [...countries].sort((a, b) => a.population - b.population);
  }

  if (sort === "pop-desc") {
    return [...countries].sort((a, b) => b.population - a.population);
  }

  if (sort === "alpha-asc") {
    return [...countries].sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
  }

  if (sort === "alpha-desc") {
    return [...countries].sort((a, b) =>
      b.name.common.localeCompare(a.name.common)
    );
  }

  return countries;
}

export default function CountriesClient({ initial = [] }) {
  const [region, setRegion] = useState("");
  const [sort, setSort] = useState("");

  const filtered = useMemo(() => {
    let arr = Array.isArray(initial) ? initial : [];

    if (region) {
      arr = arr.filter((c) => c.region === region);
    }

    return sortCountries(arr.slice(0, 40), sort);
  }, [initial, region, sort]);

  return (
    <div>
      <h1 className="text-5xl text-center font-bold mb-6">
        Explore All Countries
      </h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <RegionFilter region={region} setRegion={setRegion} />
        <SortSelect value={sort} setValue={setSort} />
      </div>

      <CountryGrid countries={filtered} />
    </div>
  );
}


