import './Footer.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="top">
                    <div class="pages">
                            <img src="https://d3kanykijpjn5y.cloudfront.net/d9520615cdf9c6f9f7e6e1c168c07585.png" alt="logo" />
                        <ul>
                            <li><h3>Casa De Silver</h3></li>
                            <li><h5>Average Cost</h5></li>
                            <li><p>INR 1200 for two prople (approx)</p></li>
                            
                        </ul>

                        <ul>
                            <h3>Opening Hours</h3>
                            <li><p>11:00 AM - 11:00 PM</p></li>
                            <li><p>Happy Serving you Everyday!!</p></li>
                        </ul>

                        <ul>
                            <h3>Contact Us</h3>
                            <li><a href="#"><EmailIcon/> casadesilver03@gmail.com</a></li>
                            <li><a href="#"><WhatsAppIcon/> WhatsApp : +91 7768035252</a></li>
                            <li><a href="#"><EditLocationAltIcon/> Aundh-Ravet Brt Road Near Dange Chowk Behind Silver Fitness Club,</a></li>
                            <li><a href="#">Tathawade, Pune - 411033</a></li>
                        </ul>
                    </div>
                </div>
                <div class="social">
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-github"></i>
                    <a href="https://www.facebook.com/casadesilverpune?mibextid=ZbWKwL"><i class="fab fa-facebook"><FacebookIcon/></i></a>
                    <a href='https://www.instagram.com/casadesilver.pune'><i class="fab fa-instagram"><InstagramIcon/></i></a>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-youtube"></i>
                </div>
                <div class="info">
                    <div class="legal">
                        <a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a>
                    </div>
                    <div class="copyright">2024 Copyright &copy; Kunal Borkar</div>
                </div>
            </footer>
        </div>
    )
}

export default Footer