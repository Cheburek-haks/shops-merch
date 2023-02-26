import React from "react";
import "./App.css";
import Main from "./layouts/Main";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import BasketContent from "./components/content/BasketContent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Main />} />
          <Route path="/user/basket" element={<BasketContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
