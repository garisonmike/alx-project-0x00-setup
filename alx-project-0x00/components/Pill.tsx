// components/Pill.tsx
import React from "react";
import { PillProps } from "../interfaces";

const Pill: React.FC<PillProps> = ({ label, color = "bg-blue-500" }) => {
    return (
        <span
            className={`${color} text-white text-sm font-semibold mr-2 px-3 py-1 rounded-full`}
        >
            {label}
        </span>
    );
};

export default Pill;
