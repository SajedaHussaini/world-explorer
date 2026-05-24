// "use client";
// export default function SortSelect({ value, setValue }) {
//   return (
//     <div>
//       <label className="mr-2 font-semibold text-sm">Sort by </label>
//       <select
//         className="rounded border px-2 py-1 text-sm"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       >
//         <option value="">Default</option>
//         <option value="pop-asc">Population ↑</option>
//         <option value="pop-desc">Population ↓</option>
//         <option value="alpha-asc">A-Z Name</option>
//         <option value="alpha-desc">Z-A Name</option>
//       </select>
//     </div>
//   );
// }

























"use client";

export default function SortSelect({
  value,
  setValue,
}) {
  return (
    <select
      className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={(e) =>
        setValue(e.target.value)
      }
    >
      <option value="">
        Default
      </option>

      <option value="pop-asc">
        Population ↑
      </option>

      <option value="pop-desc">
        Population ↓
      </option>

      <option value="alpha-asc">
        A-Z Name
      </option>

      <option value="alpha-desc">
        Z-A Name
      </option>
    </select>
  );
}
