import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedwaheed.me"),
  title: "Ahmed Waheed | Software Engineer / Flutter Developer",
  description:
    "Portfolio of Ahmed Waheed, a Software Engineer and Flutter Developer passionate about building mobile apps.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Ahmed Waheed",
    title: "Ahmed Waheed | Software Engineer / Flutter Developer",
    description:
      "Software Engineer and Flutter Developer building mobile apps. Open to junior developer opportunities.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Waheed - Software Engineer / Flutter Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Waheed | Software Engineer / Flutter Developer",
    description:
      "Software Engineer and Flutter Developer building mobile apps.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
