import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import movieSlice from "./movie/movieSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    movieReducer: movieSlice,
  },
});
