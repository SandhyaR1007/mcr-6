import React from "react";
import { useFoodContext } from "../context/FoodContext";

const Cuisine = ({ data, selectCuisine, selectedCuisine }) => (
  <label
    forhtml={data.id}
    className={`cursor-pointer px-3 py-1 rounded-md  text-white ${
      selectedCuisine == data.id
        ? "bg-red-800 hover:bg-red-700"
        : "bg-red-500 hover:bg-red-700"
    } transition`}
  >
    <input
      className="hidden"
      name="cuisine"
      type="radio"
      id={data.id}
      value={data.id}
      onClick={(e) => selectCuisine(Number(e.target.value))}
    />
    {data.name}
  </label>
);
const CuisineList = () => {
  const { cuisineList, selectedCuisine, selectCuisine } = useFoodContext();
  return (
    <div className="flex gap-3 flex-wrap py-3">
      {cuisineList.map((data) => (
        <Cuisine
          key={data.id}
          data={data}
          selectCuisine={selectCuisine}
          selectedCuisine={selectedCuisine}
        />
      ))}
      <button
        onClick={() => selectCuisine("")}
        className="px-3 py-1 rounded-md  text-gray-600 border border-gray-600 hover:bg-gray-600 hover:text-white"
      >
        Reset
      </button>
    </div>
  );
};

export default CuisineList;
