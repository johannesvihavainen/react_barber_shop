import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import BarberDisplay from './components/BarberDisplay';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar />} />
      </Routes>
      <Hero />
      <BarberDisplay />
    </div>
  );
}

export default App;
