import React from "react";
import { CuisineList, RestaurantsList } from "../components";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold py-2">Select your Cuisine:</h1>
      <CuisineList />
      <RestaurantsList />
    </div>
  );
};

export default Home;
