import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, RestaurantDetails } from "./pages";

const App = () => {
  return (
    <div className="p-3 xs:w-[90vw] m-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:name" element={<RestaurantDetails />} />
      </Routes>
    </div>
  );
};

export default App;
