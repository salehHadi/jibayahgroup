import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import SecondHomeSecionMobile from "./SecondHomeSecionMobile.js";
import SecondHomeSecionDesktop from "./SecondHomeSecionDesktop.js";
import { Colors } from "../../styles/theme/index.js";

export default function SecondHomeSecion() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container
      sx={{
        width: "100%",
        backgroundColor: Colors.white,
        paddingTop: "40px",
        paddingBottom: "12px",
      }}
    >
      {matches ? <SecondHomeSecionMobile /> : <SecondHomeSecionDesktop />}
    </Container>
  );
}
