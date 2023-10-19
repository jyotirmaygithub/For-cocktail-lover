import React from "react";
import Nav from "./components/Navbar";
import Aboutus from "./pages/About";
import Logo from "./pages/Logo";
import Singlepg from "./pages/Singlepage";
import Contact from "./pages/Contact";
import Api from "./pages/Api";
import Feedback from "./pages/Feedback";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Logo />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="drinks/:idDrink" element={<Singlepg />} />
            <Route path="/api" element={<Api />} />
            <Route path="/feedback" element={<Feedback/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
