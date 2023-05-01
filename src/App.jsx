import { ThemeProvider } from "@emotion/react";
import { Box, Fab, createTheme } from "@mui/material";
import { amber, red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { AutoAwesome, AutoFixNormal, NavigateNext } from "@mui/icons-material";
import {
  Kiss,
  OhNo,
  Sharks,
  Snake,
  Summary,
  SwordInStone,
  TheCottage,
  TheFrog,
  TheGhost,
  TheMushroom,
  TheWiseTree,
  TheWolf,
  TwoFrogs,
  WolfRider,
} from "./levels";
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
  const [disableNext, setDisableNext] = useState(false);
  const [backpackItems, setBackpackItems] = useState([]);

  const goNextLevel = () => {
    if (level < 13) {
      setLevel((prev) => prev + 1);
    } else {
      setDisableNext(true);
    }
  };

  useEffect(() => {
    if ([3, 5, 7, 6, 9].includes(level)) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  }, [level]);

  const addToBackPackHandler = (newItem) => {
    if (!backpackItems.find((item) => item.title === newItem.title)) {
      setBackpackItems([...backpackItems, newItem]);
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
              addToBackPackHandler({
                title: "mushroom",
                icon: <AutoAwesome />,
              });
            }}
          />
        )}
        {level < 5 && <TheMushroom level={level} />}
        {level < 6 && <Sharks level={level} onSuccess={() => goNextLevel()} />}
        {level < 7 && (
          <SwordInStone
            level={level}
            onSuccess={() => {
              goNextLevel();
              addToBackPackHandler({
                title: "sword",
                icon: <AutoFixNormal />,
              });
            }}
          />
        )}
        {level < 8 && <TheWolf level={level} />}
        {level < 9 && <WolfRider level={level} />}
        {level < 10 && <Snake level={level} />}
        {level < 11 && <TheCottage level={level} />}
        {level < 12 && <Kiss level={level} />}
        {level < 13 && <TwoFrogs level={level} />}
        {level < 14 && <OhNo level={level} />}
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
