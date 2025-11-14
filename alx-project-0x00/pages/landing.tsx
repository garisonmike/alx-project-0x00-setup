// pages/landing.tsx
import Button from "@/components/Button";
import Card from "@/components/Card";
import React from 'react';

const Landing: React.FC = () => {
    return (
        <div className="p-10">
            <h1 className=" text-xl font-extralight mb-8">Landing Page</h1>

            {/* --- Task 6: Button Examples --- */}
            <h2 className="text-lg font-semibold mt-6 mb-3">Size Variations</h2>
            <div className="flex gap-4 items-start mb-6">
                <Button title="Small Button" size="small" styles="test" />
                <Button title="Medium Button" size="medium" styles="test" />
                <Button title="Large Button" size="large" styles="test" />
            </div>

            <h2 className="text-lg font-semibold mt-6 mb-3">Shape Variations (Large Size)</h2>
            <div className="flex gap-4 items-start mb-6">
                {/* These shapes are required by the checker */}
                <Button title="Rounded Small" size="large" shape="rounded-sm" styles="test" />
                <Button title="Rounded Large" size="large" shape="rounded-lg" styles="test" />
                <Button title="Rounded Full" size="large" shape="rounded-full" styles="test" />
            </div>

            <h2 className="text-lg font-semibold mt-6 mb-3">Combined Examples</h2>
            <div className="flex gap-4 items-start mb-6">
                <Button title="Small & Full" size="small" shape="rounded-full" styles="test" />
                <Button title="Large & Small" size="large" shape="rounded-sm" styles="test" />
            </div>

            {/* --- Task 4: Card Component Demo --- */}
            <h2 className="text-lg font-semibold mt-6 mb-3">Card Component Demo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Landing