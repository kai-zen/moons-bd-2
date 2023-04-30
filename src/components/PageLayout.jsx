/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Parent from "./Parent";
import { Alert } from "@mui/material";

const PageLayout = ({ message, children = null, currentLevel, level }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (currentLevel === level && message) {
      if (index < message.length) {
        setTimeout(() => {
          setText(text + message[index]);
          setIndex(index + 1);
        }, 40);
      }
    }
  }, [currentLevel, index, level, message]);

  return (
    <Parent level={level}>
      <Alert
        icon={false}
        sx={{
          fontSize: "18px",
          mb: "30px",
          maxWidth: "min(600px, 100%)",
          textAlign: "center",
          direction: "rtl",
        }}
      >
        {text}
      </Alert>
      {children}
    </Parent>
  );
};

export default PageLayout;
