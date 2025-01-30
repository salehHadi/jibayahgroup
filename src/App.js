import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";
import Header from "./components/header";
import { Box } from "@mui/material";

const HomePage = React.lazy(() => import("./pages/homePage"));

function App() {
  return (
    <Box>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    </Box>
  );
}

export default App;
