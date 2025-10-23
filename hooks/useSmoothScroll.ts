// Fix: Import `React` to provide the namespace for types like `React.MouseEvent`.
import React, { useCallback } from 'react';

/**
 * A hook that returns a function to smoothly scroll to an element on the page.
 * It uses the native `scrollIntoView` API, which respects the CSS `scroll-margin-top` property
 * to account for sticky headers.
 */
export const useSmoothScroll = () => {
    const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        // Prevent the default browser anchor link behavior.
        e.preventDefault();
        
        const targetId = e.currentTarget.getAttribute('href');

        // Ensure we have a valid hash link.
        if (!targetId || !targetId.startsWith('#')) {
            console.warn('Smooth scroll target is not a valid ID hash:', targetId);
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Optionally, update the URL hash without causing a page jump
            if (history.pushState) {
                history.pushState(null, '', targetId);
            }
        } else {
            console.warn('Smooth scroll target element not found:', targetId);
        }
    }, []);

    return scrollTo;
};
