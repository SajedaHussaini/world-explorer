// import Image from "next/image";
// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <section className="text-center">
//       <div className="relative h-56 md:h-80 flex justify-center items-center">
        
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <h1 className="text-4xl md:text-6xl font-black mb-3 text-primary shadow">World Explorer</h1>
//           <p className="text-lg md:text-2xl mb-6">Explore countries around the world and learn about their flags, capitals, populations, currencies, and languages.</p>
//           <Link href="/countries" className="bg-primary py-3 px-7 rounded-full font-semibold text-white hover:bg-blue-700 transition">
//             Explore Countries
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }






































import Link from "next/link";
import {
  Globe,
  Users,
  Landmark,
  Earth,
  Search,
  Heart,
  MoonStar,
  MapPinned,
  ChevronDown,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-20">

      {/* HERO SECTION */}
      <section
        className="
          min-h-[80vh]
          flex
          flex-col
          justify-center
          items-center
          text-center
          px-4
        "
      >
        <div className="max-w-4xl">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-zinc-200
              dark:bg-zinc-800
              text-sm
              text-zinc-700
              dark:text-zinc-300
              mb-6
            "
          >
            <Globe size={16} />
            Discover the world
          </div>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              tracking-tight
              text-zinc-900
              dark:text-white
              mb-6
            "
          >
            Country Explorer
          </h1>

          <p
            className="
              text-lg
              md:text-xl
              leading-relaxed
              text-zinc-600
              dark:text-zinc-400
              max-w-3xl
              mx-auto
              mb-10
            "
          >
            Explore countries around the world and discover
            their capitals, populations, currencies,
            languages, regions, and much more.
          </p>

          {/* STATS */}
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-4
              mb-12
            "
          >

            {/* Countries */}
            <div
              className="
                bg-white
                dark:bg-zinc-900
                border
                border-zinc-200
                dark:border-zinc-800
                rounded-2xl
                p-5
                shadow-sm
              "
            >
              <Globe
                className="
                  mx-auto
                  mb-3
                  text-zinc-700
                  dark:text-zinc-300
                "
                size={28}
              />

              <h3 className="text-2xl font-bold">
                195+
              </h3>

              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Countries
              </p>
            </div>

            {/* Population */}
            <div
              className="
                bg-white
                dark:bg-zinc-900
                border
                border-zinc-200
                dark:border-zinc-800
                rounded-2xl
                p-5
                shadow-sm
              "
            >
              <Users
                className="
                  mx-auto
                  mb-3
                  text-zinc-700
                  dark:text-zinc-300
                "
                size={28}
              />

              <h3 className="text-2xl font-bold">
                8B+
              </h3>

              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Population
              </p>
            </div>

            {/* UN */}
            <div
              className="
                bg-white
                dark:bg-zinc-900
                border
                border-zinc-200
                dark:border-zinc-800
                rounded-2xl
                p-5
                shadow-sm
              "
            >
              <Landmark
                className="
                  mx-auto
                  mb-3
                  text-zinc-700
                  dark:text-zinc-300
                "
                size={28}
              />

              <h3 className="text-2xl font-bold">
                193
              </h3>

              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                UN Members
              </p>
            </div>

            {/* Continents */}
            <div
              className="
                bg-white
                dark:bg-zinc-900
                border
                border-zinc-200
                dark:border-zinc-800
                rounded-2xl
                p-5
                shadow-sm
              "
            >
              <Earth
                className="
                  mx-auto
                  mb-3
                  text-zinc-700
                  dark:text-zinc-300
                "
                size={28}
              />

              <h3 className="text-2xl font-bold">
                7
              </h3>

              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Continents
              </p>
            </div>
          </div>

          {/* START EXPLORING */}
          <div className="mb-6">
            <h2
              className="
                text-2xl
                md:text-3xl
                font-bold
                text-zinc-900
                dark:text-white
                mb-3
              "
            >
              Start Exploring
            </h2>

            <p
              className="
                text-zinc-600
                dark:text-zinc-400
              "
            >
              Select a country and begin your journey.
            </p>
          </div>

          {/* DROPDOWN */}
          <div
            className="
              max-w-xl
              mx-auto
              relative
              mb-6
            "
          >
            <Globe
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-zinc-500
              "
              size={20}
            />

            <ChevronDown
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-zinc-500
              "
              size={20}
            />

            <select
              className="
                w-full
                appearance-none
                bg-white
                dark:bg-zinc-900
                border
                border-zinc-300
                dark:border-zinc-700
                rounded-2xl
                py-4
                pl-12
                pr-12
                text-zinc-800
                dark:text-zinc-100
                outline-none
                focus:ring-2
                focus:ring-zinc-400
                transition
              "
            >
              <option>
                Select a country to explore...
              </option>

              <option>Canada</option>
              <option>Japan</option>
              <option>Germany</option>
              <option>Brazil</option>
            </select>
          </div>

          {/* BUTTON */}
          <Link
            href="/countries"
            className="
              inline-flex
              items-center
              gap-2
              bg-zinc-900
              dark:bg-zinc-100
              text-white
              dark:text-black
              px-8
              py-4
              rounded-2xl
              font-semibold
              hover:scale-[1.02]
              transition
            "
          >
            <Globe size={18} />
            Browse All Countries
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      {/* <section
        className="
          bg-zinc-200
          dark:bg-zinc-900
          py-20
          px-4
          rounded-[3rem]
          transition-colors
        "
      >
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <h2
              className="
                text-4xl
                font-black
                text-zinc-900
                dark:text-white
                mb-4
              "
            >
              Powerful Features
            </h2>

            <p
              className="
                text-zinc-600
                dark:text-zinc-400
                max-w-2xl
                mx-auto
              "
            >
              Discover useful tools and features that help
              you explore countries faster and easier.
            </p>
          </div>

          FEATURE CARDS
          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >

            CARD
            <div
              className="
                bg-white
                dark:bg-zinc-950
                rounded-3xl
                p-7
                border
                border-zinc-200
                dark:border-zinc-800
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <Search
                className="mb-5 text-zinc-700 dark:text-zinc-300"
                size={34}
              />

              <h3 className="text-xl font-bold mb-3">
                Smart Search
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400">
                Search countries instantly by name,
                capital, or region.
              </p>
            </div>

            CARD
            <div
              className="
                bg-white
                dark:bg-zinc-950
                rounded-3xl
                p-7
                border
                border-zinc-200
                dark:border-zinc-800
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <Heart
                className="mb-5 text-zinc-700 dark:text-zinc-300"
                size={34}
              />

              <h3 className="text-xl font-bold mb-3">
                Favorites
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400">
                Save your favorite countries for quick
                access anytime.
              </p>
            </div>

            CARD
            <div
              className="
                bg-white
                dark:bg-zinc-950
                rounded-3xl
                p-7
                border
                border-zinc-200
                dark:border-zinc-800
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <MoonStar
                className="mb-5 text-zinc-700 dark:text-zinc-300"
                size={34}
              />

              <h3 className="text-xl font-bold mb-3">
                Dark Mode
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400">
                Switch between light and dark themes for
                comfortable browsing.
              </p>
            </div>

            CARD
            <div
              className="
                bg-white
                dark:bg-zinc-950
                rounded-3xl
                p-7
                border
                border-zinc-200
                dark:border-zinc-800
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <MapPinned
                className="mb-5 text-zinc-700 dark:text-zinc-300"
                size={34}
              />

              <h3 className="text-xl font-bold mb-3">
                Country Details
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400">
                Learn about flags, languages, currencies,
                and populations.
              </p>
            </div>

          </div>


          
        </div>
      </section> */}


      {/* FEATURES SECTION */}
{/* <section className="py-20 px-4 transition-colors">

  <div className="max-w-6xl mx-auto">

    TITLE
    <div className="text-center mb-14">
      <h2 className="text-4xl font-black text-zinc-900 dark:text-white mb-4">
        Powerful Features
      </h2>

      <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
        Everything you need to explore countries efficiently and beautifully.
      </p>
    </div>

    GRID (ALL CARDS TOGETHER)
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      Interactive Maps
      <div className="feature-card">
        <Globe size={32} className="text-zinc-700 dark:text-zinc-300 mb-3" />
        <h3 className="text-lg font-bold mb-2">Interactive Maps</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Explore countries with interactive map navigation.
        </p>
      </div>

      Detailed Statistics
      <div className="feature-card">
        <Users size={32} className="text-zinc-700 dark:text-zinc-300 mb-3" />
        <h3 className="text-lg font-bold mb-2">Detailed Statistics</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Population, area, GDP and more key insights.
        </p>
      </div>

      Global Coverage
      <div className="feature-card">
        <Earth size={32} className="text-zinc-700 dark:text-zinc-300 mb-3" />
        <h3 className="text-lg font-bold mb-2">Global Coverage</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Data for all countries and regions worldwide.
        </p>
      </div>

      Currency Info
      <div className="feature-card">
        <Landmark size={32} className="text-zinc-700 dark:text-zinc-300 mb-3" />
        <h3 className="text-lg font-bold mb-2">Currency Info</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Learn about currencies and exchange systems.
        </p>
      </div>

      Fast & Modern
      <div className="feature-card">
        <Search size={32} className="text-zinc-700 dark:text-zinc-300 mb-3" />
        <h3 className="text-lg font-bold mb-2">Fast & Modern</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Smooth, fast and optimized experience.
        </p>
      </div>

    </div>
  </div>
</section> */}


{/* FEATURES SECTION */}
<section className="w-full py-16 px-4 bg-white dark:bg-zinc-950 transition-colors">

  {/* FULL WIDTH CARD */}
  <div className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-10">

    {/* CONTENT WRAPPER (فقط برای متن وسط چین) */}
    <div className="max-w-6xl mx-auto">

      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-black text-zinc-900 dark:text-white mb-4">
          Powerful Features
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Everything you need to explore countries efficiently and beautifully.
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* CARD */}
        <div className="feature-card">
          <div className="flex flex-col items-center text-center">
            <Globe size={32} className="mb-3 text-zinc-700 dark:text-zinc-300" />
            <h3 className="font-bold mb-2">Interactive Maps</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Explore countries with interactive map navigation.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="flex flex-col items-center text-center">
            <Users size={32} className="mb-3 text-zinc-700 dark:text-zinc-300" />
            <h3 className="font-bold mb-2">Detailed Statistics</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Population, area, GDP and more insights.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="flex flex-col items-center text-center">
            <Earth size={32} className="mb-3 text-zinc-700 dark:text-zinc-300" />
            <h3 className="font-bold mb-2">Global Coverage</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Access data for all countries worldwide.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="flex flex-col items-center text-center">
            <Search size={32} className="mb-3 text-zinc-700 dark:text-zinc-300" />
            <h3 className="font-bold mb-2">Smart Search</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Find countries by name or capital.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="flex flex-col items-center text-center">
            <Heart size={32} className="mb-3 text-zinc-700 dark:text-zinc-300" />
            <h3 className="font-bold mb-2">Favorites</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Save countries for quick access.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="flex flex-col items-center text-center">
            <MoonStar size={32} className="mb-3 text-zinc-700 dark:text-zinc-300" />
            <h3 className="font-bold mb-2">Dark Mode</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Switch between light and dark themes.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

    </div>
  );
}
