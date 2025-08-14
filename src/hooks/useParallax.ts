import { useEffect, useState } from 'react';

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleParallax = () => {
      const slowElements = document.querySelectorAll('.parallax-slow');
      const fastElements = document.querySelectorAll('.parallax-fast');

      slowElements.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrollY * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      fastElements.forEach((element) => {
        const speed = 0.8;
        const yPos = -(scrollY * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleParallax);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallax);
    };
  }, [scrollY]);

  return scrollY;
};