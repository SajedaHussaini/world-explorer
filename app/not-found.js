import BackButton from "@ui/BackButton";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">Sorry, we can't find that page.</p>
      <BackButton>Go Home</BackButton>
    </div>
  );
}
