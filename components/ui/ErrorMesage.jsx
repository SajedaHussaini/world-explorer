export default function ErrorMessage({ error }) {
  return (
    <div className="bg-danger text-white px-4 py-2 rounded text-center">{error}</div>
  );
}

