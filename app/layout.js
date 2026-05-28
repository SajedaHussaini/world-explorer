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
    <html lang="en" suppressHydrationWarning>
      <body
        className="
       bg-zinc-50
        text-zinc-900
        dark:bg-zinc-900
        dark:text-zinc-100
        transition-colors
        duration-300
      "
      >
        <ThemeProvider>
          <FavoritesProvider>
            <Navbar />

            <main className="
            min-h-[80vh] 
            max-w-6xl 
            mx-auto 
            px-4 
            py-8">
              {children}
            </main>

            <Footer />
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
