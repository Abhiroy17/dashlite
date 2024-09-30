import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";

const BreadcrumbButton = styled(Box)(({ theme, active }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px 8px",
  gap: "4px",
  height: "28px",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const BreadcrumbText = styled(Typography)({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  fontFeatureSettings: '"ss01" on, "cv01" on, "cv11" on',
});

const Breadcrumb = () => {
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
        width: "184px",
        height: "28px",
        borderRadius: "8px",
      }}
    >
      <BreadcrumbButton>
        <BreadcrumbText
          sx={{ color: theme.palette.text.medium, width: "82px" }}
        >
          Dashboards
        </BreadcrumbText>
      </BreadcrumbButton>
      <BreadcrumbText
        sx={{ color: theme.palette.text.mediumLight, width: "5px" }}
      >
        /
      </BreadcrumbText>
      <BreadcrumbButton>
        <BreadcrumbText sx={{ color: theme.palette.text.main, width: "49px" }}>
          Default
        </BreadcrumbText>
      </BreadcrumbButton>
    </Box>
  );
};

export default Breadcrumb;
