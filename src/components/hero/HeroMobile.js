import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Colors, FontWeight } from "../../styles/theme";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function HeroMobile() {
  const [text] = useTypewriter({
    words: ["الاستدامة المالية", "الشراكات الاستراتيجية"],
    loop: 0,
    typeSpeed: 120,
    delaySpeed: 800,
    deleteSpeed: 120,
  });

  return (
    <div
      style={{
        color: "white",
        width: "100%",
        textAlign: "end",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          fontSize: "28px",
          textAlign: "end",
          width: "100%",
          marginBottom: "4px",
        }}
      >
        <Cursor />
        شريكك لتحقيق{" "}
        <span style={{ color: Colors.color2, fontWeight: FontWeight.bold }}>
          {text}
        </span>
      </span>
      <span style={{ fontSize: "12px", marginBottom: "40px" }}>
        جباية المالية هي شركة سعودية، متخصصة في تقديم حلول مالية مبتكرة مصممة
        خصيصًا لتلبية احتياجات عملائنا
      </span>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          width: "100%",
          borderRadius: "4px",
        }}
      >
        <a href="#contact-us">
          <Box
            sx={{
              color: Colors.color1,
              backgroundColor: Colors.white,
              fontWeight: FontWeight.bold,
              padding: "2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
            }}
          >
            <ArrowBackIcon />
            <Typography
              variant="h4"
              sx={{
                color: Colors.color1,
                backgroundColor: Colors.color2,
                fontWeight: FontWeight.bold,
                padding: "12px",
                fontSize: "16px",
                borderRadius: "4px",
              }}
            >
              أحصل على استشارة مجانية
            </Typography>
          </Box>
        </a>
      </Box>
    </div>
  );
}
