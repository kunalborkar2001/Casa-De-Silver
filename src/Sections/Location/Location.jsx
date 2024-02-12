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
            <div className='iFrames'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7561.82628897964!2d73.756092!3d18.622976!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM3JzIyLjciTiA3M8KwNDUnMzEuMiJF!5e0!3m2!1sen!2sin!4v1707660981585!5m2!1sen!2sin"
                    className="map"
                    style={{ border: "0" }}
                    loading="lazy"
                    title="location"
                >
                </iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!4v1707572363883!6m8!1m7!1sCAoSK0FGMVFpcE1oWFlGcFBtZXRTc29JM0N1WHNIcm5VNkprSDA5MTBNak1lVkE.!2m2!1d18.6228354!2d73.7583772!3f303.09356239173!4f-2.197604200057924!5f0.4000000000000002"
                    style={{ border: "0" }}
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title='360'
                    className='threeSixtyImg'
                >
                </iframe>

            </div>
        </div>
    );
};

export default Location;
