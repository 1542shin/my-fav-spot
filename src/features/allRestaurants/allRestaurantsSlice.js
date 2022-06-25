import { createSlice } from "@reduxjs/toolkit";


const allRestaurantsSlice=createSlice({
    name:'allRestaurants',
    initialState:[],
    reducers:{
        loadData:()=>'null'
    }
})
export const selectAllRestaurants=(state)=>state.allRestaurants
export const {loadData}=allRestaurantsSlice.actions
export default allRestaurantsSlice.reducer