import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from "./components/Signup.jsx"
import './App.css'
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    // <div className="bg-blue-500 text-white p-4">
    //   Hello, Tailwind CSS!
    // </div>
    <>
       <Navbar/>
       <LandingPage/>
       <Footer/>
    </>
   
  )
}

export default App;
