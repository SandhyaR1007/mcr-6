import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center py-10 flex flex-col gap-5 justify-center items-center">
      <h1 className="text-3xl font-semibold">PAGE NOT FOUND</h1>
      <button
        onClick={() => navigate("/")}
        className="text-xs md:text-sm px-1 md:px-3 py-1 rounded-md  text-white bg-red-500 hover:bg-red-700"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
