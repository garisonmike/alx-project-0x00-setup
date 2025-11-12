import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Card from "../components/Card";
import Pill from "../components/Pill";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Welcome to ALX Project 0x00
        </h1>

        <div className="flex gap-2 mb-4">
          <Pill text="Next.js" color="bg-gray-800" />
          <Pill text="TypeScript" color="bg-blue-600" />
          <Pill text="Tailwind CSS" color="bg-cyan-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Beautiful Homes"
            description="Find your dream home easily with our curated listings."
            image="/assets/images/house.png"
          />
          <Card
            title="Rated Excellence"
            description="Our clients rate us 5 stars for quality and service."
            image="/assets/images/star.png"
          />
        </div>
      </main>
    </div>
  );
}
