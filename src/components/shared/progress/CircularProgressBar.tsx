// 'use client';
import React from 'react';
import './CircularProgressBar.css';

interface CircularProgressBarProps {
    headline?: string;
    unit?: string;
    metric?: string;
    progress?: number;
    offset?: number;
}

const CircularProgressBar = ({headline, unit, metric, progress=60, offset=0}: CircularProgressBarProps) => {
    return (
        <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{
            // @ts-ignore
            '--value': progress,
            '--offset': offset,
            '--color': 'white',
        }}>
            <span className={"font-bold text-[16px]"}>{headline}</span>
            <span className={"text-[8px]"}>{unit}</span>
            <span className={"text-[10px] mt-2"}>{metric}</span>
        </div>
    );
};

export default CircularProgressBar;