import React from "react";

// import './App.css';
import Title from "./title";
import About from "./About";
import Project from "./Project";
import Blog from "./Blog";
import Skillsec from "./Skillsec";
import Recom from "./Recom";
import { Fade } from "react-awesome-reveal";





//  this is a functional component
function HomePage() {
  return( 
    <div>
      <Fade >
        <Title name="Kushagra Agrawal" leadtext="I am a freelancer"/>,
        <Recom/>
        <Skillsec/>
        <Project/>
        <About/>
        <Blog/></Fade>
    </div>
);
}

export default HomePage;