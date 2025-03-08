import React, { useRef, useEffect, useState } from 'react';
import './Marquee.css';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  number?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ children, speed = 50, number = 2 }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeContentRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState<number>(0);

  // Set up the total width based on the number of repeats
  useEffect(() => {
    if (marqueeContentRef.current) {
      setScrollWidth(marqueeContentRef.current.offsetWidth);
    }
  }, [children, number]);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee || scrollWidth === 0) return;

    let currentScroll = 0;

    const animateMarquee = () => {
      if (!marquee) return;
      currentScroll += 1;
      marquee.style.transform = `translateX(-${currentScroll}px)`;

      // Reset scroll to 0 after it scrolls out of view
      if (currentScroll >= scrollWidth * number) {
        currentScroll = 0;
      }

      setTimeout(animateMarquee, speed);
    };

    animateMarquee();

    return () => {
      // Cleanup if needed
    };
  }, [speed, scrollWidth, number]);

  return (
    <div className="marquee-container" ref={marqueeRef}>
      <div className="marquee-content-wrapper">
        {/* Repeat the content `number` times to create the infinite effect */}
        {Array.from({ length: number }).map((_, index) => (
          <div className="marquee-content" key={index} ref={marqueeContentRef}>
            {children}
          </div>
        ))}
        {/* Repeat again to ensure the infinite scroll */}
        {Array.from({ length: number }).map((_, index) => (
          <div className="marquee-content" key={`repeat-${index}`}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
