import { Box, IconButton } from "@mui/material";
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
  <Forest />,
  <Carpenter />,
  <Tour />,
  <Home />,
  <Map />,
  <AcUnit />,
  <AirplanemodeActive />,
  <Air />,
  <Tsunami />,
  <TwoWheeler />,
  <Audiotrack />,
  <AutoAwesome />,
  <BakeryDining />,
  <Bathtub />,
  <Bedtime />,
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

const Assets = ({ successKeys, onSuccess }) => {
  const [leftItems, setLeftItems] = useState([]);

  useEffect(() => {
    setLeftItems(successKeys);
  }, [successKeys]);

  const clickHandler = (i) => {
    let filtered = [...leftItems].filter((item) => item !== i);
    if (!filtered.length) {
      onSuccess();
    } else {
      setLeftItems(filtered);
    }
  };

  return (
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
  );
};

export default Assets;
