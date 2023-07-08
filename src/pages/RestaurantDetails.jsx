import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFoodContext } from "../context/FoodContext";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AddReview, RestaurantProfile } from "../components";
import ReviewCard from "../components/ReviewCard";
import MenuList from "../components/MenuList";
import { menubarOptions } from "../utils/constants";
const RestaurantDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getRestaurantById } = useFoodContext();
  const [showModal, setShowModal] = useState(false);
  const [selectedMenuOption, setSelectedMenuOption] = useState("menu");
  const restaurantDetails = getRestaurantById(Number(location.state.id));

  return (
    <div className="w-full md:w-[70vw] lg:w-[60vw] m-auto flex flex-col gap-3">
      <AddReview
        resId={restaurantDetails?.id}
        showModal={showModal}
        setShowModal={setShowModal}
        setSelectedMenuOption={setSelectedMenuOption}
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
        <section className="py-3 border-b mb-4  flex items-center gap-3">
          {menubarOptions.map((data) => (
            <span
              onClick={() => setSelectedMenuOption(data)}
              key={data}
              className={` ${
                selectedMenuOption === data
                  ? "border-b-2 px-1 border-red-500 text-red-500"
                  : "border-b-2 px-1 border-transparent"
              } capitalize cursor-pointer transition-all delay-150`}
            >
              {data}
            </span>
          ))}
        </section>
        {selectedMenuOption === "reviews" ? (
          <section>
            {restaurantDetails.ratings.map((review) => (
              <ReviewCard review={review} />
            ))}
          </section>
        ) : (
          <section>
            <MenuList
              menu={restaurantDetails?.menu}
              place={restaurantDetails?.name}
            />
          </section>
        )}
      </main>
    </div>
  );
};

export default RestaurantDetails;
