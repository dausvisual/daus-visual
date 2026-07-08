import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dausvisual.com"),
  title: {
    default: "DAUS VISUAL | Undangan Digital Eksklusif",
    template: "%s | DAUS VISUAL"
  },
  description: "DAUS VISUAL Creative studio specializing in premium Digital Wedding Invitations.",
  keywords: ["undangan digital", "wedding invitation", "jasa pembuatan undangan", "undangan website", "daus visual", "video undangan", "undangan premium", "undangan murah", "undangan pernikahan"],
  authors: [{ name: "Firdaus Ikram", url: "https://firdausikram.xyz" }],
  openGraph: {
    title: "DAUS VISUAL | Undangan Digital Eksklusif",
    description: "Buat momen spesial Anda lebih elegan dengan undangan digital modern, interaktif, dan berkesan.",
    url: "https://dausvisual.com",
    siteName: "DAUS VISUAL",
    images: [
      {
        url: "/image/theme-luxury.png",
        width: 800,
        height: 600,
        alt: "DAUS VISUAL Cover",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${poppins.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
