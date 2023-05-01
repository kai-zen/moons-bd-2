import { Box } from "@mui/material";

const bkgUrls = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.gif",
  "/images/4.jpg",
  "/images/5.webp",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.webp",
  "/images/10.webp",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
];

const Parent = ({ children, level = 0 }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bkgUrls[level]})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        backgroundAttachment: "fixed",
        backgroundPositionY: "center",
        backgroundPositionX: level !== 7 ? "center" : "left",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        py: "40px",
        alignItems: "center",
        gap: "20px",
        zIndex: 20 - level,
        position: "absolute",
      }}
    >
      {children}
    </Box>
  );
};

export default Parent;
