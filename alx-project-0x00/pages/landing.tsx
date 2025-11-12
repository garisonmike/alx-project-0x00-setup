// pages/landing.tsx
import Button from "@/components/Button";
import Card from "@/components/Card";
import React from "react";

const Landing: React.FC = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-linear-to-r from-cyan-500 to-blue-600 text-white p-6">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to SparkleClean ✨</h1>
            <p className="max-w-md text-center mb-6">
                SparkleClean helps customers easily book professional cleaning services online.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card
                    title="Professional Cleaning"
                    description="We provide top-quality cleaning services for homes and offices."
                    image="/assets/images/house.png"
                />
                <Card
                    title="Trusted by Clients"
                    description="Our clients love our attention to detail and reliable service."
                    image="/assets/images/star.png"
                />
            </div>

            <div className="flex gap-4">
                <Button title="Rounded Small" styles="rounded-sm" />
                <Button title="Rounded Medium" styles="rounded-md" />
                <Button title="Rounded Full" styles="rounded-full" />
            </div>
        </main>
    );
};

export default Landing;
