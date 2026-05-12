import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import NavBar from "@/components/NavBar";
import { layoutData } from "@/constants/portfolioData";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: layoutData.metadataTitle,
  description: layoutData.metadataDescription,
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
          var theme = saved || 'light';
          document.documentElement.classList.remove('light-theme','dark-theme');
          document.documentElement.classList.add(theme + '-theme');
        } catch (e) {}
      })();
    `,
          }}
        />
      </head>
      <body
        className={`flex min-h-dvh flex-col ${geistSans.variable} ${geistMono.variable}`}
      >
        <header className="fixed left-0 top-0 z-50 w-full border-b border-[color:var(--border)] bg-[color:var(--header-footer)] backdrop-blur">
          <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
            <Link
              href="/"
              className="shrink-0 text-sm font-bold tracking-wide text-[color:var(--primary-text)] sm:text-base"
            >
              {layoutData.brandName}
            </Link>
            <div className="flex items-center gap-2">
              <NavBar />
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-8 pt-20 sm:px-6 sm:pb-10 sm:pt-28">
          {children}
        </main>
        <footer className="flex h-16 w-full items-center justify-center border-t border-[color:var(--border)] bg-[color:var(--header-footer)] p-4 text-sm text-[color:var(--secondary-text)]">
          {layoutData.footerText}
        </footer>
      </body>
    </html>
  );
}
