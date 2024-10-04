import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/loginPage';
import Register from './pages/registerPage';
import Kasir from './pages/kasir';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/penjualan/kasir" element={<Kasir/>} />
        <Route exact path="/penjualan/penjualan" element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;
