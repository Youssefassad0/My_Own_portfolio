import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./about/About";
import Header from "./components/header/Header";

function Index() {
  return (
    <BrowserRouter>
     <div className="container" id="up">
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default Index;
