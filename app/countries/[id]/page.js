import { notFound } from "next/navigation";
import CountryDetails from "@components/country/CountryDetails";
import BackButton from "@ui/BackButton";

async function getCountry(id) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return data?.[0] || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  if (!id) {
    return {
      title: "Country Not Found",
    };
  }

  const country = await getCountry(id);

  if (!country) {
    return {
      title: "Country Not Found",
    };
  }

  return {
    title: `${country.name.common} | World Explorer`,
    description: `Full details for ${country.name.common}`,
  };
}

export default async function CountryPage({ params }) {
  const resolvedParams = await params;

  const id = resolvedParams?.id;

  if (!id) {
    notFound();
  }

  const country = await getCountry(id);

  if (!country) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <BackButton>
        Back to Countries
      </BackButton>

      <div className="mt-8">
        <CountryDetails country={country} />
      </div>
    </div>
  );
}
