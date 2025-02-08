import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import AppbarMobile from "./AppbarMobile";
import AppbarDesktop from "./AppbarDesktop";
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
        sx={{
          width: "100%",
          backgroundColor: Colors.color1,
          paddingTop: "12px",
          paddingBottom: "12px",
        }}
      >
        {matches ? <AppbarMobile /> : <AppbarDesktop />}
      </Container>
    </div>
  );
}
