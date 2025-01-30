import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  CTAAndFAQForm,
  CTAFormContainder,
  CTANameAndLastNameContainer,
  Title,
  InputEmail,
  InputLastName,
  InputName,
  InputPhoneNumber,
  Sumite,
  WhatAppBTN,
  FAQContainer,
  AccordionEl,
  AccordionSummaryEl,
  AccordionDetailsEl,
  AccordionElContainer,
  ShapeIllustaration,
  InputMessage,
} from "./CTAAndFAQFormStyle";
import { Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ExpandMore } from "@mui/icons-material";

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
  const displayAccordion = FAQArray.map((el, index) => (
    <AccordionElContainer key={index}>
      <AccordionEl>
        <AccordionSummaryEl expandIcon={<ExpandMore />}>
          {el.question}
        </AccordionSummaryEl>
        <AccordionDetailsEl>{el.answer}</AccordionDetailsEl>
      </AccordionEl>
    </AccordionElContainer>
  ));

  const [directionOfWriting, setDirectionOfWriting] = useState("ltr");

  function isLtr(e) {
    const string = e.target.value;
    const getFirstLitter = `${string.slice(0, 1)}`;
    const check = getFirstLitter.match(/[a-z]+|^[\#\w]+$/gi) !== null;
    console.log(check);
    check ? setDirectionOfWriting("ltr") : setDirectionOfWriting("rtl");
  }

  console.log(directionOfWriting);

  return (
    <CTAAndFAQForm id="contact-us">
      <CTAFormContainder>
        <Title>اصنع موقعك الآن</Title>
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
        <Sumite style={{ color: "black", fontWeight: "bold" }} type="submit">
          آحجز مكالمة مجانية
        </Sumite>
      </CTAFormContainder>

      <Typography sx>آو</Typography>
      <WhatAppBTN
        target="_blank"
        variant="contained"
        sx={{ fontWeight: "bold" }}
        href="https://wa.me/+9660576638198"
      >
        <WhatsAppIcon sx={{ margin: "0 8px" }} />
        تواصل عن طريق الواتس آب
      </WhatAppBTN>

      {/* FAQ Section */}
      <FAQContainer>
        <Title sx={{ marginBottom: "24px" }}>أسئلة متكررة</Title>
        {displayAccordion}
      </FAQContainer>

      <ShapeIllustaration src="/assets/shape5.svg" />
    </CTAAndFAQForm>
  );
}
