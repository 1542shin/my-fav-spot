import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteRestaurants } from "./favoriteRestaurantsSlice";
import { RestaurantForm } from "../RestaurantForm";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";
import { Box } from "@mui/material";

export const FavoriteRestaurants = () => {
  const favoriteRestaurants = useSelector(selectFavoriteRestaurants);
  const searchTerm = useSelector(selectSearchTerm);

  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { md: "1fr 1fr" } }}>
      {" "}
      {filterRestaurant(favoriteRestaurants, searchTerm).map((restaurant) => {
        return (
          
            <RestaurantForm restaurant={restaurant} key={restaurant.id} />
         
        );
      })}
    </Box>
  );
};

const filterRestaurant = (restaurants, searchTerm) => {
  return restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
