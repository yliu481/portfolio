import React from "react";
import "./sass/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppBar from "./components/AppBar";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import Contact from "./components/Bottom";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="page-container ">
      <Banner />
      <AppBar/>
      <Profile />
      <Experiences/>
      <Projects />
      <Skills />
      <Contact/>
    </div>
  );
}

export default App;
