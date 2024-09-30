import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", projections: 15000000, actuals: 18000000 },
  { month: "Feb", projections: 20000000, actuals: 22000000 },
  { month: "Mar", projections: 18000000, actuals: 19000000 },
  { month: "Apr", projections: 22000000, actuals: 24000000 },
  { month: "May", projections: 16000000, actuals: 16000000 },
  { month: "Jun", projections: 20000000, actuals: 22000000 },
];

const formatYAxis = (value) => {
  return `${value / 1000000}M`;
};

const ProjectionsVsActuals = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "24px",
        gap: "16px",
        width: "432px",
        minWidth: "400px",
        height: "252px",
        background: theme.palette.primary.light,
        borderRadius: "16px",
        flex: "none",
        order: 1,
        flexGrow: 1,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0px",
          width: "384px",
          height: "20px",
          borderRadius: "8px",
          flex: "none",
          order: 0,
          alignSelf: "stretch",
          flexGrow: 0,
          color: theme.palette.text.main,
        }}
      >
        Projections vs Actuals
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "0px",
          gap: "16px",
          width: "384px",
          height: "168px",
          flex: "none",
          order: 1,
          alignSelf: "stretch",
          flexGrow: 1,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tick={{
                fill: theme.palette.primary.medium,
                fontSize: 12,
                fontFamily: "Inter",
              }}
            />
            <YAxis
              tick={{
                fill: theme.palette.primary.medium,
                fontSize: 12,
                fontFamily: "Inter",
              }}
              tickFormatter={formatYAxis}
            />
            <Tooltip />
            <Bar
              dataKey="projections"
              fill="#A8C5DA"
              fillOpacity={0.5}
              radius={[4, 4, 0, 0]}
            />
            <Bar dataKey="actuals" fill="#A8C5DA" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ProjectionsVsActuals;
