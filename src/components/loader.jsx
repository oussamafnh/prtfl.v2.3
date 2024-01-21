// import React from "react";
// import "../css/Loader.css"; // Create a corresponding CSS file for styling
// import { Lightloader_logo } from "../images/lightloader_logo";

// function Loader() {
//   return (

//       <div className="logoLoader" >
//         <Lightloader_logo />
//       </div>
//   );
// }

// export default Loader;



import React, { useState, useEffect } from "react";
import "../css/Loader.css"; // Your CSS file
import { Lightloader_logo } from "../images/lightloader_logo";

function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading with a timeout
    setTimeout(() => {
      setIsLoading(false);
    }, 6000); // Adjust the duration as needed
  }, []);

  return (
    <div className={`logoLoader ${isLoading ? "" : "hidden"}`}>
      <Lightloader_logo className={`logoImageloader ${isLoading ? "loading" : ""}`} />
    </div>
  );
}

export default Loader;
