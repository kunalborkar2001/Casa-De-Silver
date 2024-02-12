import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Welcome.css';

const Welcome = () => {
  const welcomeRef = useRef(null);

  useEffect(() => {
    const welcomeElement = welcomeRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the Welcome component is in the viewport, animate it
          gsap.from('.welcomeLeft', { opacity: 0, y: 100, duration: 1 });
          gsap.from('.welcomeRight', { opacity: 0, y: 100, duration: 1, delay: 0.5 });

          // Stop observing once animation is done
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (welcomeElement) {
      observer.observe(welcomeElement);
    }

    return () => {
      if (welcomeElement) {
        observer.unobserve(welcomeElement);
      }
    };
  }, []);

  return (
    <div className='Welcome' ref={welcomeRef}>
      <div className='welcomeLeft'>
        <img src="https://d3kanykijpjn5y.cloudfront.net/d9520615cdf9c6f9f7e6e1c168c07585.png" alt="kunalborkar2001@gmail.com" />
        <h1>Welcome</h1>
        <p>A BREATHTAKING FINE <br /> DINING EXPERIENCE <br />AWAITS YOU!</p>
      </div>
      <div className='welcomeRight'>
        <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg.webp" alt="kunalborkar2001@gmail.com" />
      </div>
    </div>
  );
};

export default Welcome;
