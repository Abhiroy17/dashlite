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
} from "@mui/material";

const RightBar = () => {
  return (
    <Box
      sx={{
        // position: "absolute",
        // right: 0,
        // top: 0,
        // bottom: 0,
        width: "280px",
        height: "100%",
        borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: 240,
          height: 252,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 1,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Text
        </Typography>
        {/* <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="3D05.png" />
            </ListItemAvatar>
            <ListItemText primary="Text" secondary="Secondary text" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="Female05.png" />
            </ListItemAvatar>
            <ListItemText primary="Text" secondary="Secondary text" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="3D08.png" />
            </ListItemAvatar>
            <ListItemText primary="Text" secondary="Secondary text" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="Male07.png" />
            </ListItemAvatar>
            <ListItemText primary="Text" secondary="Secondary text" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="Male11.png" />
            </ListItemAvatar>
            <ListItemText primary="Text" secondary="Secondary text" />
          </ListItem>
        </List> */}
      </Box>
      <Box
        sx={{
          width: 240,
          height: 306,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 1,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Text
        </Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="3D05.png" />
            </ListItemAvatar>
            <ListItemText primary="Text" secondary="Secondary text" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="Female05.png" />
            </ListItemAvatar>
            <ListItemText primary="Text" secondary="Secondary text" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="3D08.png" />
            </ListItemAvatar>
            <ListItemText primary="Text" secondary="Secondary text" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="Male07.png" />
            </ListItemAvatar>
            <ListItemText primary="Text" secondary="Secondary text" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="Male11.png" />
            </ListItemAvatar>
            <ListItemText primary="Text" secondary="Secondary text" />
          </ListItem>
        </List>
      </Box>
      <Box
        sx={{
          width: 1,
          height: 176,
          position: "absolute",
          left: 16,
          top: 80,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Divider orientation="vertical" flexItem />
        <Divider orientation="vertical" flexItem />
        <Divider orientation="vertical" flexItem />
        <Divider orientation="vertical" flexItem />
      </Box>
    </Box>
  );
};

export default RightBar;
