// import "./globals.css";
// import Navbar from "@layout/Navbar";
// import Footer from "@layout/Footer";
// import { FavoritesProvider } from "@context/FavoritesContext";
// import ThemeProvider from "@components/providers/ThemeProvider";

// export const metadata = {
//   title: "World Explorer",
//   description: "A Next.js country explorer project for practicing Week 13 and Week 14",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-white text-black dark:bg-black dark:text-white transition-colors">
//         <ThemeProvider>
//           <FavoritesProvider>
//             <Navbar />
//             <main className="min-h-[80vh] max-w-6xl mx-auto px-4 py-8">
//             {/* <main className="min-h-screen max-w-6xl mx-auto px-4 py-8 bg-white dark:bg-gray-950"> */}
//               {children}
//             </main>
//             <Footer />
//           </FavoritesProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }



























import "./globals.css";
import Navbar from "@layout/Navbar";
import Footer from "@layout/Footer";
import { FavoritesProvider } from "@context/FavoritesContext";
import ThemeProvider from "@components/providers/ThemeProvider";

export const metadata = {
  title: "World Explorer",
  description: "Explore countries around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="
        bg-zinc-100
        text-zinc-900
        dark:bg-zinc-950
        dark:text-zinc-100
        transition-colors
        duration-300
      "
      >
        <ThemeProvider>
          <FavoritesProvider>
            <Navbar />

            <main className="min-h-[80vh] max-w-6xl mx-auto px-4 py-8">
              {children}
            </main>

            <Footer />
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
