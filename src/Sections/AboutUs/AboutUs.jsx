import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./AboutUs.css";
import instagram from "../../Assets/instagram.png";
import facebook from "../../Assets/facebook.png";

const AboutUs = () => {
    const aboutSubRef = useRef(null);

    useEffect(() => {
        const aboutSubElement = aboutSubRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // If the .AboutSub section is in the viewport, animate it
                    gsap.from('.heading', { opacity: 0, y: 100, duration: 2 });
                    gsap.from(aboutSubElement, { opacity: 0, y: 100, duration: 1, delay: 0.5 });
                    // Stop observing once animation is done
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        if (aboutSubElement) {
            observer.observe(aboutSubElement);
        }

        return () => {
            if (aboutSubElement) {
                observer.unobserve(aboutSubElement);
            }
        };
    }, []);

    return (
        <div className="AboutUs" id="AboutUs">
            <h1 className="heading">About Us</h1>
            <div className="AboutSub" ref={aboutSubRef}>
                <div className="aboutPara">
                    <p>
                        Delight yourself with an exquisite fine dining experience <br />
                        with amazing Indian & fast food delicacies. <br />
                        Enjoy scrumptious multicuisine food with your loved one’s <br />
                        in a mesmerizing set up and raise a toast to good times! <br />
                    </p>
                    <div className="socialLogos">
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/casadesilver.pune/"><img src={instagram} alt="instagram" /></a>
                        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/casadesilverpune?mibextid=ZbWKwL"><img src={facebook} alt="facebook" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
