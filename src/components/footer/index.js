import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import FooterMobile from "./footerMobile";
import FooterDesktop from "./footerDesktop";
import { Colors } from "../../styles/theme";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      type="column"
      sx={{
        backgroundColor: Colors.color1,
        padding: "24px",
        color: "white",
        textAlign: "center",
      }}
    >
      {matches ? <FooterMobile /> : <FooterDesktop />}
    </Box>
  );
}
