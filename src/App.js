import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Hero from './Sections/Hero/Hero';
import Welcome from './Sections/Welcome/Welcome';
import Menu from './Sections/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Welcome />
      <Menu />
    </div>
  );
}

export default App;
