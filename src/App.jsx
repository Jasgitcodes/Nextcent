import { useState } from 'react'
import Navbar from './components/Navbar'  // Importing the navbar component
import Footer from './components/Footer'  // Importing the footer component
import Home from './app/Home'  // Importing the home component
import './index.css'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
