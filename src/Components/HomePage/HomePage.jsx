import { Grid } from "@mui/material";
import React from "react";
import { Navigation } from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import RightPart from "../RightPart/RightPart";

const HomePage = () => {
  return (
    <Grid container className="px-5 lg:px-26 justify-between">
      <Grid item xs={0} lg={3} className="hidden lg:black w-full relative">
        <Navigation />
      </Grid>

      <Grid
        item
        xs={0}
        lg={2.5}
        className="px-5 lg:px-9 hidden lg:black w-full relative "
      >
        <HomeSection />
      </Grid>
      <Grid item xs={0} lg={3} className="hidden lg:black w-full relative">
        <RightPart />
      </Grid>
    </Grid>
  );
};

export default HomePage;
