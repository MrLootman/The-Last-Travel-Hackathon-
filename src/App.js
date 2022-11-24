import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Destinations from './pages/Destinations';
import Agency from './pages/Agency';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destinations-finales" element={<Destinations />} />
        <Route path="/agence-tous-risques" element={<Agency />} />
        <Route path="/nous-contacter-vraiment" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
