import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Hero.css';
import Button from 'react-bootstrap/Button';

const Hero = () => {
    useEffect(() => {
        gsap.from('.heading', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
        gsap.from('.subHeading', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
        gsap.from('.menuButton', { opacity: 0, scale: 0, duration: 1, delay: 1 });
    }, []); 

    return (
        <div className='Hero'>
            <h1 className='heading'>Welocome to</h1>
            <h1 className='subHeading'>Casa <span style={{ color: "red" }}>De</span>  Silver</h1>
            <Button className='menuButton' variant="light" size="lg"><a href="#Menu">Look Menu</a></Button>
        </div>
    );
};

export default Hero;
