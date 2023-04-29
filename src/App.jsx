import { ThemeProvider } from "@emotion/react";
import { Box, Fab, createTheme } from "@mui/material";
import { amber, red } from "@mui/material/colors";
import { useState } from "react";
import { AutoAwesome, NavigateNext } from "@mui/icons-material";
import { Summary, TheFrog, TheGhost, TheWiseTree } from "./levels";
import Backpack from "./components/Backpack";

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
  const [level, setLevel] = useState(0);
  const [disableNext] = useState(false);
  const [backpackItems, setBackpackItems] = useState([]);

  const goNextLevel = () => {
    if (level < 13) {
      setLevel((prev) => prev + 1);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.parent}>
        {level < 1 && <Summary level={level} />}
        {level < 2 && <TheGhost level={level} />}
        {level < 3 && <TheFrog level={level} />}
        {level < 4 && (
          <TheWiseTree
            level={level}
            onSuccess={() => {
              goNextLevel();
              setBackpackItems((prev) => {
                if (!prev.find((items) => (items.title = "mushroom"))) {
                  return [
                    ...prev,
                    {
                      id: 1,
                      title: "mushroom",
                      icon: <AutoAwesome />,
                    },
                  ];
                } else {
                  return prev;
                }
              });
            }}
          />
        )}
        <Backpack items={backpackItems} />
        <Fab
          sx={styles.fab}
          color="primary"
          disabled={disableNext}
          onClick={goNextLevel}
        >
          <NavigateNext fontSize="large" />
        </Fab>
      </Box>
    </ThemeProvider>
  );
};

const styles = {
  parent: {
    width: "100%",
    height: "100vh",
    position: "relative",
  },
  fab: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    zIndex: "30",
  },
};

export default App;
