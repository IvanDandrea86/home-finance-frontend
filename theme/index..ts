import { createTheme } from "@mui/material/styles";
import { indigo, red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: `${indigo[200]}`,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
