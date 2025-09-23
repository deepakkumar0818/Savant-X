'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface InlineAnimatedCounterProps {
  text: string; // Full text like "340% increase in lead conversion"
  duration?: number;
}

export default function InlineAnimatedCounter({ text, duration = 2000 }: InlineAnimatedCounterProps) {
  const [animatedText, setAnimatedText] = useState(text);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  const animateNumbers = useCallback(() => {
    // Extract number and percentage from text
    const numberMatch = text.match(/(\d+)%/);
    if (!numberMatch) {
      setAnimatedText(text);
      return;
    }

    const targetNumber = parseInt(numberMatch[1]);
    const restOfText = text.replace(/\d+%/, 'PLACEHOLDER%');

    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentNumber = Math.floor(targetNumber * easeOutQuart);
      
      const currentText = restOfText.replace('PLACEHOLDER%', `${currentNumber}%`);
      setAnimatedText(currentText);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setAnimatedText(text);
      }
    };

    requestAnimationFrame(animate);
  }, [text, duration]);

  useEffect(() => {
    if (hasStarted) return;

    // Intersection Observer to start animation when element comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          animateNumbers();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, animateNumbers]);

  return (
    <span ref={counterRef}>
      {animatedText}
    </span>
  );
}
