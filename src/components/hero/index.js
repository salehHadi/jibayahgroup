import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import HeroMobile from "./HeroMobile.js";
import HeroDesktop from "./HeroDesktop.js";
import { Colors } from "../../styles/theme";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        backgroundColor: Colors.color1,
      }}
    >
      <Container
        id="hero-section"
        sx={{
          width: "100%",

          paddingTop: "40px",
          paddingBottom: "12px",
        }}
      >
        {matches ? <HeroMobile /> : <HeroDesktop />}
      </Container>
    </div>
  );
}
