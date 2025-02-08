import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../styles/theme";
import profficinalMen from "../../images/profficinalMen.jpg";
import solution from "../../images/solution.jpg";
import ai from "../../images/ai.jpg";

export default function OurFeatureDesktop() {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        md={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "250px",
        }}
      >
        <Box
          sx={{
            padding: "16px",
            backgroundColor: "#EEEEEE",

            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
            width: "70%",
            height: "100%",
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
            الخبرات العميقة في تحليل الوضع الراهن وتقديم مشورة عملية تسهم في
            اتخاذ قرارات مدروسة
          </Typography>
        </Box>
        <Box width={"100%"} height={"100%"}>
          <img
            style={{
              objectFit: "cover",
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
            src={profficinalMen}
            alt="profficinalMen"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      </Grid>

      <Grid item md={7}>
        <Typography
          mb={4}
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "end",
          }}
        >
          عزز أعمالك من خلال{" "}
          <span style={{ color: Colors.color2 }}>ميزاتنا</span> المتطوره وجودة
          ادائنا الفائقة
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Box
            sx={{
              padding: "8px",
              backgroundColor: "#EEEEEE",
              borderRadius: "12px",
            }}
          >
            <Typography
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
              توفير مجموعة من الاستراتيجيات والخيارات المالية المبتكرة التي
              تساعد الشركاة في تحقيق أهدافها المالية بكفاءة. يشمل ذلك استشارات
              استثمارية، حلول تمويل مرنة، إدارة المخاطر، وخطط لتوسيع الأعمال.
              الهدف هو تمكين الشركة من اتخاذ قرارات مالية مستنيرة تتناسب مع
              احتياجاتها وظروفها السوقية لتحقيق استدامة ونمو طويل الأمد
            </Typography>
          </Box>
          <Box width={"100%"} height={"100%"}>
            <img
              style={{
                objectFit: "cover",
                borderRadius: "12px",
              }}
              src={solution}
              alt="profficinalMen"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Box>
      </Grid>

      <Grid item md={7}>
        <Box
          mb={1}
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
            استخدام الذكاء الاصطناعي
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
            يستخدم الذكاء الاصطناعي لتحليل البيانات في تحصيل الديون من خلال
            التنبؤ بسلوك العملاء وتصنيفهم بناءً على مخاطر التخلف عن الدفع. يقوم
            بتحليل البيانات التاريخية لتحديد العملاء الذين قد يتأخرون في السداد،
            وتخصيص استراتيجيات تواصل وخطط سداد ملائمة. كما يساعد في تحسين
            الكفاءة من خلال تتبع الأداء وتقديم تقارير تحليلية تسهم في تسريع
            عملية التحصيل وزيادة فعاليتها
          </Typography>
        </Box>
        <Box
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
            أنظمة الأتمتة
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
            أنظمة الأتمتة (RPA - Robotic Process Automation) هي تقنيات تُستخدم
            لأتمتة المهام المتكررة والمبنية على قواعد ثابتة داخل الأعمال. تعمل
            هذه الأنظمة على تنفيذ الإجراءات بشكل آلي دون تدخل بشري، مما يزيد من
            الكفاءة والدقة ويقلل من الوقت والتكاليف. في مجال تحصيل الديون، يمكن
            للأتمتة إرسال رسائل تذكيرية للمدينين، تحديث سجلات المدفوعات، وتنظيم
            عمليات التحصيل بشكل آلي. هذه الأنظمة تساهم في تحسين الإنتاجية وتوفير
            وقت الموظفين للتركيز على مهام أكثر تعقيدًا.
          </Typography>
        </Box>
      </Grid>
      <Grid item md={5}>
        <Box width={"100%"} height={"100%"}>
          <img
            style={{
              objectFit: "cover",
              borderRadius: "12px",
            }}
            src={ai}
            alt="profficinalMen"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
