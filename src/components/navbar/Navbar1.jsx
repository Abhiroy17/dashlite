import React, { useContext, useState } from "react";
import { AppBar, Toolbar, IconButton, Box, useTheme } from "@mui/material";
import { styled } from "@mui/system";
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
  height: "68px",
  borderBottom: `1px solid ${theme.palette.primary.medium}`,
  color: theme.palette.text.main,
  backgroundColor: theme.palette.background.default,
}));

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ThemeModeContext);

  return (
    <Box width={"100%"}>
      <StyledAppBar position="static" elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            border: "3px solid pink",
            width:"100%",
            minWidth: "100%",
            flexGrow: "1",
          }}
        >
          <Box>
            <IconBreadcrumb />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              flexBasis: "200px",
            }}
          >
            <SearchComponent />

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
