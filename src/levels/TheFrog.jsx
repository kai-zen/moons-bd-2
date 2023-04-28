/* eslint-disable react-hooks/exhaustive-deps */
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import Parent from "../components/Parent";

const message =
  "بخاطر همین وقتی که شب شد و ماه و علی خوابیدن اومد و علی رو طلسم کرد و تبدیل به قورباغه کرد";

const TheFrog = ({ level }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (level === 2) {
      if (index < message.length) {
        setTimeout(() => {
          setText(text + message[index]);
          setIndex(index + 1);
        }, 40);
      }
    }
  }, [index, level]);

  return (
    <Parent level={2}>
      <Alert icon={false} sx={{ fontSize: "16px" }}>
        {text}
      </Alert>
    </Parent>
  );
};

export default TheFrog;
