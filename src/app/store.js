import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from '../features/searchTerm/searchTermSlice'
import allRestaurantsReducer from '../features/allRestaurants/allRestaurantsSlice'
import favoriteRestaurantsReducer from '../features/favoriteRestaurants/favoriteRestaurantsSlice';
import yelpSearchReducer from '../features/yelpSearch/yelpSearchSlice'

export default configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    allRestaurants: allRestaurantsReducer,
    favoriteRestaurants: favoriteRestaurantsReducer,
    yelpSearch: yelpSearchReducer,
  },
});
