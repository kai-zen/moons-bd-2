/* eslint-disable react-hooks/exhaustive-deps */
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import Parent from "../components/Parent";

const message =
  "ماه بی همتا توی قسمت قبل تمام  مراحل رو رد کرد و علی خنگ خودش رو که توی جزیره سلنوفیلیا گم شده بود پیدا کرد تا با همدیگه زندگی آرومی رو سپری کنن";

const Summary = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      setTimeout(() => {
        setText(text + message[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);

  return (
    <Parent>
      <Alert icon={false} sx={{ fontSize: "16px" }}>
        {text}
      </Alert>
    </Parent>
  );
};

export default Summary;
