import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import BarberDisplay from './components/BarberDisplay';
import EmailNewsLetter from './components/EmailNewsLetter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar />} />
      </Routes>
      <Hero />
      <BarberDisplay />
      <EmailNewsLetter />
      <Footer />
    </div>
  );
}

export default App;
