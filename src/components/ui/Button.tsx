import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
}

const Button = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

    const variants = {
        primary: "bg-primary text-white hover:bg-orange-700",
        secondary: "bg-secondary text-white hover:bg-slate-700",
        outline: "border border-input hover:bg-slate-100 hover:text-slate-900 border-slate-200"
    };

    const sizes = {
        sm: "h-9 px-3 text-xs",
        md: "h-10 py-2 px-4",
        lg: "h-12 px-8 text-lg"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
