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
          <h3>Memecoin</h3>
          <p>
            Copyright © {new Date().getFullYear()} $PERI. All
            rights reserved.
          </p>
        </footer>
      </div></>
  );

}

export default App;
