import { Typography } from "@mui/material";
import PageLayout from "../components/PageLayout";
import Assets from "../components/Assets";

const message =
  "تو باید برای رسیدن به کلبه روح سرگردان واسه خنثی کردن طلسم بری به جزیره بقلی اما اقیانوس پر از کوسست چجوری میخوای اینکارو کنی؟";
const Sharks = ({ level, onSuccess }) => {
  return (
    <PageLayout message={message} currentLevel={level} level={5}>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        از چیزایی که توی جزیره داری استفاده کن و یه قایق بادبانی بساز!
      </Typography>
      <Assets onSuccess={onSuccess} successKeys={[8, 17, 22, 13]} />
    </PageLayout>
  );
};

export default Sharks;
