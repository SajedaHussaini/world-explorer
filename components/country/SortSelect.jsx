"use client";
export default function SortSelect({ value, setValue }) {
  return (
    <div>
      <label className="mr-2 font-semibold text-sm">Sort by </label>
      <select
        className="rounded border px-2 py-1 text-sm"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">Default</option>
        <option value="pop-asc">Population ↑</option>
        <option value="pop-desc">Population ↓</option>
        <option value="alpha-asc">A-Z Name</option>
        <option value="alpha-desc">Z-A Name</option>
      </select>
    </div>
  );
}



