import React from "react";
import { Box, Typography, InputBase, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  alignContent: "flex-start",
  padding: "4px 8px",
  gap: "8px",
  width: "180px",
  height: "28px",
  background: theme.palette.secondary.medium,
  borderRadius: "8px",
  flex: "none",
  order: 0,
  flexGrow: 0,
}));

const IconTextWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  alignContent: "flex-start",
  padding: "0px",
  gap: "4px",
  width: "116px",
  height: "20px",
  borderRadius: "8px",
  flex: "none",
  order: 0,
  flexGrow: 1,
});

const IconSet = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px",
  width: "16px",
  height: "16px",
  borderRadius: "8px",
  flex: "none",
  order: 0,
  flexGrow: 0,
});

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "0px",
  width: "96px",
  height: "20px",
  borderRadius: "8px",
  flex: "none",
  order: 1,
  flexGrow: 1,
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  fontFeatureSettings: '"ss01" on, "cv01" on, "cv11" on',
  color: theme.palette.text.mediumLight,
  "& .MuiInputBase-input": {
    padding: 0,
  },
}));

const ShortcutText = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "0px",
  width: "20px",
  height: "20px",
  borderRadius: "8px",
  flex: "none",
  order: 1,
  flexGrow: 0,
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  fontFeatureSettings: '"ss01" on, "cv01" on, "cv11" on',
  color: theme.palette.text.mediumLight,
}));

function SearchComponent() {
  const theme = useTheme();
  return (
    <SearchContainer component="div" role="search">
      <IconTextWrapper>
        <IconSet>
          <SearchIcon
            sx={{
              width: "16px",
              height: "16px",
              color: theme.palette.text.mediumLight,
            }}
          />
        </IconSet>
        <StyledInputBase
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
      </IconTextWrapper>
      <ShortcutText>⌘/</ShortcutText>
    </SearchContainer>
  );
}

export default SearchComponent;
