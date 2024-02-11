import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Hero from './Sections/Hero/Hero';
import Welcome from './Sections/Welcome/Welcome';
import Menu from './Sections/Menu/Menu';
import Gallery from './Sections/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Welcome />
      <Menu />
      <Gallery />
    </div>
  );
}

export default App;
