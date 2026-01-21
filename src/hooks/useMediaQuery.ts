import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  // Always start with false to prevent hydration mismatch
  // The SSR/pre-rendered HTML will have false, and client will update after hydration
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Update to the actual value after mount
    setMatches(media.matches);

    // Listen for changes
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    media.addEventListener('change', listener);

    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}
