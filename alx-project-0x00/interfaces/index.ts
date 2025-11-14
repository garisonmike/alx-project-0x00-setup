// interfaces/index.ts

export interface PillProps {
    title: string
}

export interface ButtonProps {
    title: string;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    // You can add more props like onClick, bgColor, etc., if needed
}