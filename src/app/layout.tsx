import classNames from "classnames";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import React from "react";
import { ToastContainer } from "react-toastify";

import { Footer, Header } from "@/components/commons";
import ThemeProvider from "@/providers/Theme";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={classNames(
          nunito.className,
          "antialiased overflow-x-hidden flex flex-col w-full min-h-screen min-w-[420px]"
        )}
      >
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="light" // TODO: Change to "system"
        >
          <Header />
          <main className="min-h-0 flex-1 w-full pt-20">{children}</main>
          <Footer />
          <ToastContainer newestOnTop />
        </ThemeProvider>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: "Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
  description:
    "Zigbee is a student run community run by OUTR MCA Students that focuses fundamentally on software development.",
  keywords:
    "Zigbee, MCA, OUTR, Student Developers' Club, Zigbee Student Developers' Club, tech club, tech event, odisha tech club, odisha college club, college club, MCA club, mca club, 2025, tech, club, tech conference, outr, odisha university of technology and research, cet, college of engineering and technology, bhubaneswar, odisha, india",
  authors: {
    url: "https://zigbeeoutr.in/",
    name: "MCA Department, OUTR (CETB), Bhubaneswar",
  },
  applicationName: "Zigbee Student Developers' Club, OUTR",
  creator: "MCA Department, OUTR (CETB), Bhubaneswar",
  // TODO: Update favicon
  // icons: {
  //   icon: [
  //     {
  //       url: "./favicon.ico",
  //       rel: "icon",
  //       type: "image/x-icon",
  //     },
  //     {
  //       url: "/favicon-16x16.png",
  //       rel: "icon",
  //       sizes: "16x16",
  //       type: "image/png",
  //     },
  //     {
  //       url: "/favicon-32x32.png",
  //       rel: "icon",
  //       sizes: "32x32",
  //       type: "image/png",
  //     },
  //   ],
  //   apple: [
  //     {
  //       url: "/apple-touch-icon.png",
  //       rel: "apple-touch-icon",
  //       sizes: "180x180",
  //       type: "image/png",
  //     },
  //   ],
  //   shortcut: {
  //     url: "./favicon.ico",
  //     rel: "shortcut icon",
  //     type: "image/x-icon",
  //   },
  // },
  openGraph: {
    type: "website",
    url: "https://zigbeeoutr.in/",
    title: "Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
    description:
      "Zigbee is a student run community run by OUTR MCA Students that focuses fundamentally on software development.",
    images: [
      // TODO: Update OpenGraph image details
      // {
      //   url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1735248181/og-image_cxf84l.webp",
      //   width: 1200,
      //   height: 630,
      //   alt: "Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zigbeecetb",
    title: "Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
    description:
      "Zigbee is a student run community run by OUTR MCA Students that focuses fundamentally on software development.",
    creator: "Zigbee Student Developers' Club",
    // TODO: Update Twitter card image details
    // images: {
    //   url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1735248181/og-image_cxf84l.webp",
    //   width: 1200,
    //   height: 630,
    //   alt: "Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
    // },
  },
  // TODO: Add site manifest
  // manifest: "/site.webmanifest",
};

export default RootLayout;
