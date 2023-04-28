import { Fab } from "@mui/material";

const Backpack = () => {
  return (
    <Fab
      sx={{
        position: "fixed",
        bottom: "30px",
        right: "100px",
        zIndex: "30",
        bgcolor: "info.main",
      }}
    >
      <Backpack fontSize="large" />
    </Fab>
  );
};

export default Backpack;
