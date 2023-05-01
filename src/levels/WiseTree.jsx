/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from "@mui/material";

import PageLayout from "../components/PageLayout";
import Assets from "../components/Assets";

const message =
  "صبح روز بعد ماه که علی رو دید لباس سفر به تن کرد و کولشو ورداشت و رفت به سراغ درخت دانا که با کمک اون طلسم رو باطل کنه. اما درخت دانا فقط به کسایی راهنمایی میکنه که بتونن معماشو حل کنن ";

const TheWiseTree = ({ level, onSuccess }) => {
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
      <Assets successKeys={[10]} onSuccess={onSuccess} />
    </PageLayout>
  );
};

export default TheWiseTree;
