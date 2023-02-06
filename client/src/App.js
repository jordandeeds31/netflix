import React from 'react'
import Home from "./pages/home/Home";
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = true;
  let a = React.version
  console.log(a);
  return (
    <div className="bg-[#0b0b0b]">
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/register" />} />
          <Route path="/movies" element={user ? <Home type="movie" /> : <Navigate to="/register" />} />
          <Route path="/series" element={user ? <Home type="series" /> : <Navigate to="/register" />} />
          <Route path="/watch" element={user ? <Watch /> : <Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
