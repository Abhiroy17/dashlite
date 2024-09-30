// Sidebar.js
import React, { useState } from "react";
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
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FolderIcon from "@mui/icons-material/Folder";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BusinessIcon from "@mui/icons-material/Business";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import GroupIcon from "@mui/icons-material/Group";
import SidebarSection from "./SidebarSection";
import nameBadge from "../../assets/nameBadge.svg";

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 212,
  height: 1206,
  flexShrink: 0,
  borderRight: `1px solid ${theme.palette.primary.medium}`,
  display: "flex",
  flexDirection: "column",
  padding: "20px 16px",
  gap: "16px",
}));

const NameBadge = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  borderRadius: "8px",
  padding: theme.spacing(0.5),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: "4px 12px 4px 12px",
  fontSize: 14,
  borderRadius: "8px",
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  width: "180px",
  borderRadius: "8px",
  color: theme.palette.text.secondary.primary,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
  "&:active": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const menuItems = [
  {
    id: 1,
    name: "Default",
    icon: <DashboardIcon />,
    link: "/dashboard/default",
  },
  {
    id: 2,
    name: "eCommerce",
    icon: <ShoppingCartIcon />,
    link: "/dashboard/ecommerce",
  },
  {
    id: 3,
    name: "Projects",
    icon: <FolderIcon />,
    link: "/dashboard/projects",
  },
  {
    id: 4,
    name: "Online Courses",
    icon: <SchoolIcon />,
    link: "/dashboard/courses",
  },
];

const pageItems = [
  { name: "User Profile", icon: <PersonIcon />, link: "/pages/profile" },
  { name: "Account", icon: <AccountBalanceIcon />, link: "/pages/account" },
  { name: "Corporate", icon: <BusinessIcon />, link: "/pages/corporate" },
  { name: "Blog", icon: <RssFeedIcon />, link: "/pages/blog" },
  { name: "Social", icon: <GroupIcon />, link: "/pages/social" },
];

const Sidebar1 = () => {
  const [openSections, setOpenSections] = useState({
    Default: false,
    eCommerce: false,
    Projects: false,
    "User Profile": false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <SidebarContainer component="nav">
      <Box
        sx={{
          maxHeight: "32px",
          width: "180px",
          padding: "4px",
          borderRadius: "8px",
        }}
      >
        <NameBadge
          sx={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            maxWidth: "90px",
            maxHeight: "24px",
          }}
        >
          <Box
            component="img"
            src={nameBadge}
            alt="ByeWind logo"
            sx={{ width: 24, height: 24, borderRadius: "50%" }}
          ></Box>

          <Typography
            variant="h6"
            sx={{
              width: "58px",
              height: "20px",
            }}
          >
            ByeWind
          </Typography>
        </NameBadge>
      </Box>

      <List component="nav" aria-label="main sidebar navigation">
        <SidebarSection
          title="Dashboards"
          items={menuItems}
          open={openSections}
          toggleSection={toggleSection}
        />
        <SidebarSection
          title="Pages"
          items={pageItems}
          open={openSections}
          toggleSection={toggleSection}
        />
      </List>
    </SidebarContainer>
  );
};

export default Sidebar1;
