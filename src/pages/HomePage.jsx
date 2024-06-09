import React from "react";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function HomePage() {

  const backgroundColor = {
    background: 'rgba(250, 250, 250, 1)'
  };

  return (
    <div>
      <NavBar />
      <Home />
      <Footer style={backgroundColor}/>
    </div>
  );
}

export default HomePage;
