import { makeStyles, createTheme } from "@material-ui/core";

export const useStyles = makeStyles({
  flex: {
    display: "flex",
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  flexColumn: {
    flexDirection: "column",
  },
  container: {
    margin: "70px 0 0",
    minHeight: "calc(100vh - 70px)",
    minWidth: "100%",
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0bc98d",
    },
    background: {
      default: "#0b2533",
    },
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
  },
  overrides: {
    MuiInput: {
      input: {
        color: "white",
        borderBottom: "1px solid white",
      },
    },
  },
});
