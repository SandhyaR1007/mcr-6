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
  const filteredRestaurants = state.selectedCuisine
    ? state.restaurantsList.filter(
        ({ cuisine_id }) => cuisine_id === state.selectedCuisine
      )
    : state.restaurantsList;

  return (
    <FoodContext.Provider
      value={{
        cuisineList: state.cuisineList,
        filteredRestaurants,
        selectedCuisine: state.selectedCuisine,
        selectCuisine,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = () => useContext(FoodContext);
