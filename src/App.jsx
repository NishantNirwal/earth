import React from'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Service from './pages/service/Service'
import Contact from './pages/contact/Contact'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Service/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
