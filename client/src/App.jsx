import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login'
import Home from './Components/Home'
import Report from './Components/Report'
import Schedule from './Components/Schedule'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/schedule" element={<Schedule />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
