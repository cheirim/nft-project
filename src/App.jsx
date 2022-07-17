import React from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Typography, Box } from "@mui/material";
import Hero from "./components/Hero";

import Club from "./components/Club";
import Rinen from "./components/Rinen";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Akira Expanded", "cursive"].join(","),
    },
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: 0,
      }}
    >
      <ThemeProvider theme={theme}>
        <AppBar />
        <Hero />
        <Club />
        <Rinen />
      </ThemeProvider>
    </Box>
  );
};

export default App;
