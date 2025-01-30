import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ReviewsMobile from "./ReviewsMobile.js";
import ReviewsDesktop from "./ReviewsDesktop.js";
import { Colors } from "../../styles/theme";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container
      sx={{
        width: "100%",
        backgroundColor: Colors.color1,
        paddingTop: "40px",
        paddingBottom: "12px",
      }}
    >
      {matches ? <ReviewsMobile /> : <ReviewsDesktop />}
    </Container>
  );
}
