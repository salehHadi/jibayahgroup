import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../styles/theme";
import jibayahLogo from "../../images/jibayahLogo.png";
import burgerIcon from "../../images/burgerIcon.svg";

export default function AppbarMobile() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        src={jibayahLogo}
        alt="Logo"
        width="100px"
        style={{ borderRadius: "4px" }}
      />
      <img
        src={burgerIcon}
        alt="menuIcon"
        width="35px"
        height="35px"
        color={Colors.white}
      />
    </Box>
  );
}
