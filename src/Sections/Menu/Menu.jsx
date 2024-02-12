import "./Menu.css"
import Image from 'react-bootstrap/Image';
import Grid from '@mui/material/Unstable_Grid2';
import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

const Menu = () => {
  const welcomeRef = useRef(null);

  useEffect(() => {
    const welcomeElement = welcomeRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the Welcome component is in the viewport, animate it
          gsap.from('.menuHeading', { opacity: 0, y: 100, duration: 1 });
          gsap.from('.gridMenu', { opacity: 0, y: 100, duration: 1, delay: 0.5 });

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
    <div className="Menu" id="Menu" ref={welcomeRef}>
      <div className="menuHeading">
        <h1>Menu</h1>
      </div>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={4} lg={3} >
          <div className="gridMenu">
            <Image className="menuImg" src="https://d3kanykijpjn5y.cloudfront.net/category-33451-small-200.jpg" alt="kunalborkar2001@gmail.com" />
            <h3>Best Seller</h3>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <div className="gridMenu">
            <Image className="menuImg" src="https://d3kanykijpjn5y.cloudfront.net/category-32553-small-200.jpg" alt="kunalborkar2001@gmail.com" />
            <h3 className="food">Food</h3>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <div className="gridMenu">
            <Image className="menuImg" src="https://d3kanykijpjn5y.cloudfront.net/category-32761-small-200.jpg" alt="kunalborkar2001@gmail.com" />
            <h3 className="dessert">Desserts</h3>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <div className="gridMenu">
            <Image className="menuImg" src="https://d3kanykijpjn5y.cloudfront.net/category-32762-small-200.jpg" alt="kunalborkar2001@gmail.com" />
            <h3>Beverages</h3>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <div className="gridMenu">
            <Image className="menuImg" src="https://d3kanykijpjn5y.cloudfront.net/category-33455-small-200.jpg" alt="kunalborkar2001@gmail.com" />
            <h3 className="drinks">Drinks</h3>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Menu;