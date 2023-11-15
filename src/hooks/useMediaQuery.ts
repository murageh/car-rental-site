'use client';

// This file contains the useMediaQuery hook, which is used to determine if the
// user's screen is large enough to display the mobile menu.

import {useEffect, useState} from 'react';

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [matches, query]);

    return matches;
};

const useIsMobile = () => useMediaQuery('(max-width: 1024px)');
const useIs768 = () => useMediaQuery('(max-width: 768px)');

export {useIs768, useIsMobile, useMediaQuery};