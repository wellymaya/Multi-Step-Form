import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, Grid } from "@mui/material";
import { FormContextProvider } from "./contexts/FormContextProvider";
import  lightTheme  from "./themes";
import useStyles from "./styles/styles";
import AppRoutes from "./routes";
import './server/server'

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={lightTheme}>
      <FormContextProvider>
        <Box
          className={classes.root}
          sx={{
            background: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
          }}
        >
          <AppRoutes />
        </Box>
        <CssBaseline />
      </FormContextProvider>
    </ThemeProvider>
  );
};

export default App;
