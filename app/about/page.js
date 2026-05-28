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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8 lg:space-y-10">

      <section
        className="
          relative
          overflow-hidden
          rounded-3xl
          sm:rounded-[32px]
          border
          border-zinc-200
          dark:border-zinc-800
          bg-white
          dark:bg-zinc-900
          p-5
          sm:p-8
          md:p-12
          shadow-sm
        "
      >

        <div
          className="
            absolute
            -top-24
            -right-24
            w-44
            h-44
            sm:w-72
            sm:h-72
            rounded-full
            bg-zinc-500/10
            blur-3xl
          "
        />

        <div className="relative z-10">

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              gap-4
            "
          >

            <div
              className="
                w-12
                h-12
                sm:w-14
                sm:h-14
                rounded-2xl
                sm:rounded-3xl
                bg-zinc-600
                flex
                items-center
                justify-center
                text-white
                shadow-lg
                shrink-0
              "
            >
              <Globe
                size={24}
                className="sm:w-7 sm:h-7"
              />
            </div>

            <div>
              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-black
                  leading-tight
                  text-zinc-900
                  dark:text-white
                "
              >
                About World Explorer
              </h1>

              <p
                className="
                  mt-3
                  text-sm
                  sm:text-base
                  leading-relaxed
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
          rounded-3xl
          sm:rounded-[32px]
          border
          border-zinc-200
          dark:border-zinc-800
          bg-white
          dark:bg-zinc-900
          p-5
          sm:p-8
          shadow-sm
        "
      >

        <h2
          className="
            text-xl
            sm:text-2xl
            font-bold
            text-zinc-900
            dark:text-white
            mb-4
            sm:mb-5
          "
        >
          Project Overview
        </h2>

        <p
          className="
            text-sm
            sm:text-base
            leading-7
            sm:leading-8
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
              break-words
            "
          >
            REST Countries API
          </a>

          , including population, capitals,
          currencies, regions, languages,
          maps, and more.
        </p>
      </section>

      <section>

        <h2
          className="
            text-xl
            sm:text-2xl
            font-bold
            text-zinc-900
            dark:text-white
            mb-5
            sm:mb-6
          "
        >
          Features
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            sm:gap-6
          "
        >

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
          rounded-3xl
          sm:rounded-[32px]
          border
          border-zinc-200
          dark:border-zinc-800
          bg-white
          dark:bg-zinc-900
          p-5
          sm:p-8
          shadow-sm
        "
      >

        <h2
          className="
            text-xl
            sm:text-2xl
            font-bold
            text-zinc-900
            dark:text-white
            mb-5
            sm:mb-6
          "
        >
          Technologies Used
        </h2>

        <div className="flex flex-wrap gap-3 sm:gap-4">

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
                px-4
                sm:px-5
                py-2.5
                sm:py-3
                rounded-2xl
                bg-zinc-100
                dark:bg-zinc-800
                text-zinc-800
                dark:text-zinc-200
                text-sm
                sm:text-base
                font-medium
                break-words
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
          text-sm
          sm:text-base
          leading-relaxed
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
        rounded-2xl
        sm:rounded-3xl
        border
        border-zinc-200
        dark:border-zinc-800
        bg-white
        dark:bg-zinc-900
        p-5
        sm:p-6
        shadow-sm
        hover:shadow-lg
        transition
      "
    >

      <div
        className="
          w-11
          h-11
          sm:w-12
          sm:h-12
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
          text-base
          sm:text-lg
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
          leading-6
          sm:leading-7
          text-zinc-500
          dark:text-zinc-400
        "
      >
        {text}
      </p>
    </div>
  );
}
