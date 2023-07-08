import React from "react";
import { useFoodContext } from "../context/FoodContext";
import MenuList from "./MenuList";

const RestaurantsList = () => {
  const { filteredRestaurants } = useFoodContext();
  return (
    <div className="flex flex-col gap-3">
      {filteredRestaurants.map((data) => (
        <div key={data.id}>
          <h1 className="text-xl font-semibold py-3">Dishes by {data.name}</h1>
          <MenuList menu={data.menu} place={data.name} />
        </div>
      ))}
    </div>
  );
};

export default RestaurantsList;
