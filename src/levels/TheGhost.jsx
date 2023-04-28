/* eslint-disable react-hooks/exhaustive-deps */
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import Parent from "../components/Parent";

const message =
  "اما اون نمیدونست که روح سرگردان خبیث جزیره به خوشحال دیدن اون ها و اهمیت علی برای ماه حسودی میکنه و نقشه های پلیدی توی سرش داره";

const TheGhost = ({ level }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (level === 1) {
      if (index < message.length) {
        setTimeout(() => {
          setText(text + message[index]);
          setIndex(index + 1);
        }, 40);
      }
    }
  }, [index, level]);

  return (
    <Parent level={1}>
      <Alert icon={false} sx={{ fontSize: "16px" }}>
        {text}
      </Alert>
    </Parent>
  );
};

export default TheGhost;
