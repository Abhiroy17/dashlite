import React from "react";
import { Box } from "@mui/material";
import IconGroup from "./IconGroup";
import Breadcrumb from "./Breadcrumb";

const IconBreadcrumb = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0px",
        gap: "8px",
        margin: "0 auto",
        width: "256px",
        height: "28px",
      }}
    >
      <IconGroup />
      <Breadcrumb />
    </Box>
  );
};

export default IconBreadcrumb;
