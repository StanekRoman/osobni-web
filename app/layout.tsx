import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Roboto_Serif } from "next/font/google";

import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

import { Provider } from "@/components/ui/provider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Roman Staněk | Weby, aplikace a automatizace",
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: SITE_NAME,
    title: "Roman Staněk | Weby, aplikace a automatizace",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },

  twitter: {
    card: "summary_large_image",
    title: "Roman Staněk | Weby, aplikace a automatizace",
    description: SITE_DESCRIPTION,
  },
  verification: {
    other: {
      "seznam-wmt": "75WZWYBUy9Ru6Kj3qWpHTy13HrmTRP75",
    },
  },
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
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
