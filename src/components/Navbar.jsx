import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import ThemeModeContext from "../context/ThemeModeContext";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { SvgIcon } from "@mui/material";

import { Input } from "@mui/material";

import { InputAdornment } from "@mui/material";

export function BasicSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme(); // This isn't strictly necessary here but can be used if needed later
  const primaryLight = theme.palette.primary.light;
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box
      sx={{
        "& .MuiInput-root": {
          fontSize: 14,
          color: "white !important",
          backgroundColor: "white !important",
          border: `2px solid black`,
          width: "100%",

          height: "28px",
          padding: "4px 8px",
          borderRadius: "8px",
          opacity: 0,
        },
        "& .MuiInput-root:hover": {
          borderColor: theme.palette.mode === "dark" ? "#fff" : "#6870fa",
        },
        "& .MuiInput-root:focus": {
          borderColor: theme.palette.mode === "dark" ? "#fff" : "#6870fa",
          boxShadow: `0 0 0 0.2rem rgba(${
            theme.palette.mode === "dark" ? "255, 255, 255" : "104, 112, 250"
          }, 0.25)`, // Focus shadow color depending on the theme mode
        },
      }}
    >
      <Input
        id="search"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search"
      />
      <IconButton type="button" sx={{ p: 1 }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

import { styled } from "@mui/material";

const StyledInput = styled(Input)(({ theme }) => ({
  width: "160px",
  height: "28px",
  fontSize: "14px",
  // color: theme.palette.text.light,
  backgroundColor: theme.palette.text.light,
  // border: `2px solid ${theme.palette.primary.main}`,
  padding: "4px 8px",

  borderRadius: "8px",
  transition: "border-color 0.3s ease",

  // "&:hover": {
  //   borderColor: theme.palette.primary.dark,
  // },

  // "&.Mui-focused": {
  //   borderColor: theme.palette.primary.light,
  //   boxShadow: `0 0 0 3px rgba(${theme.palette.primary.main}, 0.2)`,
  // },

  "&::placeholder": {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    textAlign: "left",

    color: theme.palette.text.mediumLight,
    opacity: 0.2,
  },
}));

export function CustomStyledInput() {
  const theme = useTheme();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <StyledInput
      value={value}
      onChange={handleChange}
      placeholder="Search"
      disableUnderline
      startAdornment={
        <InputAdornment position="start">
          <IconButton type="button">
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
    ></StyledInput>
  );
}

const SearchIcon = () => {
  const theme = useTheme();

  return (
    <SvgIcon viewBox="0 0 24 24" sx={{ width: 13.02, height: 13.02 }}>
      {theme.palette.mode === "dark" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )}
    </SvgIcon>
  );
};

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ThemeModeContext);

  return (
    <Box display="flex" justifyContent="space-between">
      {/**Iron Breadcrumb */}
      <Box>
        <Box></Box>
        {/**Breadcrumb */}
        <Box></Box>
      </Box>
      <Box display="flex" alignItems="center" gap="20px">
        {/* SEARCH BAR */}
        <CustomStyledInput></CustomStyledInput>
        {/*Icons */}
        <Box width="136px" display="flex" gap="8px">
          {/* ICONS */}
          <IconButton onClick={colorMode.toggleThemeMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
