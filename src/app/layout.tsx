import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import NavBar from "@/components/NavBar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Derek Galeas - Portfolio",
  description:
    "Personal portfolio featuring my web and mobile development projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = saved || (prefersDark ? 'dark' : 'light');
                  document.documentElement.classList.remove('light-theme','dark-theme');
                  document.documentElement.classList.add(theme + '-theme');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`flex h-dvh flex-col  ${geistSans.variable} ${geistMono.variable}`}
      >
        <header className="sticky top-0 left-0 w-full h-16 flex justify-between gap-6 items-center py-4 px-1  sm:px-12 bg-[color:var(--header)] z-50">
          <NavBar />
          <ThemeToggle />
        </header>
        <main className="flex-1 p-4 sm:px-12 sm:py-8">{children}</main>
        <footer className="p-4 bg-[color:var(--footer)]  bottom-0 left-0 w-full h-16 flex justify-center items-center text-[color:var(--muted)] text-sm">
          © 2025 Derek Galeas
        </footer>
      </body>
    </html>
  );
}
