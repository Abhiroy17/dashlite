import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Sidebar1 = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <AppBar position="absolute" className="z-10">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuOutlinedIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            ADMINIS
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer variant="persistent" open={open} onClose={handleDrawerClose}>
        <div>
          <Toolbar />
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
              <Link to="/" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PeopleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Team" />
              <Link to="/team" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ContactsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Contacts Information" />
              <Link to="/contacts" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ReceiptOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Invoices Balances" />
              <Link to="/invoices" />
            </ListItem>
          </List>
          <Divider />
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ m: "15px 0 5px 20px" }}
          >
            Pages
          </Typography>
          <List>
            <ListItem button>
              <ListItemIcon>
                <PersonOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Profile Form" />
              <Link to="/form" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HelpOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="FAQ Page" />
              <Link to="/faq" />
            </ListItem>
          </List>
          <Divider />
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ m: "15px 0 5px 20px" }}
          >
            Charts
          </Typography>
          <List>
            <ListItem button>
              <ListItemIcon>
                <BarChartOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Bar Chart" />
              <Link to="/bar" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PieChartOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Pie Chart" />
              <Link to="/pie" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <TimelineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Line Chart" />
              <Link to="/line" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MapOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Geography Chart" />
              <Link to="/geography" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar1;
