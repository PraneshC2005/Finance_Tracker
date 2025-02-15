import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Report from './components/Report';
import Schedule from './components/Schedule';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function Layout() {
  const location = useLocation(); // Get the current route
  const hideNavbarRoutes = ['/', '/signup']; // Pages where Navbar should be hidden

  return (
    <div className={hideNavbarRoutes.includes(location.pathname) ? 'auth-page' : 'default-page'}>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />} {/* Show Navbar only if route is not in hideNavbarRoutes */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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
