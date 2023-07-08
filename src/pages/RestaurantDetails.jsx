import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFoodContext } from "../context/FoodContext";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AddReview, RestaurantProfile } from "../components";
import ReviewCard from "../components/ReviewCard";
const RestaurantDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getRestaurantById } = useFoodContext();
  const [showModal, setShowModal] = useState(false);
  const restaurantDetails = getRestaurantById(Number(location.state.id));

  return (
    <div className="w-full md:w-[70vw] lg:w-[60vw] m-auto flex flex-col gap-3">
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
      <RestaurantProfile
        restaurantDetails={restaurantDetails}
        setShowModal={setShowModal}
      />
      <main className="px-4">
        <section>Reviews</section>
        <section>
          {restaurantDetails.ratings.map((review) => (
            <ReviewCard review={review} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default RestaurantDetails;
