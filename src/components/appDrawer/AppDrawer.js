import * as React from "react";

import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import jibayahLogo from "../../images/jibayahLogo.png";

import { useUIContext } from "../../context";

export default function TemporaryDrawer() {
  const { toggleDrawer, state } = useUIContext();

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const list = (anchor) => (
    <Box
      sx={{
        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : matches
            ? 250
            : 350,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
        padding: "48px 0px 16px",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Divider variant="middle" />
        <ListItemButton to="#hero-section">
          <ListItemText sx={{ textAlign: "center" }}>الرئيسية</ListItemText>
        </ListItemButton>
        <Divider variant="middle" />
        <ListItemButton to="#bolitPoints">
          <ListItemText sx={{ textAlign: "center" }}>بماذا نهتم</ListItemText>
        </ListItemButton>
        <Divider variant="middle" />
        <ListItemButton to="#products">
          <ListItemText sx={{ textAlign: "center" }}>اعمالنا</ListItemText>
        </ListItemButton>
        <Divider variant="middle" />
        <ListItemButton to={"#social-proof"}>
          <ListItemText sx={{ textAlign: "center" }}>اراء العملاء</ListItemText>
        </ListItemButton>
        <Divider variant="middle" />
        <ListItemButton to={"#contact-us"}>
          <ListItemText sx={{ textAlign: "center" }}>تواصل معنا</ListItemText>
        </ListItemButton>
        <Divider variant="middle" />
        <ListItemButton>
          <ListItemText sx={{ textAlign: "center" }}>موقعنا</ListItemText>
        </ListItemButton>
        <Divider variant="middle" />
      </List>
      <Box>
        <img
          src={jibayahLogo}
          alt="menu"
          style={{
            height: "150px",
            width: "100%",
            marginBottom: "-30px",
          }}
        />
      </Box>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={1}>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
