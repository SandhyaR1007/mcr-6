import React from "react";
import { AiFillStar } from "react-icons/ai";
const RestaurantProfile = ({ restaurantDetails, setShowModal }) => {
  return (
    <header className="flex items-center justify-between  bg-gray-100 rounded-md p-4">
      <section className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">{restaurantDetails?.name}</h1>
        <p className="italic">{restaurantDetails?.description}</p>
        <p className="text-sm flex items-center gap-2">
          <span className="font-semibold">Average Rating: </span>{" "}
          <span className="text-red-600 font-bold flex items-center">
            <span>{restaurantDetails?.averageRating}</span>
            <AiFillStar className="text-sm text-red-500" />
          </span>
        </p>
        <p className="text-gray-600 text-sm">
          {restaurantDetails?.menu?.map((data) => data.name).join(", ")}
        </p>
        <p className="text-gray-600 text-sm">
          {restaurantDetails?.address}, {restaurantDetails?.phone}
        </p>
      </section>
      <section>
        <button
          onClick={() => setShowModal(true)}
          className="text-xs md:text-sm px-1 md:px-3 py-1 rounded-md  text-white bg-red-500 hover:bg-red-700"
        >
          Add Review
        </button>
      </section>
    </header>
  );
};

export default RestaurantProfile;
