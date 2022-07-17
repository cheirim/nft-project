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
          src="https://kiwami.app/static/media/bg_rinen.bc33f94d25facf09be75.jpg"
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
            RINEN
          </Typography>

          <Box
            sx={{
              marginTop: "20px",
              paddingTop: "15px",
              paddingBottom: "15px",
              paddingRight: "55px",
            }}
          >
            <Typography variant="p">
              Kiwami is a next-generation collective of artists, builders, and
              rule-breakers. Carefully designed in the metaverse & born in
              Japan, Kiwami is redefining what it means to be an authentic
              brand. For those who are Kiwami; extreme, loyal, driven, and
              ineffable⎯ you've found your people.
            </Typography>
            <br />
            <br />
            <Typography variant="p">
              Like any artistic movement, Kiwami is foremost driven by our
              community-first mindset. Every one of us brings our own stories,
              passions, and dreams. Kiwami is here to connect us and nurture the
              finest culture, rooted in a love for crypto-art that is built both
              with supreme artistic provenance in the metaverse, as well as in
              the real world.
            </Typography>
            <br />
            <br />
            <Box>
              <Typography variant="p">
                Kiwami is a collection of 10,000 NFTs, comprised of hundreds of
                unique visual traits designed by an anonymous Japanese team of
                street art mavericks. The aesthetic character is guided by
                cyberkinetic, urban pop art, and inspired by traditional
                Japanese elements.
              </Typography>
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
