import React from "react";

import "../../styles/timeLine/timeLine.css";
import { Box } from "@mui/material";
import { Colors } from "../../styles/theme";
import person from "../../images/person.png";

export default function TimeLine() {
  return (
    <Box
      sx={{
        background: Colors.color1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: "150px",
        overflow: "hidden",
      }}
    >
      <div className="timeline">
        <div className="container">
          <div className="point" />

          <div className="text-box">
            <h2 className="text">تحصيل الديون بأسلوب احترافي</h2>
          </div>
        </div>
        <div className="container">
          <div className="point" />

          <div className="text-box">
            <h2 className="text">حلول الرهن العقاري للشركات الكبرى</h2>
          </div>
        </div>
        <div className="container">
          <div className="point" />

          <div className="text-box">
            <h2 className="text">
              دراسات الأسواق وتحليلات مالية مدعومة بالتقنيات الذكية
            </h2>
          </div>
        </div>
      </div>

      <img src={person} alt="owner" style={{ marginBottom: -2 }} />
    </Box>
  );
}
