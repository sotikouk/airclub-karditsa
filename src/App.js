import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from "./pages/about";
import Training from "./pages/training";
import Races from "./pages/races";
import Civil from "./pages/civil";
import Fotos from "./pages/fotos";
import SignUp from "./pages/signup";
import Home from "./pages/home";


function App() {
  return (
    <Router>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Home />} /> 
                <Route path="/about" element={<About />} />
                <Route
                    path="/training"
                    element={<Training />}
                />
                <Route
                    path="/races"
                    element={<Races />}
                />
                <Route path="/civil" element={<Civil />} />
                <Route path="/fotos" element={<Fotos />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </Router>

  );
}

export default App;
