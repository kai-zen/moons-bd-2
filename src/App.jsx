import { ThemeProvider } from "@emotion/react";
import { Box, Fab, createTheme } from "@mui/material";
import { amber, red } from "@mui/material/colors";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Main } from "./pages";
import { useState } from "react";
import { NavigateNext } from "@mui/icons-material";

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

const theme = createTheme({
  palette: {
    primary: {
      main: amber[400],
    },
    secondary: {
      main: red[800],
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Lalezar",
    },
  },
});

const App = () => {
  const [bkgIndex, setBkgIndex] = useState(0);
  const [disableNext, setDisableNext] = useState(false);

  const goNextBkg = () => {
    if (bkgIndex < 13) {
      setBkgIndex((prev) => prev + 1);
    }
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundImage: `url(${bkgUrls[bkgIndex]})`,
            backgroundSize: "100%",
            width: "100%",
            height: "100vh",
            backgroundAttachment: "fixed",
            backgroundPositionY: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <Fab
            sx={{ position: "fixed", bottom: "30px", right: "30px", zIndex: 2 }}
            color="primary"
            disabled={disableNext}
          >
            <NavigateNext fontSize="large" onClick={goNextBkg} />
          </Fab>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
