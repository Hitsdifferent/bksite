'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function AnimatedTitle({ children }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(titleRef.current, { type: "lines" });

    gsap.from(split.lines, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    return () => split.revert(); // DOM reset bij unmount
  }, []);

  return (
    <div ref={titleRef}>
        {children}
    </div>
  );
}
