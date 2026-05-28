import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 px-4 text-center">

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">
        404 - Page Not Found
      </h1>

      <p className="mb-8 text-zinc-600 dark:text-zinc-400">
        Sorry, we can't find that page.
      </p>

      <Link
        href="/"
        className="
          inline-flex
          items-center
          justify-center
          px-5
          py-3
          rounded-2xl
          bg-zinc-900
          dark:bg-white
          text-white
          dark:text-black
          font-medium
          hover:opacity-90
          transition
        "
      >
        Go Home
      </Link>

    </div>
  );
}
