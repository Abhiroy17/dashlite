import React from "react";
import { Box, Card, Typography, Grid, useTheme } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const cardData = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    isPositive: true,
    backgroundColor: "#E3F5FF",
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    isPositive: false,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    isPositive: true,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    isPositive: true,
    backgroundColor: "#E5ECF6",
  },
];

const StatisticsCard = ({
  title,
  value,
  change,
  isPositive,
  backgroundColor,
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "24px",
        gap: "8px",
        width: "202px",
        minWidth: "200px",
        height: "112px",
        backgroundColor: backgroundColor,
        borderRadius: "16px",
        flex: "1 1 0%",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "20px",
          fontFeatureSettings: "'ss01' on, 'cv01' on, 'cv11' on",
          color:
            backgroundColor === theme.palette.primary.light
              ? "#FFFFFF"
              : "#1C1C1C",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "36px",
            fontFeatureSettings: "'ss01' on, 'cv01' on, 'cv11' on",
            color:
              backgroundColor === theme.palette.primary.light
                ? "#FFFFFF"
                : "#1C1C1C",
          }}
        >
          {value}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Typography
            variant="caption"
            sx={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              fontFeatureSettings: "'ss01' on, 'cv01' on, 'cv11' on",
              color:
                backgroundColor === theme.palette.primary.light
                  ? "#FFFFFF"
                  : "#1C1C1C",
            }}
          >
            {change}
          </Typography>
          {isPositive ? (
            <ArrowUpwardIcon
              sx={{
                fontSize: 16,
                color:
                  backgroundColor === theme.palette.primary.light
                    ? "#FFFFFF"
                    : "#1C1C1C",
              }}
            />
          ) : (
            <ArrowDownwardIcon
              sx={{
                fontSize: 16,
                color:
                  backgroundColor === theme.palette.primary.light
                    ? "#FFFFFF"
                    : "#1C1C1C",
              }}
            />
          )}
        </Box>
      </Box>
    </Card>
  );
};

const StatisticsCards = () => (
  <Grid container spacing={3.5} sx={{ width: "432px", height: "252px" }}>
    {cardData.map((card, index) => (
      <Grid item xs={6} key={index}>
        <StatisticsCard {...card} />
      </Grid>
    ))}
  </Grid>
);

export default StatisticsCards;
