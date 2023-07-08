import { cuisineData, restaurantsData } from "../data";

export const initialState = {
  cuisineList: cuisineData,
  restaurantsList: restaurantsData,
  selectedCuisine: "",
};

export const actionTypes = {
  SELECT_CUISINE: "SELECT_CUISINE",
  ADD_REVIEW: "ADD_REVIEW",
};

export const foodReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CUISINE:
      return { ...state, selectedCuisine: action.payload };
    case actionTypes.ADD_REVIEW:
      return { ...state, restaurantsList: action.payload };
    default:
      return state;
  }
};
