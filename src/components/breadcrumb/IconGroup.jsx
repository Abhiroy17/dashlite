import React from "react";
import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/system";

const IconButton = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px",
  gap: "4px",
  width: "28px",
  height: "28px",
  borderRadius: "8px",
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const IconSet = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px",
  gap: "4px",
  width: "20px",
  height: "20px",
  borderRadius: "8px",
});

const IconGroup = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        alignContent: "flex-start",
        padding: "0px",
        gap: "8px",
        width: "64px",
        height: "28px",
        borderRadius: "8px",
        color: theme.palette.primary.main,
      }}
    >
      <IconButton>
        <IconSet>
          <Box
            component="img"
            src="/src/assets/Vector.png"
            alt="Sidebar"
            sx={{
              width: "20px",
              height: "20px",
            }}
          />
        </IconSet>
      </IconButton>
      <IconButton>
        <IconSet>
          <Box
            component="img"
            src="/src/assets/iconStar.png"
            alt="Star"
            sx={{
              width: "20px",
              height: "20px",
            }}
          />
        </IconSet>
      </IconButton>
    </Box>
  );
};

export default IconGroup;
