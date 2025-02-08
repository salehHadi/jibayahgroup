import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Colors } from "../../styles/theme";
import ReviewSwiper from "./ReviewSwiper.js";

export default function Index() {
  return (
    <Container
      id="social-proof"
      sx={{
        width: "100%",
        marginTop: "80px",
      }}
    >
      <Box
        sx={{
          textAlign: "end",
          backgroundColor: Colors.color1,
          color: "#FFF",
          borderRadius: "12px",
          padding: "12px 8px ",
        }}
      >
        <h3>ابرز التعليقات</h3>
        <ReviewSwiper />
      </Box>
    </Container>
  );
}
