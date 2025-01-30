import { createTheme } from "@mui/material";

export const Colors = {
  color1: "#033703",
  color2: "#4CAF50",
  color3: "#FFD700",
  white: "#FFF",
};

export const FontWeight = {
  bold: "700",
  regular: "500",
};

export const FontSize = {
  size1: "12px",
  size2: "16px",
  size3: "10px",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.color1,
    },
    //     secondary: {
    //       main: "Colors.",
    //     },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
  typography: {
    fontFamily: '"Cairo", sans-serif',
  },
});

export default theme;
