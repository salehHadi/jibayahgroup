import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  CTAAndFAQForm,
  CTAFormContainder,
  CTANameAndLastNameContainer,
  InputEmail,
  InputLastName,
  InputName,
  InputPhoneNumber,
  FAQContainer,
  AccordionEl,
  AccordionSummaryEl,
  AccordionDetailsEl,
  AccordionElContainer,
  ShapeIllustaration,
  InputMessage,
} from "./CTAAndFAQFormStyle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ExpandMore } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";

export default function Index() {
  const FAQArray = [
    {
      question: "كم المدة التي تستغرق لعمل بعض الدراسات",
      answer: "يختلف الوقت حسب نوع الخدمه و حجمها",
    },
    {
      question: "ماهي خدمة العملاء المجانية",
      answer:
        "خي خدمات اضافية مساعده مجانية تساعدك في الحصول على النتائج بشكل افضل",
    },
  ];

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const displayAccordion = FAQArray.map((el, index) => (
    <AccordionElContainer key={index}>
      <AccordionEl>
        <AccordionSummaryEl expandIcon={<ExpandMore />}>
          <h4 style={{ fontSize: matches ? "14px" : "16px" }}>{el.question}</h4>
        </AccordionSummaryEl>
        <AccordionDetailsEl>
          <h4>{el.answer}</h4>
        </AccordionDetailsEl>
      </AccordionEl>
    </AccordionElContainer>
  ));

  const [directionOfWriting, setDirectionOfWriting] = useState("ltr");

  function isLtr(e) {
    const string = e.target.value;
    const getFirstLitter = `${string.slice(0, 1)}`;
    const check = getFirstLitter.match(/[a-z]+|^[\#\w]+$/gi) !== null;
    check ? setDirectionOfWriting("ltr") : setDirectionOfWriting("rtl");
  }

  return (
    <CTAAndFAQForm id="contact-us">
      <CTAFormContainder>
        <h4>تواصل معنا </h4>
        <CTANameAndLastNameContainer>
          <InputName
            key={1}
            onChange={isLtr}
            dir={directionOfWriting}
            required
            label="الاسم الاول"
            name="firstName"
          />
          <InputLastName
            onChange={isLtr}
            dir={directionOfWriting}
            label="الاسم الاخير"
            name="lastName"
          />
        </CTANameAndLastNameContainer>
        <InputPhoneNumber
          key={2}
          required
          onChange={isLtr}
          dir={directionOfWriting}
          label="رقم الهاتف"
          name="phone"
        />
        <InputEmail
          key={3}
          required
          lang="en"
          label="البريد الالكتروني"
          name="userEmail"
        />
        <InputMessage
          key={4}
          onChange={isLtr}
          dir={directionOfWriting}
          label="الاستفسار / الطلب"
          name="message"
        />
        <h5
          style={{
            color: "black",
            fontWeight: "bold",
            padding: "8px 12px",
            borderRadius: "12px",
            backgroundColor: "#FFD369",
            cursor: "pointer",
          }}
          type="submit"
        >
          آحجز مكالمة مجانية
        </h5>
      </CTAFormContainder>

      <h5>آو</h5>
      <a
        target="_blank"
        variant="contained"
        rel="noreferrer"
        sx={{ fontWeight: "bold" }}
        href="https://wa.me/+9660501718111"
        style={{
          backgroundColor: "#639D4A",
          borderRadius: "16px",
          padding: "8px 40px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WhatsAppIcon sx={{ margin: "0 8px" }} />
        <h5>تواصل عن طريق الواتس آب</h5>
      </a>

      {/* FAQ Section */}
      <FAQContainer>
        <h5
          style={{ marginBottom: "24px", fontSize: matches ? "18px" : "20px" }}
        >
          أسئلة متكررة
        </h5>

        {displayAccordion}
      </FAQContainer>

      {/* <ShapeIllustaration src="/assets/shape5.svg" /> */}
    </CTAAndFAQForm>
  );
}
