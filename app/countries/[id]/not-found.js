import BackButton from "@ui/BackButton";

export default function NotFoundCountry() {
  return (
    <div className="py-16 text-center">
      <h2 className="text-xl font-semibold">
        Country not found
      </h2>

      <div className="mt-6">
        <BackButton>Back to Countries</BackButton>
      </div>
    </div>
  );
}
