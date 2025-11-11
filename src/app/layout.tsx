import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./GlobalRedux/provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "./Loading";
import { TracingBeam } from "@/components/ui/tracing-beam";
import ScrollUpButton from "./Scrollup";

const inter = Inter({ subsets: ["latin"] });

export const viewport = 'width=device-width, initial-scale=1';

export const metadata: Metadata = {
  title: "Home - CureNest",
  description: "CureNest offers a seamless experience to find and book appointments with top healthcare professionals. ",
  keywords: "doctors, healthcare, book appointment, medical services, specialists, health consultation, telemedicine, medical advice, CureNest doctors, healthcare professionals",
  robots: "index, follow",
  openGraph: {
    title: "CureNest - Find the Best Doctors and Healthcare Services",
    description: "CureNest offers a seamless experience to find and book appointments with top healthcare professionals.",
    url: "https://www.curentest.in", // Replace with your actual URL
    type: "website",
    siteName: "CureNest",
  },
  twitter:{
    card: "summary_large_image"
  },
  alternates: {
    canonical: "https://www.curenestlab.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Loading />
          <Navbar />
          <div className="absolute right-0 bottom-0">
      <ScrollUpButton />
          </div>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
