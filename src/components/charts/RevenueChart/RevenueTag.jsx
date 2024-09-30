import React from "react";
import { Box, Typography,useTheme } from "@mui/material";
import { styled } from "@mui/system";

const TagContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "2px 8px 2px 4px",
  width: "158px",
  height: "22px",
  borderRadius: "8px",
  flex: "none",
  order: 2,
  flexGrow: 0,
}));

const TagIcon = styled("img")({
  width: "16px",
  height: "16px",
  flex: "none",
  order: 0,
  flexGrow: 0,
});

const RevenueTag = ({ Icon, label, value }) => {
  const theme = useTheme();
  return (
    <TagContainer>
      <Icon />
      {/* <TagIcon src={icon} alt="" /> */}
      <Typography
        variant="caption"
        sx={{
          ml: 1,
        }}
      >
        {label}{" "}
        <Typography
          component="span"
          variant="caption"
          fontWeight={600}
          sx={{
            fontFamily: "Inter",
            fontSize: "12px",
            lineHeight: "18px",
            fontFeatureSettings: "'ss01' on, 'cv01' on, 'cv11' on",
            color: theme.palette.text.primary,
          }}
        >
          {value}
        </Typography>
      </Typography>
    </TagContainer>
  );
};

export default RevenueTag;
