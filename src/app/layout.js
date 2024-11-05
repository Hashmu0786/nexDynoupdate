import localFont from "next/font/local";
import "./globals.css";
import favIcon from "./favicon.svg";
import { ScrollToTopButton } from "../app/components/ScrollToTopButton";
import Navbar from "./components/navbar/Navbar";
import FooterA from "./container/FooterA";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nexdyno | Web Development & Digital Solutions",
  description:
    "Empowering businesses with web development, SEO, digital marketing, and branding solutions to grow and thrive in the digital era.",
  keywords: "web development, SEO, digital marketing, branding, Nexdyno",
  author: "Nexdyno",
  robots: "index, follow",
  icon: favIcon,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}

        {/* Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />

        {/* Viewport for Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{metadata.title}</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FooterA />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
