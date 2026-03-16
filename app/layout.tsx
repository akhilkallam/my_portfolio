import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akhil Kallam — Senior Software Engineer",
  description:
    "Senior Software Engineer with 10+ years building scalable distributed systems. Currently at PepsiCo leading global eB2B platform. Expert in Java, Spring Boot, Kafka, microservices, Azure/AWS.",
  keywords: [
    "Senior Software Engineer",
    "Java",
    "Spring Boot",
    "Apache Kafka",
    "Microservices",
    "PepsiCo",
    "Backend Engineer",
  ],
  authors: [{ name: "Akhil Kallam" }],
  openGraph: {
    title: "Akhil Kallam — Senior Software Engineer",
    description:
      "10+ years building scalable distributed systems at PepsiCo, Verifone, Deloitte, and Infosys.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
