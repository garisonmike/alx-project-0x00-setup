// components/Pill.tsx
import { PillProps } from "@/interfaces";
import React from "react";

const Pill: React.FC<PillProps> = ({ title }) => {
    return (
        <span className="bg-blue-500 text-white text-sm font-semibold mr-2 px-3 py-1 rounded-full">
            {title}
        </span>
    );
};

export default Pill;
