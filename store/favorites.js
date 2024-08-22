import { createSlice } from "@reduxjs/toolkit";

const favorites = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.ids.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload), 1);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favorites.actions;
export default favorites.reducer;
