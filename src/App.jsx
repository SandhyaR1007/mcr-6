import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

const App = () => {
  return (
    <div className="p-3 w-[90vw] m-auto">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
