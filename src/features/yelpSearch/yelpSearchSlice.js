import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiKey } from "./apiKey";

export const loadData = createAsyncThunk(
  "yelpSearch/loadData",
  async (keywords) => {
    try {
      const response = await yelpSearchAPI(keywords);
      const jsonResponse = await response.json();
      //console.log(jsonResponse.businesses);
      return jsonResponse.businesses.map((business) => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        rating: business.rating,
        reviewCount: business.review_count,
        phone: business.display_phone,
        price: business.price,
        url: business.url,
      }));
    } catch (err) {
      console.log(err);
    }
  }
);

export const yelpSearchSlice = createSlice({
  name: "yelpSearch",
  initialState: [],
  reducers: {},
  extraReducers: {
    [loadData.fulfilled]: (state, action) => action.payload,
  },
});

export default yelpSearchSlice.reducer;
export const selectYelpSearch = (state) => state.yelpSearch;

const yelpSearchAPI = async (keywords) => {
  try {
    let response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${keywords.term}&location=${keywords.location}&sort_by=${keywords.sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return response;
  } catch (err) {
    window.alert(err);
    console.log(err);
  }
};
