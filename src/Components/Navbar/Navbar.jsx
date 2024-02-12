import { useState, useEffect } from 'react';
import TemporaryDrawer from '../OffCanvas/OffCanvas';
import './Navbar.css';

const Navbar = () => {
    const [hideLogo, setHideLogo] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Change 100 to the desired scroll position where you want to hide the logo
            if (scrollPosition > 100) {
                setHideLogo(true);
            } else {
                setHideLogo(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='Navbar'>
                <div className={`navLogo ${hideLogo ? 'hidden' : ''}`}>
                    <img
                        src="https://d3kanykijpjn5y.cloudfront.net/d9520615cdf9c6f9f7e6e1c168c07585.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <div className='bar'>
                        <TemporaryDrawer />
                    </div>
                </div>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Menu">Menu</a></li>
                    <li><a href="#Gallery">Gallery</a></li>
                    <li><a href="#AboutUs">About Us</a></li>
                    <li><a href="#Location">Location</a></li>
                    <li><a href="#ContactUs">Contact Us</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;
