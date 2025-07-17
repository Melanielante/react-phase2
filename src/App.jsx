
import home from "./home"
import React from 'react'
import Footer from './Components/Footer'
import Contact from "./Contact"
import Navbar from "./Navbar"

const App = () => {
  return (
    <>
        <Navbar />
        <Sidebar />
        <Contact />
        <home/>
        <Footer/>
    </>
  )
  }

export default App