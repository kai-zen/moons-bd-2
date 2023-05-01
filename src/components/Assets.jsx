import { Box, Fab, IconButton } from "@mui/material";
import {
  AcUnit,
  AccessTime,
  Air,
  AirplanemodeActive,
  Apple,
  Audiotrack,
  AutoAwesome,
  BakeryDining,
  Bathtub,
  Bedtime,
  Build,
  Camera,
  CameraAlt,
  ChildCare,
  CloudQueue,
  ElderlyWoman,
  EmojiObjects,
  Fingerprint,
  Handyman,
  Hardware,
  Home,
  LocalPizza,
  Map,
  Hotel,
  Https,
  Insights,
  Landscape,
  LightMode,
  Forest,
  Carpenter,
  Tour,
  Tsunami,
  TwoWheeler,
  CleanHands,
  Check,
  Close,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

const Icons = [
  <Apple />,
  <Camera />,
  <Https />,
  <Insights />,
  <Landscape />,
  <LightMode />,
  <LocalPizza />,
  <AccessTime />,
  <Tour />,
  <Home />,
  <Map />,
  <AcUnit />,
  <AirplanemodeActive />,
  <Air />,
  <Tsunami />,
  <TwoWheeler />,
  <Audiotrack />,
  <Forest />,
  <AutoAwesome />,
  <BakeryDining />,
  <Bathtub />,
  <Bedtime />,
  <Carpenter />,
  <Build />,
  <CameraAlt />,
  <ChildCare />,
  <CloudQueue />,
  <ElderlyWoman />,
  <EmojiObjects />,
  <Fingerprint />,
  <CleanHands />,
  <Handyman />,
  <Hardware />,
  <Hotel />,
];

const Assets = ({ successKeys = [], onSuccess, formalite = false }) => {
  const [leftItems, setLeftItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);

  useEffect(() => {
    if (!formalite) {
      setLeftItems(successKeys);
    }
  }, [successKeys, formalite]);

  const clickHandler = (i) => {
    if (formalite) {
      return;
    }
    if (leftItems.find((item) => item === i)) {
      let filtered = [...leftItems].filter((item) => item !== i);
      if (!filtered.length) {
        onSuccess();
      } else {
        setDoneItems((prev) => {
          let copy = [...prev];
          copy.push(i);
          return copy;
        });
        setLeftItems(filtered);
      }
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: "10px" }}>
        {leftItems.map((item) => (
          <Fab color="error" size="small" key={item}>
            <Close />
          </Fab>
        ))}
        {doneItems.map((item) => (
          <Fab color="success" size="small" key={item}>
            <Check />
          </Fab>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          maxWidth: "min(100%, 400px)",
          flexWrap: "wrap",
          bgcolor: "rgba(0,0,0,.3)",
          py: "4px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
        }}
      >
        {Icons.map((icon, i) => (
          <IconButton
            key={i}
            sx={{ color: "#fff", fontSize: "60px" }}
            onClick={() => clickHandler(i)}
          >
            {icon}
          </IconButton>
        ))}
      </Box>
    </>
  );
};

export default Assets;
