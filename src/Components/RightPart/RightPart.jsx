import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import { Button } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const RightPart = () => {
  const handleChangeTheme = () => {
    console.log("handle change theme");
  };
  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        />
        <div className="absolute top-0 left0 pl-3 pt-3">
          {" "}
          <SearchIcon className="text-gray-500" />
        </div>
        <Brightness6Icon
          className="ml-3 cursor-pointer"
          onClick={handleChangeTheme}
        />
      </div>

      <section className="my-5">
        <h1 className="text-x1 font-bold">Get Verified</h1>
        <h1 className="font-bold my-2">Subscribe to unlock new Features</h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
        >
          Get Verified
        </Button>
      </section>
      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-xl py-1">What's happening</h1>
        <div>
          <p className="font-bold">WWE Speed </p>
          <p className="text-sm">Wrestling | Every Wednesday · Last night</p>
        </div>
       { [1,1,1,1].map((items)=><div className="flex justify-between w-full">
          <div>
            <p className="text-sm">Politics · Trending</p>
            <p className="font-bold">#SupremeCourt</p>
            <p className="text-sm">13.4K posts</p>
          </div>
          <MoreHorizIcon/>
        </div>)}
      </section>
    </div>
  );
};

export default RightPart;
