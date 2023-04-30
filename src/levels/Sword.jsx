import { Typography } from "@mui/material";
import PageLayout from "../components/PageLayout";
import Assets from "../components/Assets";

const message =
  "اوه بنظر یه شمشیر جادویی اینجاست. میتونی از توی سنگ درش بیاری؟";

const SwordInStone = ({ level }) => {
  return (
    <PageLayout message={message} currentLevel={level} level={6}>
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
        از وسایل استفاده کن و کاری کن شمشیر راحت تر از سنگ در بیاد
      </Typography>
      <Assets />
    </PageLayout>
  );
};

export default SwordInStone;
