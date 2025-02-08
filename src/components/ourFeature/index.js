import { Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import OurFeatureMobile from "./ourFeatureMobile.js";
import OurFeatureDesktop from "./ourFeatureDesktop.js";
import { Colors } from "../../styles/theme/index.js";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container
      id="products"
      sx={{
        width: "100%",
        backgroundColor: Colors.white,
        paddingTop: "40px",
        paddingBottom: "12px",
      }}
    >
      {matches ? <OurFeatureMobile /> : <OurFeatureDesktop />}
    </Container>
  );
}
