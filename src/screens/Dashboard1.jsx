import React from "react";
import { Box, Grid2 } from "@mui/material";
import RevenueChart from "../components/charts/RevenueChart/RevenueChart";
import Projections from "../components/charts/Projections/Projections";
import RevenueByLocation from "../components/charts/RevenueByLocation/RevenueByLocation";
import TopSellingProducts from "../components/charts/TopSellingProducts/TopSellingProducts";
import TotalSales from "../components/charts/TotalSales/TotalSales";
import StatisticsCards from "../components/cards/StatisticsCards";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        flexDirection: "column",
        padding: "28px",
      }}
    >
      <Box sx={{ padding: "4px 8px", borderRadius: "8px", height: "28px" }}>
        eCommerce
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "28px",
        }}
      >
        {/* Statistics Cards */}
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: "432px",
            minWidth: "432px",
          }}
        >
          <StatisticsCards />
        </Box>

        {/* Projections */}
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: "432px",
            minWidth: "432px",
            height: "252px",
          }}
        >
          <Projections />
        </Box>

        {/* Revenue Chart */}
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: "662px",
            minWidth: "662px",
            height: "318px",
          }}
        >
          <RevenueChart />
        </Box>

        {/* Revenue By Location */}
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: "272px",
            minWidth: "200px",
            maxWidth: "272px",
          }}
        >
          <RevenueByLocation />
        </Box>

        {/* Top Selling Products */}
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: "662px",
            minWidth: "662px",
          }}
        >
          <TopSellingProducts />
        </Box>

        {/* Total Sales */}
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: "272px",
            minWidth: "200px",
            maxWidth: "272px",
          }}
        >
          <TotalSales />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
