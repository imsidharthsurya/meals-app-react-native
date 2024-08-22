import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";
const appStore = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default appStore;
