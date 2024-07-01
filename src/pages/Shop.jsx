import React, { useEffect, useState } from "react";
import client from "../lib/client";
import HomeHOCLayout from "../layout/HomeHOCLayout";
import Filter from "../components/Filter";
import Restaurants from "../components/Restaurants";
import { getGROQQuery } from "../utils/GroqFilter";

async function fetchRestaurants() {
  const query = `*[_type == 'restaurant']`;
  const result = await client.fetch(query);
  return result;
}

async function filterRestaurants(filterData) {
  const query = getGROQQuery(filterData);
  console.log(query);
  return await client.fetch(query);
}
const Shop = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterData, setFilterData] = useState({
    selectedSort: "relevance",
    selectedOffer: "",
    selectedCuisines: [],
  });
  console.log(filterData);
  // Initial Load
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchRestaurants();
        console.log(data);
        setRestaurants(data);
        // setLoading(false);
      } catch (err) {
        // setError(err.message);
        // setLoading(false);
      }
    };

    fetchData();
  }, []);
  // Filter Based Data Fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await filterRestaurants(filterData);
        console.log(data);
        setRestaurants(data);
        // setLoading(false);
      } catch (err) {
        // setError(err.message);
        // setLoading(false);
      }
    };

    fetchData();
  }, [filterData]);
  return (
    <section className=" flex items-start justify-between gap-5 w-full">
      {/* Filter */}
      <Filter filterData={filterData} setFilterData={setFilterData} />
      {/* product display */}
      <Restaurants restaurants={restaurants} setRestaurants={setRestaurants} />
    </section>
  );
};

export default HomeHOCLayout()(Shop);
