/* eslint-disable react-hooks/exhaustive-deps */
import { Box, IconButton, Typography } from "@mui/material";
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
} from "@mui/icons-material";
import PageLayout from "../components/PageLayout";

const message =
  "صبح روز بعد ماه که علی رو دید لباس سفر به تن کرد و کولشو ورداشت و رفت به سراغ درخت دانا که با کمک اون طلسم رو باطل کنه. اما درخت دانا فقط به کسایی راهنمایی میکنه که بتونن معماشو حل کنن ";

const Icons = [
  <AccessTime />,
  <Apple />,
  <Camera />,
  <Https />,
  <Insights />,
  <Landscape />,
  <LightMode />,
  <LocalPizza />,
  <Home />,
  <Map />,
  <AcUnit />,
  <AirplanemodeActive />,
  <Air />,
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
  <Handyman />,
  <Hardware />,
  <Hotel />,
];

const TheWiseTree = ({ level }) => {
  return (
    <PageLayout level={3} currentLevel={level} message={message}>
      <Typography
        sx={{
          color: "#fff",
          mt: "40px",
          mb: "20px",
          bgcolor: "rgba(0,0,0,.3)",
          p: "5px",
          borderRadius: "5px",
          maxWidth: "800px",
          textAlign: "center",
        }}
        variant="h5"
      >
        من شهر دارم، اما خانه نه. من کوه دارم ، اما درخت نه. من آب دارم ، اما
        ماهی نه. من چه هستم؟
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          maxWidth: "min(100%, 400px)",
          flexWrap: "wrap",
        }}
      >
        {Icons.map((icon, i) => (
          <IconButton key={i} sx={{ color: "#fff", fontSize: "60px" }}>
            {icon}
          </IconButton>
        ))}
      </Box>
    </PageLayout>
  );
};

export default TheWiseTree;
