'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function AnimatedParagraph({ children }) {
  const scope = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      scope.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );
  }, { scope });

  return (
    <div
      ref={scope}
    >
      {children}
    </div>
  );
}
