import React from "react";
import { useFoodContext } from "../context/FoodContext";
import MenuList from "./MenuList";
import { useNavigate } from "react-router-dom";

const RestaurantsList = () => {
  const { filteredRestaurants } = useFoodContext();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3">
      {filteredRestaurants.map((data) => (
        <div
          key={data.id}
          onClick={() =>
            navigate(`/restaurant/${data.name.replace(" ", "-")}`, {
              state: { id: data.id },
            })
          }
        >
          <h1 className="text-xl font-semibold py-3 cursor-pointer">
            Dishes by {data.name}
          </h1>
          <MenuList menu={data.menu} place={data.name} />
        </div>
      ))}
    </div>
  );
};

export default RestaurantsList;
