import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./Location.css";

const Location = () => {
    const locationHeadingRef = useRef(null);

    useEffect(() => {
        const headingElement = locationHeadingRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // If the heading is in the viewport, animate it
                    gsap.from(headingElement, { opacity: 0, y: 100, duration: 1 });
                    // Stop observing once animation is done
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        if (headingElement) {
            observer.observe(headingElement);
        }

        return () => {
            if (headingElement) {
                observer.unobserve(headingElement);
            }
        };
    }, []);

    return (
        <div className="Location" id="Location">
            <h1 className="locationHeading" ref={locationHeadingRef}>Location</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7561.82628897964!2d73.756092!3d18.622976!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM3JzIyLjciTiA3M8KwNDUnMzEuMiJF!5e0!3m2!1sen!2sin!4v1707660981585!5m2!1sen!2sin"
                className="map"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
                title="location"
            ></iframe>
        </div>
    );
};

export default Location;
