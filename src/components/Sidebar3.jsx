import React, { useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
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

// const MenuItem = ({ title, to, icon, selected, setSelected }) => {
//   return (
//     <MenuMenuItem
//       active={selected === title}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuMenuItem>
//   );
// };

const Sidebar3 = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <ProSidebar collapsed={isCollapsed}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignMenuItems: "center",
          background: theme.palette.background.default,
          padding: "20px 16px",
          gap: "16px",
          //   position: "absolute",
          width: "212px",
          height: "100%",
          //   left: "0px",
          //   top: "0px",
          borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/** Dashboard Frame */}
        <Box
          sx={{
            width: "180px",
            height: "auto",
            padding: "0px 0px 12px 0px",
            gap: "4px",
            opacity: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Menu iconShape="square">
            {/**Frame text */}
            <Typography
              variant="h6"
              sx={{
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Dashboard
            </Typography>
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <MenuItem
                title="Default"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                sx={{
                  "& .pro-inner-item": {
                    display: "flex", // Ensure the flex layout
                    flexDirection: "row-reverse", // Move the collapsible icon to the left
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                  "& .pro-inner-item > svg": {
                    marginRight: "auto", // Move the collapsible icon to the left side
                    marginLeft: "0", // Adjust the spacing
                  },
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography
                    variant="h6"
                    sx={{
                      lineHeight: "20px",
                      color: theme.palette.neutral.dark,
                    }}
                  >
                    Default
                  </Typography>
                </Box>
              </MenuItem>
              <SubMenu
                label="eCommerce"
                variant="h6"
                icon={<ContactsOutlinedIcon />}
                sx={{
                  "& .pro-inner-item": {
                    display: "flex",
                    flexDirection: "row-reverse", // Moves the collapsible icon to the left
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                  "& .pro-inner-item > svg": {
                    marginRight: "auto", // Positions the collapsible icon to the left
                    marginLeft: "0",
                  },
                  "& .pro-inner-item:hover": {
                    backgroundColor: "inherit", // Remove hover background effect
                  },
                }}
              ></SubMenu>

              <SubMenu
                label="Online Courses"
                to=""
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </Box>
        <Box>
          <Menu iconShape="square">
            <Typography variant="h6" sx={{ m: "15px 0 5px 20px" }}>
              Pages
            </Typography>
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <MenuItem
                title="Default"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <MenuItem
                title="eCommerce"
                to=""
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <MenuItem
                title="Projects"
                to=""
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <MenuItem
                title="Online Courses"
                to=""
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <MenuItem
                title="Profile Form"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </Box>
      </Box>
    </ProSidebar>
  );
};

export default Sidebar3;
