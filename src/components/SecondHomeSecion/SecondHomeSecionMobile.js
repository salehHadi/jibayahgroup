import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import { Colors, FontWeight } from "../../styles/theme/index";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sustainability from "../../images/sustainability.svg";
import decision from "../../images/decision.svg";
import accuracy from "../../images/accuracy.svg";
import img0 from "../../images/img0.jpg";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";

export default function SecondHomeSecionMobile() {
  const servicesArr = [
    "تحصيل الديون",
    "الوساطة المالية",
    "حلول الرهن العقاري",
    "دراسات الأسواق والتحليل المالي",
    "كشف الاحتيال المالي",
  ];

  const ServesDatails = [
    "استعادة المستحقات المالية للشركات بأسلوب قانوني وفعّال مع الحفاظ على العلاقات التجارية",
    "تقديم حلول تمويل مبتكرة وتأسيس شراكات استراتيجية مستدامة",
    "توفير السيولة للشركات الكبرى من خلال استراتيجيات رهن عقاري مخصصة",
    "إعداد تقارير شاملة وتحليلات دقيقة لدعم اتخاذ القرارات الاستراتيجية",
    "أدوات ذكاء صناعي متطورة لرصد ومنع العمليات الاحتيالية وحماية الأصول",
    "مساعدة العملاء في الاستثمار في الشركات الناشئة من خلال شراء حصص وتوفير الدعم المالي والإرشادي",
  ];

  const imgArr = [img0, img1, img2, img3, img4];

  const [serverSelected, setServeceSeleted] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold" display="inline-block">
            المالية مع <span style={{ color: Colors.color2 }}>جباية</span>
          </Typography>
          <NorthWestIcon
            sx={{
              padding: "2px 2px",
              backgroundColor: Colors.color2,
              borderRadius: "6px",
              fontSize: "24px",
              color: "white",
              margin: "0 6px",
            }}
          />
          <Typography variant="h5" fontWeight="bold" display="inline-block">
            الحرية
          </Typography>
        </Box>
        <Typography variant="p" textAlign="end">
          لدينا القدرة الفائقة على تمكين الشركات من تحقيق أهدافها المالية من
          خلال خدمات تعتمد على الاحترافية والابتكار
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        id="serviceArr"
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "end",
            fontWeight: "bold",
            borderBottom: `1px solid ${Colors.color2}`,
          }}
        >
          خدماتنا
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            overflowX: "auto",
            overflowY: "hidden",
            whiteSpace: "nowrap",
            gap: 2,
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {servicesArr.map((el, index) => {
            return (
              <a href="#serviceArr">
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "4px 16px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    boxShadow: "0px 4px 6px  rgba(0, 0, 0, 0.2)",
                    color:
                      serverSelected === index ? Colors.color2 : Colors.color1,
                    border: `2px solid ${
                      serverSelected === index ? Colors.color2 : Colors.color1
                    }`,
                  }}
                  key={index}
                  onClick={() => {
                    setServeceSeleted(index);
                  }}
                >
                  {el}
                </Typography>
              </a>
            );
          })}
        </Box>

        <img
          width={"100%"}
          height={"250px"}
          style={{
            borderRadius: "8px",
            boxShadow: "0px 10px 16px  rgba(0, 0, 0, 0.2)",
            objectFit: "cover",
          }}
          src={imgArr[serverSelected]}
          alt="server"
        />

        <Box
          sx={{
            width: "100%",
            boxShadow: "0px 10px 16px  rgba(0, 0, 0, 0.2)",
            padding: "12px 16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "end",
            gap: "4px",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            alignSelf="end"
            color={Colors.color2}
          >
            {servicesArr[serverSelected]}
          </Typography>
          <Typography mb={4} variant="h5" fontSize={"20px"} textAlign="end">
            {ServesDatails[serverSelected]}
          </Typography>

          <Box
            style={{
              alignSelf: "end",
              paddingRight: "28px",
              marginBottom: "40px",
              textAlign: "end",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              استدامة في النمو
              <img
                src={sustainability}
                alt="menuIcon"
                width="25px"
                height="25px"
                color={Colors.white}
              />
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              دعم في اتخاذ القرارات
              <img
                src={decision}
                alt="menuIcon"
                width="25px"
                height="25px"
                color={Colors.white}
              />
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "8px",
              }}
            >
              الوصول إلى معلومات دقيقة وسريعة
              <img
                src={accuracy}
                alt="menuIcon"
                width="25px"
                height="25px"
                color={Colors.white}
              />
            </Typography>
          </Box>

          <a href="#contact-us">
            <Box
              sx={{
                fontWeight: FontWeight.bold,
                border: `1px solid ${Colors.color1}`,
                padding: "2px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                "&:hover": {
                  gap: "4px",
                },
              }}
            >
              <ArrowBackIcon />
              <Typography
                variant="h4"
                sx={{
                  color: Colors.white,
                  backgroundColor: Colors.color1,
                  fontWeight: FontWeight.bold,
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "4px",
                }}
              >
                تواصل معنا الان
              </Typography>
            </Box>
          </a>
        </Box>
      </Box>
    </Box>
  );
}
