import { useState, useEffect, RefObject } from 'react';
import { IntersectionOptions, InViewResult } from '@/types/types';

const useInView = (
  ref: RefObject<Element>,
  options?: IntersectionOptions
): InViewResult => {
  const [inView, setInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        setHasBeenInView(true);
      } else {
        setInView(false);
      }
    }, options);

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return { inView, hasBeenInView };
};

export default useInView;
