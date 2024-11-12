import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup.jsx"; 
import Login from "./components/Login.jsx";
import Navbar from './components/Navbar.jsx';
import LandingPage from './components/LandingPage.jsx';
import Footer from './Footer.jsx';
import Logout from "./components/Logout.jsx"; 
import JobDetailPage from './components/JobDetailsPage.jsx';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/job/:jobId" element={<JobDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;