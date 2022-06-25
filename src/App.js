import React from "react";
import { TopBar } from "./features/TopBar";
import { Route, Routes } from "react-router-dom";
import { AllRestaurants } from "./features/allRestaurants/AllRestaurants";
import { FavoriteRestaurants } from "./features/favoriteRestaurants/FavoriteRestaurants";

function App() {
  return (
    <div id="App">
      <TopBar />
      <Routes>

        <Route path="/my-fav-spot" element={<AllRestaurants />} />
        <Route
          path="/my-fav-spot/favorite"
          element={<FavoriteRestaurants />}
        />
      </Routes>
    </div>
  );
}
export default App;
