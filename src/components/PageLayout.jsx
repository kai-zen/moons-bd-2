/* eslint-disable react-hooks/exhaustive-deps */
import Parent from "./Parent";
import { Alert } from "@mui/material";

const PageLayout = ({ message, children = null, level }) => {
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
        {message}
      </Alert>
      {children}
    </Parent>
  );
};

export default PageLayout;
