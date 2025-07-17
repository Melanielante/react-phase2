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
        <Footer/>
    </>
  )
}

export default App