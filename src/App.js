import React from "react";
import Navbar from "./components/Navbar";
import Aboutus from "./pages/About";
import HomePage from "./pages/HomePage";
import Singlepg from "./pages/Singlepage";
import Contact from "./pages/Contact";
import Api from "./pages/Api";
import Feedback from "./pages/Feedback";
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
            <Route path="/about" element={<><Aboutus /><Footer /></>} />
            <Route path="/contact" element={<><Contact /><Footer /></>} />
            <Route path="drinks/:idDrink" element={<><Singlepg /><Footer /></>} />
            <Route path="/api" element={<><Api /><Footer /></>} />
            <Route path="/feedback" element={<Feedback/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
