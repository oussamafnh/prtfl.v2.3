import * as React from "react";
import "./app.css";
import XNavbar from "./components/navbar";
import Home from "./components/home";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="app-container">
        <div><Home /></div>
        <div><Resume /></div>
        <div><Portfolio /></div>
      </div>
      <XNavbar />
    </>
  );
}

export default App;






// import React, { useEffect } from "react";
// import { motion, useAnimation, useViewportScroll } from "framer-motion";
// import XNavbar from "./components/navbar";
// import Home from "./components/home";
// import Resume from "./components/resume";
// import Portfolio from "./components/portfolio";
// import "./app.css";

// function App() {
//   const { scrollY } = useViewportScroll();
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({
//       x: scrollY,
//     });
//   }, [controls, scrollY]);

//   return (
//     <div className="app-container">
//       <motion.div
//         className="section"
//         animate={controls}
//         style={{ x: controls }}
//       >
//         <Home />
//       </motion.div>
//       <motion.div
//         className="section"
//         animate={controls}
//         style={{ x: controls }}
//       >
//         <Resume />
//       </motion.div>
//       <motion.div
//         className="section"
//         animate={controls}
//         style={{ x: controls }}
//       >
//         <Portfolio />
//       </motion.div>
//       <XNavbar />
//     </div>
//   );
// }

// export default App;








// import * as React from "react";
// import "./app.css";
// import Navbar from "./components/navbar";
// import Home from "./components/home";
// import Resume from "./components/resume";
// import Portfolio from "./components/portfolio";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function App() {
//  return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/resume" component={Resume} />
//         <Route path="/portfolio" component={Portfolio} />
//       </Switch>
//     </Router>
//  );
// }

// export default App;
