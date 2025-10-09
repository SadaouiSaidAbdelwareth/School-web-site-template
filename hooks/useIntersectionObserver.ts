import { useState, useEffect, useRef, MutableRefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
}

export function useIntersectionObserver(
  options: IntersectionObserverOptions = {}
): [MutableRefObject<any>, boolean] {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Unobserve after it becomes visible to fire animation only once
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);

  return [elementRef, isVisible];
}