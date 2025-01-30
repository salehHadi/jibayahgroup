import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../styles/theme";

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
        src="/icons/jibayahLogo.png"
        alt="Logo"
        width="100px"
        style={{ borderRadius: "4px" }}
      />
      <img
        src="/icons/burgerIcon.svg"
        alt="menuIcon"
        width="35px"
        height="35px"
        color={Colors.white}
      />
    </Box>
  );
}
