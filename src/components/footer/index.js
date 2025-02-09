import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Colors } from "../../styles/theme";
import jibayahLogo from "../../images/jibayahLogo.png";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      type="column"
      sx={{
        backgroundColor: Colors.color1,
        padding: "24px",
        color: "white",
        textAlign: "center",
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
      <h5>جميع الحقوق محفوظه لصالح جباية المالية {new Date().getFullYear()}</h5>
    </Box>
  );
}
