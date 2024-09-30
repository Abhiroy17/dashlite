import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledIconText = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "flex-start",
  alignContent: "flex-start",
  padding: "4px",
  gap: "8px",
  width: "232px",
  borderRadius: "8px",
  flex: "none",
  order: 1,
  flexGrow: 1,
}));

const StyledIconSet = styled(Box)(({ theme, background }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px",
  width: "24px",
  height: "24px",
  background: background,
  borderRadius: "8px",
  flex: "none",
  order: 0,
  flexGrow: 0,
}));

const StyledTextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "0px",
  width: "192px",
  borderRadius: "8px",
  flex: "none",
  order: 1,
  flexGrow: 1,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  width: "192px",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  fontFeatureSettings: '"ss01" on, "cv01" on, "cv11" on',
  color: theme.palette.primary.main,
  flex: "none",
  order: 0,
  alignSelf: "stretch",
  flexGrow: 0,
}));

const StyledTime = styled(Typography)(({ theme }) => ({
  width: "192px",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "18px",
  fontFeatureSettings: '"ss01" on, "cv01" on, "cv11" on',
  color: theme.palette.text.medium,
  flex: "none",
  order: 1,
  alignSelf: "stretch",
  flexGrow: 0,
}));

const NotificationItem = ({ icon, iconBackground, title, time }) => {
  return (
    <StyledIconText>
      <StyledIconSet background={iconBackground}>{icon}</StyledIconSet>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledTime>{time}</StyledTime>
      </StyledTextContainer>
    </StyledIconText>
  );
};

export default NotificationItem;
