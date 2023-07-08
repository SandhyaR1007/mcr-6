import React from "react";
import { useFoodContext } from "../context/FoodContext";

const CuisineList = () => {
  const { cuisineList, selectedCuisine } = useFoodContext();
  return (
    <div className="flex gap-3 flex-wrap py-3">
      {cuisineList.map((data) => (
        <span
          className={`cursor-pointer px-3 py-1 rounded-md  text-white ${
            selectedCuisine === data.id
              ? "bg-black hover:bg-gray-800"
              : "bg-red-400 hover:bg-red-600"
          } transition`}
        >
          {data.name}
        </span>
      ))}
    </div>
  );
};

export default CuisineList;
