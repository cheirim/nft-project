import React from "react";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <>
      <img
        src="../assets/hero.png"
        alt="hero"
        style={{ paddingTop: "2rem", width: "100%", minHeight: "45vh" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
          height: "50px",
          overflow: "hidden",
          flexGrow: 1,
          backgroundColor: "rgb(191, 0, 78)",
          whiteSpace: "nowrap",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Akira Expanded",
            color: "white",
          }}
        >
          // KIWAMI /// KIWAMI /// KIWAMI /// KIWAMI /// KIWAMI /// KIWAMI ///
          KIWAMI /// KIWAMI
        </Typography>
      </Box>
    </>
  );
};

export default Hero;
