import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Home from './component/Home';
import Nav from './component/Nav';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import About from './component/About';
import Portofolio from './component/Portofolio';



function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Portofolio" element={<Portofolio/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
