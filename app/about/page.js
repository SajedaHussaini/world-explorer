// export const metadata = {
//   title: "About | World Explorer",
// };

// export default function AboutPage() {
//   return (
//     <article className="max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-2">About World Explorer</h1>
//       <p className="mb-2">
//         World Explorer is a modern Next.js project that lets you browse, search and learn about countries around the world.
//         All data is fetched in real-time from the <a href="https://restcountries.com" className="underline text-primary" target="_blank" rel="noopener noreferrer">REST Countries API</a>.
//       </p>
//       <ul className="mb-2 list-disc pl-6">
//         <li>App Router, file-based routing, layouts</li>
//         <li>Server and client components</li>
//         <li>Data fetching and caching</li>
//         <li>Dynamic and static rendering</li>
//         <li>Bonus: region filters, favorites, dark mode, loading/404 pages, sorting</li>
//       </ul>
//       <p>
//         Built for Week 13 and Week 14 assignment. Powered by Next.js 13+ and Tailwind CSS.
//       </p>
//     </article>
//   );
// }












































export const metadata = {
  title: "About | World Explorer",
};

import {
  Globe,
  Search,
  Heart,
  Moon,
  Database,
  Layers3,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">

      {/* hero */}
      <section
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-zinc-200
          dark:border-zinc-800
          bg-white
          dark:bg-zinc-900
          p-8
          md:p-12
          shadow-sm
        "
      >

        {/* glow */}
        <div
          className="
            absolute
            -top-24
            -right-24
            w-72
            h-72
            rounded-full
            bg-zinc-500/10
            blur-3xl
          "
        />

        <div className="relative z-10">

          <div className="flex items-center gap-4">

            <div
              className="
                w-14
                h-12
                rounded-3xl
                bg-zinc-600
                flex
                items-center
                justify-center
                text-white
                shadow-lg
              "
            >
              <Globe size={28} />
            </div>

            <div>
              <h1
                className="
                  text-4xl
                  md:text-5xl
                  font-black
                  text-zinc-900
                  dark:text-white
                "
              >
                About World Explorer
              </h1>

              <p
                className="
                  mt-3
                  text-zinc-500
                  dark:text-zinc-400
                  max-w-2xl
                "
              >
                A modern country explorer
                platform built with Next.js,
                Tailwind CSS, and real-time
                global data.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* description */}
      <section
        className="
          rounded-[32px]
          border
          border-zinc-200
          dark:border-zinc-800
          bg-white
          dark:bg-zinc-900
          p-8
          shadow-sm
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            text-zinc-900
            dark:text-white
            mb-5
          "
        >
          Project Overview
        </h2>

        <p
          className="
            leading-8
            text-zinc-600
            dark:text-zinc-300
          "
        >
          World Explorer helps users browse,
          search, and discover countries from
          around the world with a clean and
          interactive experience. All country
          information is fetched in real-time
          from the{" "}

          <a
            href="https://restcountries.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-blue-600
              dark:text-blue-400
              hover:underline
              font-medium
            "
          >
            REST Countries API
          </a>

          , including population, capitals,
          currencies, regions, languages,
          maps, and more.
        </p>
      </section>

      {/* features */}
      <section>

        <h2
          className="
            text-2xl
            font-bold
            text-zinc-900
            dark:text-white
            mb-6
          "
        >
          Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <FeatureCard
            icon={<Globe size={22} />}
            title="Country Explorer"
            text="Browse countries with beautiful responsive cards and detailed information pages."
          />

          <FeatureCard
            icon={<Search size={22} />}
            title="Smart Search"
            text="Search countries instantly with fast filtering and recent search history."
          />

          <FeatureCard
            icon={<Heart size={22} />}
            title="Favorites"
            text="Save your favorite countries and access them anytime from your collection."
          />

          <FeatureCard
            icon={<Moon size={22} />}
            title="Dark Mode"
            text="Modern dark and light theme support with smooth UI experience."
          />

          <FeatureCard
            icon={<Database size={22} />}
            title="Real-time API"
            text="Country data is fetched dynamically from REST Countries API."
          />

          <FeatureCard
            icon={<Layers3 size={22} />}
            title="Modern Architecture"
            text="Built using Next.js App Router, server components, and Tailwind CSS."
          />

        </div>
      </section>

      {/* tech stack */}
      <section
        className="
          rounded-[32px]
          border
          border-zinc-200
          dark:border-zinc-800
          bg-white
          dark:bg-zinc-900
          p-8
          shadow-sm
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            text-zinc-900
            dark:text-white
            mb-6
          "
        >
          Technologies Used
        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "Next.js",
            "React",
            "Tailwind CSS",
            "REST Countries API",
            "Lucide React",
            "App Router",
            "Dark Mode",
            "Dynamic Routing",
          ].map((tech) => (
            <div
              key={tech}
              className="
                px-5
                py-3
                rounded-2xl
                bg-zinc-100
                dark:bg-zinc-800
                text-zinc-800
                dark:text-zinc-200
                font-medium
              "
            >
              {tech}
            </div>
          ))}

        </div>
      </section>

      {/* footer */}
      <section
        className="
          text-center
          py-4
          text-zinc-500
          dark:text-zinc-400
        "
      >
        Built for Week 13 & Week 14 assignment
        using Next.js and Tailwind CSS.
      </section>
    </div>
  );
}

/* feature card */
function FeatureCard({
  icon,
  title,
  text,
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-zinc-200
        dark:border-zinc-800
        bg-white
        dark:bg-zinc-900
        p-6
        shadow-sm
        hover:shadow-lg
        transition
      "
    >

      <div
        className="
          w-12
          h-12
          rounded-2xl
          bg-zinc-500
          text-white
          flex
          items-center
          justify-center
          mb-4
        "
      >
        {icon}
      </div>

      <h3
        className="
          text-lg
          font-bold
          text-zinc-900
          dark:text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          text-sm
          leading-7
          text-zinc-500
          dark:text-zinc-400
        "
      >
        {text}
      </p>
    </div>
  );
}
