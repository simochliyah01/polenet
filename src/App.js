import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Valeurs from './sections/Valeurs';
import Avantages from './sections/Avantages';
import Processus from './sections/Processus';
import Qualite from './sections/Qualite';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Valeurs />
      <Avantages />
      <Processus />
      <Qualite />
      <Contact />
    </div>
  );
}

export default App;