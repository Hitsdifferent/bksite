'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AnimatedBlock({ children }) {
  const scope = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      scope.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
        markers: false,
          trigger: scope.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, { scope });

  return (
    <div ref={scope}>
        {children}
    </div>
  );
}
