import { configreStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";

export const store = configreStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
