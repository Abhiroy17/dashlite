// SidebarSection.js
import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useTheme } from "@mui/material";

const SidebarSection = ({ title, items, open, toggleSection }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        paddingBottom: "12px",
        width: "180px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.text.medium,
          padding: "4px 12px",
        }}
      >
        {title}
      </Typography>
      {items.map((item) => (
        <React.Fragment key={item.name}>
          <ListItem button onClick={() => toggleSection(item.name)}>
            <Box
              sx={{
                width: "212px",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {open[item.name] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </Box>
          </ListItem>
          <Collapse in={open[item.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                component={Link}
                to={item.link}
                sx={{ pl: 4 }}
                className={open[item.name] ? "active" : ""}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default SidebarSection;
