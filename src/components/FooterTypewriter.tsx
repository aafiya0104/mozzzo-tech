import { useEffect, useState, useRef } from 'react';

interface FooterTypewriterProps {
  text: string;
  highlightChars: string[];
  className?: string;
}

// Smoother typing: slightly variable delay for a more natural feel (40–55ms)
const TYPING_BASE_MS = 42;
const TYPING_VARY_MS = 14;
const FADE_DURATION_MS = 550;

/**
 * Typewriter with shiny text effect. Types the phrase, holds, then fades out and repeats.
 */
export function FooterTypewriter({ text, highlightChars: _highlightChars, className = '' }: FooterTypewriterProps) {
  const [displayLength, setDisplayLength] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'hold' | 'fade'>('typing');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (phase === 'typing') {
      if (displayLength >= text.length) {
        timeoutRef.current = setTimeout(() => setPhase('hold'), 100);
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
      }
      const delay = TYPING_BASE_MS + Math.random() * TYPING_VARY_MS;
      timeoutRef.current = setTimeout(() => setDisplayLength((n) => n + 1), delay);
      return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }
    if (phase === 'hold') {
      timeoutRef.current = setTimeout(() => setPhase('fade'), 2000);
      return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }
    if (phase === 'fade') {
      timeoutRef.current = setTimeout(() => {
        setDisplayLength(0);
        setPhase('typing');
      }, FADE_DURATION_MS);
      return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }
  }, [displayLength, phase, text.length]);

  const visible = phase === 'fade' ? '' : text.slice(0, displayLength);

  return (
    <div
      className={`inline-flex items-center justify-center min-h-[1.2em] whitespace-nowrap ${className}`}
      aria-label={text}
    >
      <span
        className={`inline-flex items-center justify-center overflow-hidden transition-opacity duration-500 ease-in-out ${
          phase === 'fade' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <span className="shiny-text inline-flex items-center">
          {visible}
          {phase !== 'fade' && phase === 'typing' && (
            <span className="animate-pulse ml-0.5 opacity-90">|</span>
          )}
        </span>
      </span>
    </div>
  );
}
