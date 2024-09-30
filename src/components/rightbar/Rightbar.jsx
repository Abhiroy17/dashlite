import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  useTheme,
} from "@mui/material";
import Notifications from "./Notifications";
import ActivityFeed from "./ActivityFeed/ActivityFeed";

const RightBar = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        // position: "absolute",
        // right: 0,
        // top: 0,
        // bottom: 0,
        width: "280px",
        height: "1206px",
        borderLeft: `1px solid ${theme.palette.primary.medium}`,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 2,
      }}
    >
      <Notifications></Notifications>
      <ActivityFeed></ActivityFeed>
    </Box>
  );
};

export default RightBar;
