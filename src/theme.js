import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

export const theme = createMuiTheme({
  palette: {
    primary: { main: teal[700] }, // Purple and green play nicely together.
    secondary: { main: teal.A700 }, // This is just green.A700 as hex.
    gradient: { darkBlue: '#051937', purple: '#692194' },
    background: { default: '#eeeeee', paper: '#ffffff' }
  },
  typography: { useNextVariants: true },
});
