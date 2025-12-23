import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Montserrat } from "next/font/google";
import { type Metadata } from "next";

import { AppMenu } from "../components/AppMenu/AppMenu";
import Footer from "~/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RimuFest Chamber Music Festival - Empowering Young Musicians",
  description:
    "Join the RimuFest Chamber Music Festival, an inclusive and innovative event designed for young musicians aged 7-18. Experience high-quality music education, fostering teamwork, leadership, and a diverse repertoire.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${montserrat.variable}`}>
      <body className="relative font-[family-name:var(--font-montserrat)]">
        <AppMenu />
        <main className="flex min-h-screen w-full flex-col items-center justify-center bg-white text-black">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

