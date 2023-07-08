import React from "react";
import { CuisineList } from "../components";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold py-2">Select your Cuisine:</h1>
      <CuisineList />
    </div>
  );
};

export default Home;
