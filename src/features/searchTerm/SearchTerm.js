import React from "react";
import {
  selectSearchTerm,
  updateSearchTerm,
  clearSearchTerm,
} from "./searchTermSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
export const SearchTerm = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleUpdateSearchTerm = (e) => {
    dispatch(updateSearchTerm(e.target.value));
  };
  const handleClearSearchTerm = (e) => {
    dispatch(clearSearchTerm());
  };

  return (
    <Box
      sx={{
        pt: 15,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField
        sx={{
          m: 1,
          width: { xs: 300, sm: 300, md: 500 },
          backgroundColor: "beige",
        }}
        label="Filter your favorite spot  "
        variant="filled"
        onChange={handleUpdateSearchTerm}
        value={searchTerm}
      />

      <Button
        sx={{
          m: 1,
          height: 50,
        }}
        variant="contained"
        onClick={handleClearSearchTerm}
      >
        clear
      </Button>
    </Box>
  );
};
