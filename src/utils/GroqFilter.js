export const getGROQQuery = (filterData) => {
  let baseQuery = '*[_type == "restaurant"';

  if (filterData.selectedSort) {
    baseQuery += ` && "${filterData.selectedSort}" == deliveryOptions`;
  }

  if (filterData.selectedOffer) {
    baseQuery += ` && true == ${filterData.selectedOffer}.exists`;
  }

  if (filterData.selectedCuisines.length > 0)
    baseQuery += getCuisineMatchingRestaurants(
      filterData.selectedCuisines,
      baseQuery
    );

  return `${baseQuery}]`;
};

// Function to construct the GROQ query
export const getCuisineMatchingRestaurants = (cuisines) => {
    
  // Add a condition to check if any cuisine in selectCuisine is in the cuisines array of the restaurant
  return ` && ${cuisines.map((item) => `"${item}"`).join(" || ")} in cuisines`;
};
