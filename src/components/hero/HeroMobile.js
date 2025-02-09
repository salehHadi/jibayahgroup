import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors, FontWeight } from "../../styles/theme";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TimeLine from "../timeLine/TimeLine";
import person from "../../images/person.png";

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
          animation: "fadeIn 1s ease-in-out",
          animationDelay: "0s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        <Cursor />
        شريكك لتحقيق{" "}
        <span style={{ color: Colors.color2, fontWeight: FontWeight.bold }}>
          {text}
        </span>
      </span>
      <span
        style={{
          fontSize: "12px",
          marginBottom: "40px",
          animation: "fadeIn 1s ease-in-out",
          animationDelay: "0.3s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
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
          animation: "fadeIn 1s ease-in-out",
          animationDelay: "0.6s",
          opacity: 0,
          animationFillMode: "forwards",
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

      <TimeLine />
      <img
        src={person}
        alt="owner"
        style={{
          marginBottom: -2,
          animation: "fadeIn 1s ease-in-out",
          animationDelay: "1.8s",
          opacity: 0,
          animationFillMode: "forwards",
          height: "50%",
          width: "50%",
        }}
      />
    </div>
  );
}
