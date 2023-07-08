import { createContext, useContext, useReducer } from "react";
import { actionTypes, foodReducer, initialState } from "./foodReducer";

const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(foodReducer, initialState);
  const selectCuisine = (selectedValue) => {
    dispatch({
      type: actionTypes.SELECT_CUISINE,
      payload: selectedValue,
    });
  };
  const addReview = (id, review) => {
    const updatedData = state.restaurantsList.map((data) =>
      data.id === id ? { ...data, ratings: [review, ...data.ratings] } : data
    );
    dispatch({
      type: actionTypes.ADD_REVIEW,
      payload: updatedData,
    });
  };
  const filteredRestaurants = state.selectedCuisine
    ? state.restaurantsList.filter(
        ({ cuisine_id }) => cuisine_id === state.selectedCuisine
      )
    : state.restaurantsList;

  const getRestaurantById = (resId) =>
    state.restaurantsList.find(({ id }) => id === resId);

  return (
    <FoodContext.Provider
      value={{
        cuisineList: state.cuisineList,
        filteredRestaurants,
        selectedCuisine: state.selectedCuisine,
        selectCuisine,
        getRestaurantById,
        addReview,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = () => useContext(FoodContext);
