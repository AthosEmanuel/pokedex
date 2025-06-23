import "./index.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Details, Home, Pokedex } from "./modules";

import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
