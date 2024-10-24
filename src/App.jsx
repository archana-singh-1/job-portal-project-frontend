import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup.jsx"; 
import Navbar from './components/Navbar.jsx';
import LandingPage from './components/LandingPage.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
