import React from "react";

const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSERM4x_I232_fJfqs5FC5Zvig1qYUxpt7aQ&usqp=CAU";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Team-gR3yh4t5</h1>
    <p className="lead">
      This is a sample application that demonstrates an  authentication flow for a single page application , We look forward
      to creating an MFA using blockchain 
      
    </p>
  </div>
);

export default Hero;
