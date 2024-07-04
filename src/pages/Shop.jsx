import React, { useEffect, useState } from "react";
import client from "../lib/client";
import HomeHOCLayout from "../layout/HomeHOCLayout";
import Filter from "../components/Filter";
import Restaurants from "../components/Restaurants";
import { getGROQQuery } from "../utils/GroqFilter";
import { useSearchParams } from "react-router-dom";

// Modified fetchRestaurants function to accept search query
async function fetchRestaurants(searchQuery) {
  let query = `*[_type == 'restaurant']`;

  if (searchQuery) {
    query = `*[_type == "restaurant" && (cuisines match '${searchQuery}*' || restaurant_name match '${searchQuery}*')]`;
  }

  const result = await client.fetch(query);
  return result;
}

async function filterRestaurants(filterData) {
  const query = getGROQQuery(filterData);
  console.log(query);
  return await client.fetch(query);
}

const Shop = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [restaurants, setRestaurants] = useState([]);
  const [filterData, setFilterData] = useState({
    selectedSort: "relevance",
    selectedOffer: "",
    selectedCuisines: [],
  });

  // Initial Load
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchRestaurants(search);
        console.log(data);
        setRestaurants(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [search]);

  // Filter Based Data Fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await filterRestaurants(filterData);
        console.log(data);
        setRestaurants(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [filterData]);

  return (
    <section className="flex items-start justify-between gap-5 flex-col lg:flex-row w-full">
      {/* Filter */}
      <Filter filterData={filterData} setFilterData={setFilterData} />
      {/* product display */}
      <Restaurants restaurants={restaurants} setRestaurants={setRestaurants} />
    </section>
  );
};

export default HomeHOCLayout()(Shop);
