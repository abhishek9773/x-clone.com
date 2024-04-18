import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const TweetCard = () => {
  const navigate = navigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    console.log("delete Tweet");
    handleClose();
  };

  const handleOpenReplyModel = () => {
    console.log("open modle");
  };
  const handelCreateRetweet = () => {
    console.log("handle create retweet");
  };
  const handleLiketweet = () => {
    console.log("handle like tweets");
  };

  return (
    <div>
      <div className="flex item-center font-semibold text-gray-700 py-2">
        <RepeatIcon />
        <p> You Retweet</p>
      </div>
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="https://pbs.twimg.com/media/GLW-Ur1a4AA-17Y?format=jpg&name=small"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Abhishek kumar </span>
              <span className="text-gray-600">@abhishek9773 . 2m</span>
              <VerifiedIcon className="ml-2 w-4 h-5" />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  Add an existing account
                </MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Delete </MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
          \
          <div className="mt-2">
            <div
              onClick={() => navigate("/twit/${3}")}
              className="cursor-pointer"
            >
              <p>
                {" "}
                x-clone full stack project frontend with react and bacndend with
                spring boot{" "}
              </p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="https://imgs.search.brave.com/vnbhZaxbba88uNHrgBAJFCIcy5sq7r84pxI5I5SghS4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2hvbWVw/YWdlLWZlYXR1cmUt/Y2FyZC9SYW5kb20t/aW1hZ2UtZ2VuZXJh/dG9yXzUuanBn"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center temp-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
              </div>
              <div
                className={`&{true? "text-pink-600":"text-gray-600"} space-x-3 flex items-center`}
              >
                <RepeatIcon
                  className="cursor-pointer"
                  onClick={handelCreateRetweet}
                />
                <p>44</p>
              </div>
              <div
                className={` &{true? "text-pink-600":"text-gray-600"} space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteBorderIcon
                    className="cursor-pointer"
                    onClick={handleLiketweet}
                  />
                ) : (
                  <FavoriteIcon
                    className="cursor-pointer"
                    onClick={handleLiketweet}
                  />
                )}
                <p>44</p>
              </div>
              <div className="space-x-3 flex items-center temp-gray-600">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>4300</p>
              </div>
              <div className="space-x-3 flex items-center temp-gray-600">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
