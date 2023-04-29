import { Box, IconButton, Typography } from "@mui/material";
import PageLayout from "../components/PageLayout";
import {
  AccessTime,
  Apple,
  Camera,
  Carpenter,
  Forest,
  Hardware,
  Home,
  Https,
  Insights,
  Landscape,
  LightMode,
  LocalPizza,
  Map,
  Tour,
  Tsunami,
  TwoWheeler,
} from "@mui/icons-material";

const message =
  "تو باید برای رسیدن به کلبه روح سرگردان واسه خنثی کردن طلسم بری به جزیره بغلی اما اقیانوس پر از کوسست چجوری میخوای اینکارو کنی؟";

const Icons = [
  <AccessTime />,
  <Apple />,
  <Forest />,
  <Hardware />,
  <Carpenter />,
  <Camera />,
  <Tour />,
  <Https />,
  <Insights />,
  <Landscape />,
  <LightMode />,
  <Tsunami />,
  <TwoWheeler />,
  <LocalPizza />,
  <Home />,
  <Map />,
];

const Sharks = ({ level }) => {
  return (
    <PageLayout message={message} currentLevel={level} level={5}>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        از چیزایی که توی جزیره داری استفاده کن و یه قایق بادبانی بساز!
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          bgcolor: "rgba(256,256,256,.3)",
          borderRadius: "8px",
        }}
      >
        {Icons.map((icon, i) => (
          <IconButton
            key={i}
            sx={{ color: "rgba(0,0,0,.8)", fontSize: "60px" }}
          >
            {icon}
          </IconButton>
        ))}
      </Box>
    </PageLayout>
  );
};

export default Sharks;
