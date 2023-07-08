import React from "react";
import { AiFillStar } from "react-icons/ai";
const ReviewCard = ({ review }) => {
  return (
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
  );
};

export default ReviewCard;
