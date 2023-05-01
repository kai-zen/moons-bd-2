import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={styles.container}>
      <CircularProgress />
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    backgroundColor: "rgba(256,256,256,.8)",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 1100,
  },
};

export default Loading;
