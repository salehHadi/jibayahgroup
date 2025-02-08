import { Box } from "@mui/material";
import React from "react";
import { Colors } from "../../styles/theme";
import jibayahLogo from "../../images/jibayahLogo.png";
import burgerIcon from "../../images/burgerIcon.svg";
import { useUIContext } from "../../context/index";

export default function AppbarDesktop() {
  const { toggleDrawer } = useUIContext();

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
        width="120px"
        style={{ borderRadius: "4px" }}
      />
      <img
        src={burgerIcon}
        alt="menuIcon"
        width="40px"
        height="40px"
        color={Colors.white}
        style={{
          cursor: "pointer",
        }}
        onClick={toggleDrawer("right", true)}
      />
    </Box>
  );
}
