import React from "react";
import Header from "./Header";
import Projects from "./Project";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="header-avatar-container">
        <img src="/assets/Avatar.png" alt="Avatar" className="avatar-image" />
        <Header />
      </div>
      <img src="/assets/Frame824.png" alt="Description of image" className="header-image" />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
