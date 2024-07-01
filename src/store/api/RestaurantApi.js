import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const restaurantApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fbl8cajs.api.sanity.io/v2024-06-24/data/query/production",
  }),
  endpoints: (builder) => ({
    getAllRestaurants: builder.query({
      query: () => ({
        url: "",
        params: {
          query: `*[_type == 'restaurant']{cuisines}`,
        },
      }),
    }),
  }),
});

export const { useGetAllRestaurantsQuery } = restaurantApi;
