import "./AboutUs.css"
import instagram from "../../Assets/instagram.png"
import facebook from "../../Assets/facebook.png"

const AboutUs = () => {
    return (
        <div className="AboutUs" id="AboutUs">
            <h1 className="heading">About Us</h1>
            <div className="AboutSub">
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
    )
}

export default AboutUs