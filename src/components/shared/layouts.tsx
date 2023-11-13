import React from 'react';

interface ChipProps {
    title?: string;
    children: React.ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    style?: React.CSSProperties;
}

export const Chip = ({title, children, className, size, style, color='primary'}: ChipProps) => {
    const baseClass = 'px-2 py-1 rounded-full';
    const sizeClass = size ? (size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base') : 'text-sm';
    const borderRoundedClass = 'rounded-full';
    const transitionClass = 'transition-all ease-in-out duration-300';

    const colors = {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-white',
        success: 'bg-success text-white',
        danger: 'bg-danger text-white',
        warning: 'bg-warning text-white',
        info: 'bg-info text-white',
        light: 'bg-light text-black',
        dark: 'bg-dark text-white',
    };
    const bgClass = colors[color];
    const borderClass = 'border border-transparent';
    const hoverClass = 'hover:font-medium hover:bg-white hover:text-black hover:border-black';
    const activeClass = 'active:scale-100';
    const focusClass = 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary';

    return (
        <div title={title} className={`${baseClass} ${sizeClass} ${borderRoundedClass} ${borderClass} ${bgClass} ${hoverClass} ${activeClass} ${focusClass} ${transitionClass} ${className} flex items-center`} style={style}>
            {children}
        </div>
    );
};