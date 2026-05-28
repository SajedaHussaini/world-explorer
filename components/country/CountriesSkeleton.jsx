export default function CountriesSkeleton() {
  return (
    <div className="space-y-8">

      {/* heading */}
      <div className="text-center space-y-4">
        <div className="h-10 w-72 mx-auto rounded-2xl bg-zinc-200 dark:bg-zinc-800 animate-pulse" />

        <div className="h-5 w-96 max-w-full mx-auto rounded-xl bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
      </div>

      {/* filters */}
      <div className="
        rounded-3xl
        border
        border-zinc-200
        dark:border-zinc-800
        bg-white
        dark:bg-zinc-900
        p-5
        shadow-sm
      ">

        <div className="flex flex-col lg:flex-row gap-6">

          <div className="flex-1 space-y-3">
            <div className="h-4 w-32 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />

            <div className="h-12 rounded-2xl bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
          </div>

          <div className="w-full lg:w-[220px] space-y-3">
            <div className="h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />

            <div className="h-12 rounded-2xl bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
          </div>

        </div>
      </div>

      {/* cards */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-8
      ">

        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="
              rounded-2xl
              overflow-hidden
              border
              border-zinc-200
              dark:border-zinc-800
              bg-white
              dark:bg-zinc-900
              shadow-sm
            "
          >

            <div className="h-36 bg-zinc-200 dark:bg-zinc-800 animate-pulse" />

            <div className="p-4 space-y-4">

              <div className="h-5 w-40 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />

              <div className="space-y-2">
                <div className="h-4 w-32 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />

                <div className="h-4 w-28 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
              </div>

              <div className="border-t border-zinc-200 dark:border-zinc-700 pt-4 flex justify-between items-center">

                <div className="h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />

                <div className="h-9 w-28 rounded-xl bg-zinc-200 dark:bg-zinc-800 animate-pulse" />

              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
