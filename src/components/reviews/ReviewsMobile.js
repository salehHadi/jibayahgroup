import React from "react";
import userImage from "../../images/userImage.png";
import starIcon from "../../images/starIcon.svg";
import "../../styles/review/review.css";
import { Box } from "@mui/material";
import { Colors } from "../../styles/theme";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ReviewSwiper from "./ReviewSwiper";

export default function ReviewsMobile() {
  return (
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
  );
}
