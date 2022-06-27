import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Technologies />
      <Contact />
      <Services />
    </main>
  );
}

export default App;
