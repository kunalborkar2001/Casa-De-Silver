import BasicTabs from '../../Components/Tabs/Tabs';
import './Gallery.css';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const galleryElement = galleryRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the Gallery component is in the viewport, animate it
          gsap.from('.galleryHeading', { opacity: 0, y: 100, duration: 2 });
          // Stop observing once animation is done
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (galleryElement) {
      observer.observe(galleryElement);
    }

    return () => {
      if (galleryElement) {
        observer.unobserve(galleryElement);
      }
    };
  }, []);

  return (
    <div className='Gallery' id='Gallery' ref={galleryRef}>
      <h1 className='galleryHeading'>Gallery</h1>
      <BasicTabs />
    </div>
  );
}

export default Gallery;
