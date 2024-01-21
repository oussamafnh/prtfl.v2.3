import React, { useState, useEffect } from "react";
import Loader from "./components/loader";
import "./app.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import About from "./components/about";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading with a timeout
    setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust the duration as needed

    // Your other initialization code
  }, []);
  // return (
  //   <div>
  //     {isLoading ? (
  //       <Loader />
  //     ) : (
  //     <div className="app-container">
  //       <div><Home /></div>
  //       <div id="resume"><Resume /></div>
  //       <div id="portfolio"><Portfolio /></div>
  //     </div>
  //     <Navbar />
  //     )}
  //   </div>
  // );
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* <div className="app-container"> */}
          <div><Home /></div>
          <div id="about"><About /></div>
          <div id="resume"><Resume /></div>
          <div id="portfolio"><Portfolio /></div>
          {/* </div> */}
          <Navbar />
        </>
      )}
    </div>
  );
}

export default App;


