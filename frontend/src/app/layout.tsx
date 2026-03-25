import type { Metadata } from "next";
import "./globals.css";

// تحميل الخطوط عبر next/font/google
import { Playfair_Display, Poppins, Noto_Sans_Arabic } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-arabic",
});

export const metadata: Metadata = {
  title: "Tanzania Charity Foundation",
  description: "Bringing hope and building futures for children in East Africa",
  icons: {
    icon: "/images/charityIconWithoutBGandWords.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${playfair.variable} ${poppins.variable} ${notoArabic.variable}`}>
      <body>{children}</body>
    </html>
  );
}