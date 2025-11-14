import { ButtonProps } from "@/interfaces"; // Import the interface
import React from 'react';

// A helper function to determine the size classes
const getSizeClasses = (size: ButtonProps['size']): string => {
    switch (size) {
        case 'small':
            return 'px-3 py-1 text-sm';
        case 'medium':
            return 'px-4 py-2 text-base';
        case 'large':
            return 'px-6 py-3 text-lg';
        default:
            return 'px-4 py-2 text-base'; // Default to medium
    }
};

const Button: React.FC<ButtonProps> = ({ title, size = 'medium', shape = 'rounded-md' }) => {
    // Combine base styles, size styles, and shape styles
    const baseStyles = 'bg-blue-600 text-white font-medium transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';

    const sizeClasses = getSizeClasses(size);
    const shapeClass = shape; // shape already contains the Tailwind class

    const buttonClasses = `${baseStyles} ${sizeClasses} ${shapeClass}`;

    return (
        <button className={buttonClasses}>
            {title}
        </button>
    );
};

export default Button;