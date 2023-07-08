import { cuisineData, restaurantsData } from "../data";

export const initialState = {
  cuisineList: cuisineData,
  restaurantsList: restaurantsData,
  selectedCuisine: "",
};

export const actionTypes = {
  SELECT_CUISINE: "SELECT_CUISINE",
};

export const foodReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CUISINE:
      return { ...state, selectedCuisine: action.payload };
    default:
      return state;
  }
};
