// components/Button.tsx
import { ButtonProps } from "@/interfaces";
import React from 'react';

const getSizeClasses = (size: ButtonProps['size']): string => {
    switch (size) {
        case 'small':
            return 'px-3 py-1 text-sm';
        case 'medium':
            return 'px-4 py-2 text-base';
        case 'large':
            return 'px-6 py-3 text-lg';
        default:
            return 'px-4 py-2 text-base';
    }
};

const Button: React.FC<ButtonProps> = ({ title, size = 'medium', shape = 'rounded-md' }) => {
    // Use a sensible default value for the shape if none is provided
    const resolvedShape = shape || 'rounded-md';

    // Combine base styles, size styles, and shape styles
    const baseStyles = 'bg-blue-600 text-white font-medium transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';

    const sizeClasses = getSizeClasses(size);
    const shapeClass = resolvedShape;

    const buttonClasses = `${baseStyles} ${sizeClasses} ${shapeClass}`;

    return (
        <button className={buttonClasses}>
            {title}
        </button>
    );
};

export default Button;