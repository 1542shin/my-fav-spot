import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice=createSlice({
    name:'searchTerm',
    initialState:'',
    reducers:{
        updateSearchTerm:(state, action)=>{
            return action.payload
        },
        clearSearchTerm:()=>''
    }
})
export const selectSearchTerm=(state)=>state.searchTerm

export const {updateSearchTerm, clearSearchTerm}=searchTermSlice.actions

export default searchTermSlice.reducer