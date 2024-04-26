import React from "react";
import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <>
    <div className="navbar">
      <Header />
    </div>
    <div>
      <LandingPage />
    </div>
    <div>
    </div>
    <div>
        <footer>
          <p>
            Copyright © {new Date().getFullYear()} Juan J Vazquez G. All
            rights reserved.
          </p>
        </footer>
      </div></>
  );

}

export default App;
