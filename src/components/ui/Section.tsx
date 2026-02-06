import type { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    title?: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
    background?: 'white' | 'gray';
}

const Section = ({
    id,
    title,
    subtitle,
    children,
    className = '',
    background = 'white'
}: SectionProps) => {
    const bgClass = background === 'gray' ? 'bg-accent/5' : 'bg-white';

    return (
        <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        {title && <h2 className="text-3xl md:text-4xl font-bold font-display text-secondary mb-4">{title}</h2>}
                        {subtitle && <p className="text-lg text-slate-600">{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
