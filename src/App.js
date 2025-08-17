import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Services from './components/Services';
import Home from './components/Home';
import Gallery from './components/Gallery';
import BookBarber from './components/BookBarber';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/book' element={<BookBarber />} />
      </Routes>
    </div>
  );
}

export default App;
