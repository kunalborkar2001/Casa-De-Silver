import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Hero from './Sections/Hero/Hero';
import Welcome from './Sections/Welcome/Welcome';
import Menu from './Sections/Menu/Menu';
import Gallery from './Sections/Gallery/Gallery';
import AboutUs from './Sections/AboutUs/AboutUs';
import Quotes from './Sections/Quotes/Quotes';

function App() {
  return (
    <div className="App" id='Home'>
      <Navbar />
      <Hero />
      <Welcome />
      <Menu />
      <Gallery />
      <AboutUs />
      <Quotes />
    </div>
  );
}

export default App;
