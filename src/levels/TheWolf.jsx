import { Typography } from "@mui/material";
import PageLayout from "../components/PageLayout";
import Assets from "../components/Assets";

const message =
  "سر راه کلبه روح خبیث محافظای قدرتمندی هستن. حالا چطور از این گرگ بزرگ عبور کنیم؟";

const TheWolf = ({ level }) => {
  return (
    <PageLayout message={message} currentLevel={level} level={7}>
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
          direction: "rtl",
        }}
        variant="h5"
      >
        بنظر نمیرسه بشه با گرگی به این بزرگی جنگید!
      </Typography>
      <Assets formalite />
    </PageLayout>
  );
};

export default TheWolf;
