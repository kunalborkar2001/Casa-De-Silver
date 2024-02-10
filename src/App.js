import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Hero from './Sections/Hero/Hero';
import Welcome from './Sections/Hero/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Welcome />
    </div>
  );
}

export default App;
