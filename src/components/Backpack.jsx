import { BackpackOutlined, Close } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useState } from "react";

const Backpack = ({ items }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fab
      sx={{
        position: "fixed",
        bottom: "30px",
        right: "100px",
        zIndex: "30",
      }}
      color={open ? "error" : "info"}
      onClick={() => setOpen(!open)}
    >
      {open ? (
        <>
          <Close fontSize="large" />
          {items.map((item, i) => (
            <Fab
              sx={{
                position: "fixed",
                bottom: `${100 + i * 50}px`,
                right: "108px",
                zIndex: "30",
              }}
              color="success"
              onClick={() => setOpen(!open)}
              key={item.title}
              size="small"
            >
              {item.icon}
            </Fab>
          ))}
        </>
      ) : (
        <BackpackOutlined fontSize="large" />
      )}
    </Fab>
  );
};

export default Backpack;
