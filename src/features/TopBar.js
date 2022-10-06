import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchTerm } from "./searchTerm/SearchTerm";
import { YelpSearch } from "./yelpSearch/YelpSearch";
import { AppBar, Box, Button, Paper, Toolbar, Typography } from "@mui/material";
import foodImg from "../asset/foodImg.jpeg";
import { Route, Routes } from "react-router-dom";
import home from "../asset/home.svg";
import favorite from "../asset/favorite.png";
import github from "../asset/github.png";
import linkedin from "../asset/linkedin.png";
import mail from "../asset/email.png";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export const TopBar = () => {
  const [close, setClose] = useState(false);
  
  return (
    <Box
      sx={{
        height: 500,
        backgroundImage: `url(${foodImg})`,
        backgroundSize: "cover",
        alignItems: "center",
      }}
    >
      <AppBar position="static" style={{ background: "transparent" }}>
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            color="#fce803"
            sx={{
              mr: 5,
              display: { xs: "none", sm: "block", fontFamily: "Pacifico" },
            }}
          >
            MyFavSpot
          </Typography>
          <Button
            sx={{ mr: 2 }}
            component={Link}
            to="/my-fav-spot/"
            variant="contained"
          >
            <img src={home} alt="home" style={{ width: 20, marginRight: 3 }} />
            Home
          </Button>
          <Button
            sx={{ mr: 2 }}
            component={Link}
            to="/my-fav-spot/favorite/"
            variant="contained"
          >
            <img
              src={favorite}
              alt="favorite"
              style={{ width: 20, marginRight: 3 }}
            />
            Favorite
          </Button>
          <Box style={{ flexGrow: 10 }}/>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <a
              id="github"
              href="https://github.com/1542shin/my-fav-spot"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ width: 32, margin: 5 }}
                className="w-10 mr-3 hover:scale-110"
                src={github}
                alt="github icon"
              />
            </a>{" "}
            <a
              id="linkedin"
              href="https://www.linkedin.com/in/aahans"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ width: 32, margin: 3 }}
                className="w-10 mr-2 hover:scale-110"
                src={linkedin}
                alt="linkedIn icon"
              />
            </a>{" "}
            <a id="mail" href="mailto:1542shin@gmail.com">
              <img
                style={{ width: 32, margin: 5 }}
                className="w-10 hover:scale-110"
                src={mail}
                alt="mail icon"
              />
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      {close ? null : (
        <Paper sx={{display:'flex', alignItems:'center', position:'fixed', backgroundColor: "white", margin:2, padding:1, zIndex:2}}>
          <IconButton aria-label="close" onClick={() => setClose("true") }>
  <CloseIcon />
</IconButton>
          <Typography>

            This project needs access to CORS-anywhere Server{' '}
           
            <a  href='https://cors-anywhere.herokuapp.com' target='_blank' rel='noreferrer'>(https://cors-anywhere.herokuapp.com)</a>
          </Typography>
        </Paper>
      )}

      <Routes>
        <Route path="/my-fav-spot" element={<YelpSearch />} />
        <Route path="/my-fav-spot/favorite" element={<SearchTerm />} />
      </Routes>
    </Box>
  );
};
