import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box type="column">{matches ? <footerMobile /> : <footerDesktop />}</Box>
  );
}
