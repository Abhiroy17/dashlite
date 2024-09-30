import React from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import RevenueTag from "./RevenueTag";

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: "16px",
  backgroundColor: theme.palette.primary.light,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "24px",
  gap: "16px",
  width: "100%",
  minWidth: "661px",
  height: "318px",
  flex: "none",
  order: 2,
  flexGrow: 1,
}));

const HeaderGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  alignContent: "flex-start",
  padding: "0px",
  gap: "16px",
  width: "437px",
  height: "22px",
  borderRadius: "8px",
  flex: "none",
  order: 0,
  flexGrow: 0,
  color: theme.palette.text.primary,
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "0px",
  gap: "16px",
  minWidth: "572px",
  width: "100%",
  height: "232px",
  flex: "none",
  order: 1,
  alignSelf: "stretch",
  flexGrow: 1,
}));

const data = [
  { name: "Jan", current: 10000000, previous: 8000000 },
  { name: "Feb", current: 15000000, previous: 12000000 },
  { name: "Mar", current: 20000000, previous: 18000000 },
  { name: "Apr", current: 25000000, previous: 22000000 },
  { name: "May", current: 22000000, previous: 20000000 },
  { name: "Jun", current: 28000000, previous: 24000000 },
];

const RevenueChart = () => {
  const theme = useTheme();
  const formatYAxis = (value) => {
    return `${value / 1000000}M`;
  };

  return (
    <StyledPaper elevation={3}>
      <HeaderGroup>
        <Typography variant="h6" fontWeight={600}>
          Revenue
        </Typography>
        <Typography variant="h6">|</Typography>
        <RevenueTag
          Icon={() => (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
                fill="#C6C7F8"
              />
            </svg>
          )}
          label="Current Week"
          value="$58,211"
        />
        <RevenueTag
          Icon={() => (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
                fill="#A8C5DA"
              />
            </svg>
          )}
          label="Previous Week"
          value="$68,768"
        />
      </HeaderGroup>
      <ChartContainer>
        <ResponsiveContainer width="100%" minWidth={572} height={232}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tick={{
                fontFamily: "Inter",
                fontSize: "12px",
                lineHeight: "18px",
                fontFeatureSettings: "'ss01' on, 'cv01' on, 'cv11' on",
                fill: theme.palette.text.medium,
              }}
            />
            <YAxis
              tick={{
                fontFamily: "Inter",
                fontSize: "12px",
                lineHeight: "18px",
                fontFeatureSettings: "'ss01' on, 'cv01' on, 'cv11' on",
                fill: theme.palette.primary.medium,
              }}
              tickFormatter={formatYAxis}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.palette.text.mediumDark,
                borderRadius: "8px",
                backdropFilter: "blur(20px)",
              }}
              labelStyle={{
                fontFamily: "Inter",
                fontSize: "12px",
                lineHeight: "18px",
                fontFeatureSettings: "'ss01' on, 'cv01' on, 'cv11' on",
                color: "#FFFFFF",
              }}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#C6C7F8"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#A8C5DA"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </StyledPaper>
  );
};

export default RevenueChart;
