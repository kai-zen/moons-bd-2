import { BackpackOutlined, Close } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useState } from "react";

const Backpack = ({ items, clickItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fab
      sx={{
        position: "fixed",
        bottom: "30px",
        right: "100px",
        zIndex: "30",
      }}
      color="info"
      onClick={() => setOpen(!open)}
    >
      {open &&
        items.map((item, i) => (
          <Fab
            sx={{
              position: "fixed",
              bottom: `${100 + i * 50}px`,
              right: "108px",
              zIndex: `${30 + (i + 1)}`,
            }}
            color="success"
            onClick={() => clickItems(item)}
            key={item.title}
            size="small"
          >
            {item.icon}
          </Fab>
        ))}
      {!open ? (
        <BackpackOutlined fontSize="large" />
      ) : (
        <Close fontSize="large" onClick={() => setOpen(!open)} />
      )}
    </Fab>
  );
};

export default Backpack;
