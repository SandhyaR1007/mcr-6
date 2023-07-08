import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFoodContext } from "../context/FoodContext";
import { AiFillStar, AiOutlineArrowLeft } from "react-icons/ai";
import { AddReview } from "../components";
const RestaurantDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getRestaurantById } = useFoodContext();
  const [showModal, setShowModal] = useState(false);
  const restaurantDetails = getRestaurantById(Number(location.state.id));

  return (
    <div className="md:[70vw] lg:w-[60vw] m-auto flex flex-col gap-3">
      <AddReview
        resId={restaurantDetails?.id}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <nav className="mb-3 ">
        <AiOutlineArrowLeft
          className="text-xl font-bold  cursor-pointer"
          onClick={() => navigate("/")}
        />
      </nav>
      <header className="flex items-center justify-between py-4 bg-gray-100 rounded-md p-4">
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
            className="text-sm px-3 py-1 rounded-md  text-white bg-red-500 hover:bg-red-700"
          >
            Add Review
          </button>
        </section>
      </header>
      <main className="px-4">
        <section>Reviews</section>
        <section>
          {restaurantDetails.ratings.map((review) => (
            <section className="flex justify-between items-center mb-3 border-b p-2">
              <section className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <img
                    src={review?.pp}
                    alt={review?.revName}
                    className="h-10 w-10 rounded-full"
                  />
                  <span className=" font-semibold">{review?.revName}</span>
                </div>
                <p className="text-gray-600 text-sm">{review?.comment}</p>
              </section>
              <span className="flex items-center gap-1 px-2 py-1 bg-red-100 rounded-md text-sm border border-red-200 font-semibold">
                {review?.rating} <AiFillStar className="text-sm text-red-500" />
              </span>
            </section>
          ))}
        </section>
      </main>
    </div>
  );
};

export default RestaurantDetails;
