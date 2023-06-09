import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import { Project } from "./components/Projects/Project";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { utils } from "./components/utils/utils";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";

function App() {
  const location = useLocation();
  const handleInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="App">
      {/* Navbar */}
      {location.pathname === "/" && (
        <Particles id="particles" options={utils} init={handleInit} />
      )}

      <Navbar />

      {/* Main Page Component */}
      <div className="App-main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
