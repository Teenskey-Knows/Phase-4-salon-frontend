import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./stateless-components/Navbar/Navbar";
import Account from "./statefull-components/Account/Account";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="container">
          <Route path={Routes.ACCOUNT} component={Account} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
