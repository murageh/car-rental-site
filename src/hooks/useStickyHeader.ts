'use client';

// This file contains the useStickyHeader hook, which is used to determine if the
// page has scrolled far enough to display the sticky header,
// hence applying the sticky class to the header.

import {useEffect, useState} from 'react';

export const useStickyHeader = (offset = 100) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const listener = () => setIsSticky(window.scrollY > offset);
        window.addEventListener('scroll', listener);
        return () => window.removeEventListener('scroll', listener);
    }, [offset]);

    return isSticky;
};

