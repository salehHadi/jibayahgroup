import { Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ReviewsMobile from "./ReviewsMobile.js";
import ReviewsDesktop from "./ReviewsDesktop.js";
import { Colors } from "../../styles/theme";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container
      id="social-proof"
      sx={{
        width: "100%",
        marginTop: "40px",
      }}
    >
      {matches ? <ReviewsMobile /> : <ReviewsDesktop />}
    </Container>
  );
}
