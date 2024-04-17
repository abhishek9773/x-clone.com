import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import PendingIcon from "@mui/icons-material/Pending";
import GroupIcon from "@mui/iconserial/Group";
import NotificationIcon from "@mui/icon-material/Notificatons";
import ExploreIcon from "@mui/icons-material/Explore";

export const navigation = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/home",
  },
  {
    title: "Explore",
    icon: <ExploreIcon />,
    path: "/explore",
  },
  {
    title: "Notification",
    icon: <NotificationIcon />,
    path: "/notification",
  },
  {
    title: "Message",
    icon: <EmailIcon />,
    path: "/message",
  },
  {
    title: "List",
    icon: <ListAltIcon />,
    path: "/list",
  },
  {
    title: "Communities",
    icon: <GroupIcon />,
    path: "/Message",
  },
  {
    title: "Verified",
    icon: <VerifiedIcon />,
    path: "/verified",
  },
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    path: "/profile",
  },
  {
    title: "More",
    icon: <PendingIcon />,
    path: "/more",
  },

  {
    title: "Message",
    icon: <EmailIcon />,
    path: "/Message",
  },
];
