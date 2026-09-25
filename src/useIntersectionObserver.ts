import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [node, setNode] = useState<Element | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    
    // SSR Safe
    if (typeof window === 'undefined' || !window.IntersectionObserver) return;

    observer.current = new IntersectionObserver(([newEntry]) => {
      setEntry(newEntry);
    }, options);

    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, options.root, options.rootMargin, options.threshold]);

  return [setNode, entry] as const;
}
