// pages/landing.tsx
import Link from "next/link";

export default function Landing() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to SparkleClean ✨</h1>
            <p className="max-w-md text-center mb-6">
                SparkleClean helps customers easily book professional cleaning services online.
            </p>

            <div className="flex gap-4">
                <Link
                    href="/"
                    className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className="bg-transparent border border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
                >
                    About
                </Link>
            </div>
        </main>
    );
}
