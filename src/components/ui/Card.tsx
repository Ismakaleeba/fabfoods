import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    className?: string;
    onClick?: () => void;
}

const Card = ({ title, description, icon, className = '', onClick }: CardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`bg-white p-6 rounded-xl shadow-lg border border-slate-100 transition-shadow hover:shadow-xl ${className}`}
            onClick={onClick}
        >
            {icon && (
                <div className="mb-4 text-primary bg-orange-50 w-12 h-12 flex items-center justify-center rounded-lg">
                    {icon}
                </div>
            )}
            <h3 className="text-xl font-bold mb-2 text-secondary font-display">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </motion.div>
    );
};

export default Card;
