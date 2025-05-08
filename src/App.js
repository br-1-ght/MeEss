import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Works";
import Certificate from "./pages/Logo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
     <Navbar />
     <Hero />
     <Skills />
     <Projects />
     <Certificate />
     <Footer />
    </div>
  );
}

export default App;

