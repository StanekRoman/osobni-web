import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Roboto_Serif } from "next/font/google";

import { Provider } from "@/components/ui/provider";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roman Staněk",
  description: "Weby a digitální řešení",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable} ${robotoSerif.variable}`}
    >
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
