import React from "react";
import { navigationManue } from "./NavigationManue";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const Navigation = () => {
  const [anchorEl, setAnchorEl] =
    (React.useState < null) | (HTMLElement > null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="h-screen sticky top-0">
        <div>
          <div className="py-s">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-k200y r-18jsvk2 r-5sfk15 r-kzbkwu"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </div>
          <div className="space-y-6">
            {navigationManue.map((item) => (
              <div
                className="cursor-pointer flex space-x-3 items-center"
                onClick={() =>
                  item.title === "Profile"
                    ? navigate("/Profile/&{5}")
                    : navigate(item.path)
                }
              >
                {item.icon}
                <p className="text-x1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1e88e5",
            }}
            variant="contained"
          >
            TWEET
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar
            alt="username"
            src="https://imgs.search.brave.com/7PBc9_MSOk-hqk7TEF8Xu8VXW73QGyoBV2Y6tG1fnRc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/ODk2MTUzNi92ZWN0/b3IveC1sZXR0ZXIt/bG9nby1pY29uLXZl/Y3Rvci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9QXpoRHVU/a0xnMnN3Si02TDZ3/a3liTmVfR1E0NUFz/QTBFT2VwTGlIY3hS/cz0"
          />
          <div>
            <span> Abhishek kumar</span>
            <span className="opacity-70">@Abhishek9773</span>
          </div>
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};
