import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import { Box, Grid } from "@mui/material";

function App() {
  const [contentSelect, setContentSelect] = useState();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={1}>
            <NavBar />
          </Grid>
          <Grid item xs={11}>
            <Content />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
