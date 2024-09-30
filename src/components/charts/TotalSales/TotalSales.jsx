import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  Tooltip,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { PieChart, Pie, Cell } from "recharts";
import SalesItem from "./SalesItem";
import { salesData, COLORS } from "./salesData";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  backgroundColor: theme.palette.primary.light,
  minWidth: "200px",
  maxWidth: "202px",
  color: theme.palette.text.primary,
  padding: theme.spacing(3),
  position: "relative",
}));

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  "& .MuiTooltip-tooltip": {
    backgroundColor: theme.palette.text.secondary,
    backdropFilter: "blur(20px)",
    borderRadius: "8px",
    padding: "4px 8px",
    fontSize: "12px",
  },
}));

const TotalSales = () => {
  const theme = useTheme();

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Total Sales
        </Typography>
        <Box sx={{ width: "120px", height: "120px", margin: "16px auto" }}>
          <PieChart width={120} height={120}>
            <Pie
              data={salesData}
              cx={60}
              cy={60}
              innerRadius={40}
              outerRadius={60}
              paddingAngle={5}
              dataKey="value"
            >
              {salesData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </Box>
        <List>
          {salesData.map((item, index) => (
            <SalesItem key={index} item={item} />
          ))}
        </List>
        <StyledTooltip title="38.6%" placement="top-start">
          <Box
            sx={{
              position: "absolute",
              left: "40px",
              top: "142px",
              width: "1px",
              height: "1px",
            }}
          />
        </StyledTooltip>
      </CardContent>
    </StyledCard>
  );
};

export default TotalSales;
