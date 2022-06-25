import { removeRestaurant } from "./favoriteRestaurants/favoriteRestaurantsSlice";
import { addRestaurant } from "./favoriteRestaurants/favoriteRestaurantsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteRestaurants } from "./favoriteRestaurants/favoriteRestaurantsSlice";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { Box } from "@mui/material";

export const RestaurantForm = (props) => {
  const restaurant = props.restaurant;
  const dispatch = useDispatch();
  const favoriteRestaurants = useSelector(selectFavoriteRestaurants);
  const handleRemoveRestaurant = (restaurant) => {
    dispatch(removeRestaurant(restaurant));
  };
  const handleAddRestaurant = (restaurant) => {
    dispatch(addRestaurant(restaurant));
  };
  return (
    <Box sx={{ mx: "auto", my: 5}}>
      <Card>
        <CardMedia
          component="img"
          image={restaurant.imageSrc}
          alt="restaurant image"
          sx={{
            width: { xs: 300, sm: 300, md: 450 },
            height: { xs: 300, sm: 300, md: 450 },
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {restaurant.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipCode}`}
          </Typography>
          <Typography>
            Ratings: {restaurant.rating}/5  ({restaurant.reviewCount} reviews)
          </Typography>
          <Typography>Phone: {restaurant.phone}</Typography>
          <Typography>Price: {restaurant.price}</Typography>
          <Link href={restaurant.url} target="_blank">More information</Link>
        </CardContent>
        <CardActions>
          {favoriteRestaurants.includes(restaurant) ? (
            <Button variant="contained" onClick={() => handleRemoveRestaurant(restaurant)}>
              ✓ Added to favorite!
            </Button>
          ) : (
            <Button variant="outlined" onClick={() => handleAddRestaurant(restaurant)}>
              + Add to Favorite
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};