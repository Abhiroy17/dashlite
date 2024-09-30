import React from "react";

import { Box, useTheme } from "@mui/material";
import RevenueChart from "../components/charts/RevenueChart/RevenueChart";
import Projections from "../components/charts/Projections/Projections";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "28px",
      }}
    >
      <Box
        sx={{
          maxWidth: "892px",
          width: "100%",
          height: "970px",

          backgroundColor: theme.palette.background.default,
          border: "2px solid yellow",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
          alignContent: "flex-start",
          padding: 0,
          gap: "28px",
        }}
      >
        <RevenueChart></RevenueChart>
        <Projections></Projections>
      </Box>
    </Box>
  );
};

export default Dashboard;
