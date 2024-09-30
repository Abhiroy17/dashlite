import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ThemeModeContext from "../../context/ThemeModeContext";
import IconBreadcrumb from "../breadcrumb/IconBreadcrumb";
import SearchComponent from "./SearchComponent";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 28px",
  gap: "312px",
  //   position: "absolute",
  height: "68px",
  //   left: "212px",
  //   right: "280px",
  //   top: "0px",
  borderBottom: `1px solid ${theme.palette.primary.medium}`,
  color: theme.palette.text.main,
  backgroundColor: theme.palette.background.default,
}));

const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "160px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "160px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const colorMode = useContext(ThemeModeContext);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <Box>
      <StyledAppBar position="static" elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/**Breadcrumbs */}
          <Box>
            <IconBreadcrumb />
          </Box>

          {/** Search & icon wrapper */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <SearchWrapper>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                value={searchTerm}
                onChange={handleChange}
              />
              {/* <SearchComponent /> */}
            </SearchWrapper>

            {/* <Box sx={{ flexGrow: 1 }} /> */}
            {/*Icons */}
            <Box sx={{ width: "136px", display: "flex", gap: "8px" }}>
              <IconButton onClick={colorMode.toggleThemeMode}>
                {theme.palette.mode === "dark" ? (
                  <LightModeOutlinedIcon />
                ) : (
                  <DarkModeOutlinedIcon />
                )}
              </IconButton>
              <IconButton color="inherit" aria-label="show notifications">
                <NotificationsIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="open settings">
                <SettingsIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="open user profile">
                <PersonIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default Navbar;
