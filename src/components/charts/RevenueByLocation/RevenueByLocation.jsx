import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "New York", value: 72 },
  { name: "San Francisco", value: 39 },
  { name: "Sydney", value: 25 },
  { name: "Singapore", value: 61 },
];

const RevenueByLocation = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: "16px",
        backgroundColor: theme.palette.primary.light,
        display: "flex",
        gap: "16px",
        minWidth: "200px",
        maxWidth: "272px",
        flexDirection: "column",
        overflow: "hidden",
        justifyContent: "flex-start",
        padding: "24px",
        height: "318px",
      }}
    >
      <Typography variant="bold_h6">Revenue by Location</Typography>

      <Box>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#A8C5DA"
              fill={theme.palette.secondary.cyan}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>

      {data.map((item, index) => (
        <Box key={item.name} sx={{ color: theme.palette.secondary.cyan }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
              backGroundcolor: theme.palette.secondary.cyan,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.main,
              }}
            >
              {item.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.main,
              }}
            >
              {item.value}K
            </Typography>
          </Box>
          <Box
            sx={{
              height: "2px",
              backgroundColor: theme.palette.secondary.cyan,
              borderRadius: "80px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: `${
                  (item.value / Math.max(...data.map((d) => d.value))) * 100
                }%`,
                backgroundColor: theme.palette.secondary.cyan,
                borderRadius: "80px",
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default RevenueByLocation;
