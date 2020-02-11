import React  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import ReonomyPalette from './styles/palette';
import * as UI from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Basier Square Regular', Helvetica, Arial, sans-serif",
    fontSize: 16,
    button: {
      fontFamily: "'Basier Square Medium', Helvetica, Arial, sans-serif",
      fontWeight: 'normal',
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      light: ReonomyPalette.pelorousLight,
      main: ReonomyPalette.pelorous,
      dark: ReonomyPalette.pelorousDark,
      contrastText: '#fff'
    },
    secondary: {
      light: ReonomyPalette.bayOfManyLight,
      main: ReonomyPalette.bayOfMany,
      dark: ReonomyPalette.bayOfManyDark,
      contrastText: '#fff'
    },
    text: {
      primary: ReonomyPalette.tuatara
    },
    // grey palette generated off tuatara (grey[800]) here https://materialpalettes.com/
    grey: {
      '50': '#faf8f7',
      '100': '#f3f1f0',
      '200': '#e9e8e7',
      '300': '#d9d8d7',
      '400': '#b5b4b3',
      '500': '#959493',
      '600': '#6d6c6b',
      '700': '#5a5857',
      '800': '#3b3a39',
      '900': '#1b1a19'
    },
    // background: {
    //   default: '#faf8f7' // grey[50]
    // }
  },
  shape: {
    borderRadius: 2
  },
  overrides: {}
});

export const LayoutComponents = {
  // Not used for anything yet, probably should delete
  h1: ({ children, ...props }) => (
    <h1 {...props}>
      {children}
    </h1>
  ),
}

export const UIComponents = {
  ...UI,
  // TODO: include additional custom components here, eg:
  Janky: props => <UI.TextField {...props} placeholder={'janky'} />
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
