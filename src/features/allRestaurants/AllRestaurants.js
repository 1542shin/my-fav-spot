import React, { useEffect } from "react";
import { loadData } from "./allRestaurantsSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectYelpSearch } from "../yelpSearch/yelpSearchSlice";
import { RestaurantForm } from "../RestaurantForm";
import { Box } from "@mui/material";
export const AllRestaurants = () => {
  const yelpSearch = useSelector(selectYelpSearch);

  const dispatch = useDispatch();
  useEffect(() => dispatch(loadData()), []);
  return (
    <Box sx={{ display: 'grid',
    gridTemplateColumns: { md: '1fr 1fr' },
    }}>
      {yelpSearch.map((restaurant) => (
        <RestaurantForm restaurant={restaurant} key={restaurant.id} />
      ))}
    </Box>
  );
};
