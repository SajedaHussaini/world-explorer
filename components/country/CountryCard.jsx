// import Link from "next/link";
// import FavoriteButton from "./FavoriteButton";
// import { formatPopulation } from "@lib/formatters";

// export default function CountryCard({ country }) {
//   return (
//     <div className="bg-white dark:bg-surface rounded-lg shadow hover:shadow-xl overflow-hidden transform hover:scale-[1.03] transition min-w-[220px]">
//       <img
//         src={country.flags?.png}
//         alt={`${country.name.common} flag`}
//         className="w-full h-32 object-cover"
//         loading="lazy"
//       />
//       <div className="p-4">
//         <h2 className="font-bold text-lg mb-1">{country.name.common}</h2>
//         <p className="mb-0.5 text-xs">Capital: <span className="font-semibold">{country.capital?.[0] ?? "—"}</span></p>
//         <p className="mb-0.5 text-xs">Region: <span className="font-semibold">{country.region}</span></p>
//         <p className="mb-2 text-xs">Population: <span className="font-semibold">{formatPopulation(country.population)}</span></p>
//         <Link href={`/countries/${country.cca3}`}>
//           <button className="w-full my-1 bg-primary text-white rounded py-1 px-2 hover:bg-blue-700 transition">View Details</button>
//         </Link>
//         <FavoriteButton cca3={country.cca3} />
//       </div>
//     </div>
//   );
// }





























// import Link from "next/link";
// import FavoriteButton from "./FavoriteButton";
// import { formatPopulation } from "@lib/formatters";

// export default function CountryCard({ country }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden w-full max-w-[320px] mx-auto hover:-translate-y-1">

//       <img
//         src={country.flags?.png}
//         alt={`${country.name.common} flag`}
//         className="w-full h-44 object-cover"
//         loading="lazy"
//       />

//       <div className="p-5">

//         <h2 className="text-xl font-bold mb-3">
//           {country.name.common}
//         </h2>

//         <div className="space-y-1 text-sm text-gray-700">
//           <p>
//             <span className="font-semibold">Capital:</span>{" "}
//             {country.capital?.[0] ?? "—"}
//           </p>

//           <p>
//             <span className="font-semibold">Region:</span>{" "}
//             {country.region}
//           </p>

//           <p>
//             <span className="font-semibold">Population:</span>{" "}
//             {formatPopulation(country.population)}
//           </p>
//         </div>

//         {/* line */}
//         <div className="border-t my-4"></div>

//         <div className="flex gap-2">

//           <Link
//             href={`/countries/${country.cca3}`}
//             className="flex-1"
//           >
//             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition flex items-center justify-center gap-2 font-medium">
//               View Details
//               <span className="text-lg">{">"}</span>
//             </button>
//           </Link>

//           <div className="flex-1">
//             <FavoriteButton cca3={country.cca3} />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }



















import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { formatPopulation } from "@lib/formatters";

export default function CountryCard({ country }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden w-full max-w-[260px] mx-auto hover:-translate-y-1">

      {/* image */}
      <div className="relative">
        <img
          src={country.flags?.png}
          alt={`${country.name.common} flag`}
          className="w-full h-36 object-cover"
          loading="lazy"
        />

        {/* region badge */}
        <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
          {country.region}
        </span>
      </div>

      <div className="p-4">

        <h2 className="text-lg font-bold mb-2">
          {country.name.common}
        </h2>

        <div className="space-y-1 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {country.capital?.[0] ?? "—"}
          </p>

          <p>
            <span className="font-semibold">Population:</span>{" "}
            {formatPopulation(country.population)}
          </p>
        </div>

        {/* divider */}
        <div className="border-t my-3"></div>

        {/* buttons */}
        <div className="flex items-center justify-between gap-2">

          <Link
            href={`/countries/${country.cca3}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center gap-1 transition"
          >
            View Details
            <span>{">"}</span>
          </Link>

          <div className="min-w-[120px]">
            <FavoriteButton cca3={country.cca3} />
          </div>

        </div>
      </div>
    </div>
  );
}
