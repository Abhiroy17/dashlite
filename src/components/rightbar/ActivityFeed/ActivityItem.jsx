import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Box,
  useTheme,
} from "@mui/material";

const ActivityItem = ({ icon, title, time, iconBackground }) => {
  const theme = useTheme();
  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "4px",
        gap: "8px",
        width: "100%",
        borderRadius: "8px",
        flexWrap: "nowrap",
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: "32px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          sx={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            backgroundColor: iconBackground,
          }}
        >
          {icon}
        </Avatar>
      </ListItemIcon>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1,
          minWidth: 0,
        }}
      >
        <ListItemText
          primary={title}
          secondary={time}
          primaryTypographyProps={{
            sx: {
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              color: theme.palette.text.main,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          }}
          secondaryTypographyProps={{
            sx: {
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              color: theme.palette.text.medium,
            },
          }}
        />
      </Box>
    </ListItem>
  );
};

export default ActivityItem;
