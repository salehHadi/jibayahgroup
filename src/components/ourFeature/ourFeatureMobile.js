import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../styles/theme/index";

export default function OurFeatureMobile() {
  return (
    <Box>
      <Typography
        mb={4}
        variant="h5"
        sx={{ fontWeight: "bold", textAlign: "end" }}
      >
        عزز أعمالك من خلال <span style={{ color: Colors.color2 }}>ميزاتنا</span>{" "}
        المتطورة
      </Typography>

      {/* Feature */}
      <Box
        mb={2}
        sx={{
          padding: "16px",
          backgroundColor: "#EEEEEE",
          borderRadius: "12px",
        }}
      >
        <Typography
          mb={2}
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "end",
            fontSize: "20px",
          }}
        >
          خبراء في تقديم المشورة والدعم
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "end",
            fontSize: "16px",
            color: "#8C8C8C",
          }}
        >
          نهدف في تقديم إرشادات وحلول مالية استراتيجية للأفراد أو الشركات بي
          الخبرات العميقة في تحليل الوضع الراهن وتقديم مشورة عملية تسهم في اتخاذ
          قرارات مدروسة
        </Typography>
      </Box>

      {/* Feature */}
      <Box
        mb={2}
        sx={{
          padding: "16px",
          backgroundColor: "#EEEEEE",
          borderRadius: "12px",
        }}
      >
        <Typography
          mb={2}
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "end",
            fontSize: "20px",
          }}
        >
          خيارات و حلول متنوعة{" "}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "end",
            fontSize: "16px",
            color: "#8C8C8C",
          }}
        >
          توفير مجموعة من الاستراتيجيات والخيارات المالية المبتكرة التي تساعد
          الشركاة في تحقيق أهدافها المالية بكفاءة. يشمل ذلك استشارات استثمارية،
          حلول تمويل مرنة، إدارة المخاطر، وخطط لتوسيع الأعمال. الهدف هو تمكين
          الشركة من اتخاذ قرارات مالية مستنيرة تتناسب مع احتياجاتها وظروفها
          السوقية لتحقيق استدامة ونمو طويل الأمد
        </Typography>
      </Box>
    </Box>
  );
}
