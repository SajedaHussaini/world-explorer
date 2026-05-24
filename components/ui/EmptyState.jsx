export default function EmptyState({ message = "Nothing found." }) {
  return (
    <div className="text-center py-24 text-gray-400">{message}</div>
  );
}
