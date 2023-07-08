import { cuisineData, restaurantsData } from "../data";

export const initialState = {
  cuisineList: cuisineData,
  restaurantsList: restaurantsData,
  selectedCuisine: "",
};

export const foodReducer = (state, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};
