import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Articles from "./Pages/Articles";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
