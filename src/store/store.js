import { restaurantApi } from "./api/RestaurantApi"; // Adjust the import path as necessary
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    // Add your reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantApi.middleware),
});

export default store;
