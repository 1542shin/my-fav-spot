import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "./yelpSearchSlice";
import { Button, TextField, Box, MenuItem, Grid } from "@mui/material";
import search from "../../asset/search.svg"

export const YelpSearch = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("Korean");
  const [location, setLocation] = useState("Austin, TX");
  const [sortBy, setSortBy] = useState("best_match");
  let keywords = {
    term: term,
    location: location,
    sortBy: sortBy,
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };
  const handleSubmit = (e) => {
    dispatch(loadData(keywords));
    e.preventDefault();
  };

  const sortBys = [
    {
      value: "best_match",
      label: "Best Match",
    },

    {
      value: "review_count",
      label: "Review Count",
    },
    {
      value: "distance",
      label: "Distance",
    },
  ];

  return (
    <Box
      sx={{
        pt: 15,
        display: "flex",
        justifyContet: "center",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "right", lg: "right" },
          }}
        >
          <TextField
            sx={{
              m: 1,
              backgroundColor: "beige",
              justifyContent: "right",
            }}
            label="Restaurant Name"
            variant="filled"
            value={term}
            onChange={handleTermChange}
          />{" "}
          <TextField
            sx={{
              m: 1,
              backgroundColor: "beige",
            }}
            label="Location"
            variant="filled"
            value={location}
            onChange={handleLocationChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "left", lg: "left" },
          }}
        >
          <TextField
            sx={{
              m: 1,
              backgroundColor: "beige",
            }}
            id="outlined-select-currency"
            select
            label="Sort By"
            variant="filled"
            value={sortBy}
            onChange={handleSortByChange}
          >
            {sortBys.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <Button
            sx={{
              m: 1,
              height: 50,
              width: 120,
            }}
            variant="contained"
            onClick={handleSubmit}
          >
                       <img src={search} alt='search' style={{ width: 20, marginRight: 3 }}/> 

            Search!
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
