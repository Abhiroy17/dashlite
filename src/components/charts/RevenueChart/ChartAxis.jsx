import React from "react";
import { Box, Typography } from "@mui/material";

const ChartAxis = () => {
  const yAxisLabels = ["30M", "20M", "10M", "0"];
  const xAxisLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "rgba(255, 255, 255, 0.4)",
          whiteSpace: "nowrap",
          textAlign: "right",
          justifyContent: "space-between",
          width: "26px",
          font: "400 12px/18px Inter, -apple-system, Roboto, Helvetica, sans-serif",
          "@media (max-width: 991px)": {
            whiteSpace: "initial",
          },
        }}
      >
        {yAxisLabels.map((label, index) => (
          <Typography key={index} variant="caption">
            {label}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 0,
          display: "flex",
          maxWidth: "100%",
          width: "572px",
          alignItems: "center",
          color: "rgba(255, 255, 255, 0.4)",
          whiteSpace: "nowrap",
          textAlign: "center",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          left: 0,
          right: 0,
          bottom: 0,
          font: "400 12px Inter, sans-serif",
          "@media (max-width: 991px)": {
            whiteSpace: "initial",
          },
        }}
      >
        {xAxisLabels.map((label, index) => (
          <Typography
            key={index}
            variant="caption"
            sx={{
              alignSelf: "stretch",
              flex: 1,
              flexBasis: 0,
              margin: "auto 0",
            }}
          >
            {label}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default ChartAxis;
