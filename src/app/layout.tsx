import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nordic Feet Fotklinikk – Fotterapi i Stavanger",
  description:
    "Autorisert fotterapeut i Stavanger. Vi tilbyr fotbehandling, neglebehandling, vortebehandling og mer. Book time på tlf 974 22 814.",
  openGraph: {
    title: "Nordic Feet Fotklinikk",
    description:
      "Autorisert fotterapeut i Stavanger – NORDISK KVALITET FOR DINE FØTTER",
    type: "website",
    locale: "nb_NO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={raleway.className}>
      <body className="min-h-full" suppressHydrationWarning>{children}</body>
    </html>
  );
}
