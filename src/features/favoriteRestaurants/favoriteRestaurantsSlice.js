import { createSlice } from "@reduxjs/toolkit";

const favoriteRestaurantsSlice=createSlice({
    name: 'favoriteRestaurants',
    initialState: [],
    reducers:{
        addRestaurant:(state, action)=>{state=state.push(action.payload)},
        removeRestaurant:(state,action)=>state=state.filter(restaurant=>restaurant.id!==action.payload.id)
    } 
})

export const {addRestaurant,removeRestaurant} =favoriteRestaurantsSlice.actions
export default favoriteRestaurantsSlice.reducer

export const selectFavoriteRestaurants =(state)=>state.favoriteRestaurants