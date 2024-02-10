import './Hero.css'
import Button from 'react-bootstrap/Button';

const Hero = () => {
    return (
        <>
            <div className='Hero'>
                <h1 className='heading'>Welocome to</h1>
                <h1 className='subHeading'>Casa <span style={{color : "red"}}>De</span>  Silver</h1>
                <Button className='menuButton' variant="light" size="lg">Look Menu</Button>
            </div>
        </>
    )
}

export default Hero