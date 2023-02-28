import React from "react";
import "./App.css";
import Main from "./layouts/Main";
import { Routes, useParams } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import BasketContent from "./components/content/basket/BasketContent";
import ScrollSm from "./utils/ScrollSmoother";

function App() {
  ScrollSm();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Main />} />\
          <Route path="/user" element={<Main />} />
          <Route path="/user/:id" element={<BasketContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
