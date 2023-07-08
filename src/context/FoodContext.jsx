import { createContext, useContext, useReducer } from "react";
import { foodReducer, initialState } from "./foodReducer";

const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(foodReducer, initialState);
  return (
    <FoodContext.Provider
      value={{
        cuisineList: state.cuisineList,
        restaurantsList: state.restaurantsList,
        selectedCuisine: state.selectedCuisine,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = () => useContext(FoodContext);
