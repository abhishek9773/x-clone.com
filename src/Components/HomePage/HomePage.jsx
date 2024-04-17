import { Grid } from "@mui/material";
import React from "react";
import { Navigation } from "../Navigation/Navigation";

const HomePage = () => {
  return (
    <Grid container className="px-5 lg:px-26 justify-between">
      <Grid item xs={0} lg={3} className="hidden lg:black w-full relative">
        <Navigation />
      </Grid>

      <Grid item xs={0} lg={2.5} className="hidden lg:black w-full relative ">
        <p className="text-center"> middle part</p>
      </Grid>
      <Grid item xs={0} lg={3} className="hidden lg:black w-full relative">
        <p className="text-center"> right</p>
      </Grid>
    </Grid>
  );
};

export default HomePage;
