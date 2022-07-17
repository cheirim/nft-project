import { Box, Typography } from "@material-ui/core";
import React from "react";

const Club = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          zIndex: 3,
          position: "relative",
        }}
      >
        <img
          src="../assets/club.jpg"
          alt="hero"
          style={{ width: "100%", maxHeight: "100vh" }}
        />
        <Box
          sx={{
            position: "absolute",
            zIndex: 5,
            top: "5rem",
            color: "white",
            marginLeft: "60px",
            paddingLeft: "55px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Akira Expanded",
              color: "white",
            }}
            variant="h2"
          >
            Tengoku <br /> Club
          </Typography>

          <Box
            sx={{
              width: "66%",
              marginTop: "20px",
              lineHeight: 1.3,
              letterSpacing: 1.5,
              fontSize: "18px",
              paddingTop: "15px",
              paddingBottom: "15px",
              paddingRight: "55px",
            }}
          >
            <Typography variant="p">
              Tengoku Club is located in the seedy underbelly of Shibuya,
              <br />
              Tokyo.Every character from the Kiwami lore has been spotted at the
              <br />
              Club.Whether they’ re hanging on the patio after leaving the dance
              <br />
              floor, mingling with rising Yakuza henchmen at the bar, drowning
              in
              <br />
              the pulsating beats and spellbinding synth waves, spraypainting
              the
              <br />
              emblems of their affiliation, or simply serving as club bouncer;
              <br />
              Tengoku Club has found a way to unite them all.Rich or poor,
              artisan
              <br />
              or salaryman; the Club sheds all egos.{" "}
            </Typography>
            <br />
            <br />
            <Typography variant="p">
              They may not realize it, but their stories and lives will soon be
              intermingled in ways they never imagined.
            </Typography>
            <br />
            <br />
            <br />
            <Box sx={{ fontStyle: "italic" }}>
              <Typography variant="p">Welcome to Heaven.</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
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
          color: "white",
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

export default Club;
