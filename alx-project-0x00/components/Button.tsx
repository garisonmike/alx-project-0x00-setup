// components/Button.tsx
import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
    return (
        <button
            className={`px-4 py-2 font-semibold bg-blue-600 text-white hover:bg-blue-700 transition ${styles}`}
        >
            {title}
        </button>
    );
};

export default Button;
