import { Typography } from "@mui/material";
import PageLayout from "../components/PageLayout";
import Assets from "../components/Assets";

const message =
  "محافظ دوم این مار غول پیکره. اون پوست سختی داره و فکر نکنم چیزای معمولی بتونن بهش نفوذ کنن!";

const Snake = ({ level, onSuccess }) => {
  return (
    <PageLayout message={message} currentLevel={level} level={9}>
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
        فکر میکنی بتونی شکستش بدی؟!
      </Typography>
      <Assets formalite />
    </PageLayout>
  );
};

export default Snake;
