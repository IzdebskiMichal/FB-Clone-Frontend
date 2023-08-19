import React from 'react'
import './App.css';
import Header from './components/Header';
import Home from './pages/home'
import Games from './pages/games';
import Media from './pages/media';
import Groups from './pages/groups';
import { Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/media" element={<Media />} />
          <Route path="/groups" element={<Groups />} />
        </Routes>
      </>

    
  )
}
export default App

