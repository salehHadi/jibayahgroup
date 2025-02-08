import {
  Box,
  Button,
  TextField,
  Typography,
  styled,
  Accordion,
  AccordionSummary,
} from "@mui/material";

export const CTAAndFAQForm = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "  32px",
  gap: "24px",
  position: "relative",

  [theme.breakpoints.up("sm")]: {
    padding: "  80px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "  120px",
  },
}));

export const CTAFormContainder = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  //   width: "100%",
  gap: "24px",
}));

export const CTANameAndLastNameContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "8px",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
}));

export const InputName = styled(TextField)(({ theme }) => ({
  fontSize: "16px",
  width: "100%",
}));

export const InputLastName = styled(TextField)(({ theme }) => ({
  fontSize: "16px",
  width: "100%",
}));

export const InputPhoneNumber = styled(TextField)(({ theme }) => ({
  fontSize: "16px",
  width: "100%",
}));

export const InputEmail = styled(TextField)(({ theme }) => ({
  fontSize: "16px",
  width: "100%",
}));

export const InputMessage = styled(TextField)(({ theme }) => ({
  fontSize: "16px",
  width: "100%",
  // height: "50px",
}));

export const Sumite = styled(Button)(({ theme }) => ({
  fontSize: "12px",
  backgroundColor: "#FFD369",
  borderRadius: "24px",
  padding: "8px 56px",
}));

export const WhatAppBTN = styled(Button)(({ theme }) => ({
  fontSize: "16px",
}));

// FAQ section

export const FAQContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "0 16px ",
  marginTop: "120px",
  [theme.breakpoints.up("sm")]: {
    padding: " 0 80px",
  },
  [theme.breakpoints.up("md")]: {
    padding: " 0 120px",
  },
}));

export const AccordionElContainer = styled(Accordion)(({ theme }) => ({
  width: "100%",
}));

export const AccordionEl = styled(Accordion)(({ theme }) => ({
  fontSize: "12px",
}));
export const AccordionSummaryEl = styled(AccordionSummary)(({ theme }) => ({
  fontSize: "12px",
  padding: "0 16px ",
}));
export const AccordionDetailsEl = styled(AccordionSummary)(({ theme }) => ({
  fontSize: "12px",
}));

export const ShapeIllustaration = styled("img")(({ src, theme }) => ({
  height: 0,
  [theme.breakpoints.up("md")]: {
    src: `url(${src})`,
    position: "absolute",
    height: "345px",
    top: 0,
    left: 0,
  },
}));
