import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <Navbar />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
