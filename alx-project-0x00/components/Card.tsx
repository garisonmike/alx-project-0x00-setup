// components/Card.tsx
import Image from "next/image";
import React from "react";

type CardProps = {
    title: string;
    description: string;
    image: string;
};

const Card: React.FC<CardProps> = ({ title, description, image }) => {
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2 text-gray-800">{title}</h2>
                <p className="text-gray-600 text-base">{description}</p>
            </div>
        </div>
    );
};

export default Card;
