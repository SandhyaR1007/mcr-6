import { Button, Modal } from "antd";
import { useState } from "react";
import { useFoodContext } from "../context/FoodContext";
import { defaultImg, ratings } from "../utils/constants";
const AddReview = ({ resId, showModal, setShowModal }) => {
  const { addReview } = useFoodContext();
  const [review, setReview] = useState({
    revName: "Anonymous",
    pp: defaultImg,
    comment: "",
    rating: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(resId, review);
    setReview({
      revName: "Anonymous",
      pp: "",
      comment: "",
      rating: "",
    });
    setShowModal(false);
  };
  const handleClose = () => {
    setReview({
      revName: "Anonymous",
      pp: "",
      comment: "",
      rating: "",
    });
    setShowModal(false);
  };
  const handleChange = (e) =>
    setReview({ ...review, [e.target.name]: e.target.value });

  return (
    <>
      <Modal
        title="Add Review"
        open={showModal}
        footer={null}
        onCancel={handleClose}
      >
        <form
          action=""
          className="flex flex-col gap-3 p-3 bg-gray-50 rounded-md"
          onSubmit={handleSubmit}
        >
          <label htmlFor="" className="flex items-center gap-5">
            <span className="font-semibold">
              Rating: <span className="text-red-500">*</span>
            </span>
            <select
              required
              name="rating"
              id=""
              className="border border-red-500 outline-none cursor-pointer px-5 py-1 rounded-md"
              onChange={handleChange}
              value={review?.rating}
            >
              {ratings.map((val) => (
                <option value={val} key={val}>
                  {val}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="">
            <textarea
              value={review?.comment}
              onChange={handleChange}
              className="w-full outline-none border p-3 rounded-md"
              name="comment"
              id="comment"
              rows="5"
              placeholder="Comment..."
            ></textarea>
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={handleClose}
              type="button"
              className="text-sm px-4 py-1 rounded-md  text-white bg-gray-500 hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              disabled={review?.rating === ""}
              type="submit"
              className="text-sm px-4 py-1 rounded-md  text-white bg-red-500 hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Post
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default AddReview;
