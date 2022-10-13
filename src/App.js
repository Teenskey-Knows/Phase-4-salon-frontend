import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./stateless-components/Navbar/Navbar";
import Account from "./statefull-components/Account/Account";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="container"></main>
      </BrowserRouter>
    </div>
  );
}

export default App;
