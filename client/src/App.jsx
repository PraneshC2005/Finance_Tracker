import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Report from './components/Report';
import Schedule from './components/Schedule';
import Navbar from './Components/Navbar';

function Layout() {
  const location = useLocation(); // Get the current route

  return (
    <div className={location.pathname === '/' ? 'login-page' : 'default-page'}>
      {location.pathname !== '/' && <Navbar />} {/* Show Navbar except on Login page */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
