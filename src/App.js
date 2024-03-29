import React from "react";
import Navbar from "./components/Navbar";
import Aboutus from "./pages/About";
import HomePage from "./pages/HomePage";
import Singlepg from "./pages/Singlepage";
import Contact from "./pages/Contact";
import Api from "./pages/Api";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="drinks/:idDrink" element={<><Singlepg /><Footer /></>} />
            <Route path="/api" element={<Api />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
