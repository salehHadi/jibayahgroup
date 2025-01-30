import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import HeroMobile from "./HeroMobile.js";
import HeroDesktop from "./HeroDesktop.js";
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
      {matches ? <HeroMobile /> : <HeroDesktop />}
    </Container>
  );
}
