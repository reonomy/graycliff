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
      light: ReonomyPalette.bayOfManyLight,
      main: ReonomyPalette.bayOfMany,
      dark: ReonomyPalette.bayOfManyDark,
      contrastText: '#fff'
    },
    secondary: {
      light: ReonomyPalette.pelorousLight,
      main: ReonomyPalette.pelorous,
      dark: ReonomyPalette.pelorousDark,
      contrastText: '#fff'
    },
    text: {
      primary: ReonomyPalette.tuatara
    },
    // grey palette generated off tuatara (grey[800]) here https://materialpalettes.com/
    grey: {
      '50': '#F7F9FE',
      '100': '#F1F3F7',
      '200': '#E9EBEF',
      '300': '#DADCE0',
      '400': '#B7B9BC',
      '500': '#97999D',
      '600': '#6F7074',
      '700': '#5B5D60',
      '800': '#3C3E41',
      '900': '#1C1D20'
    },
    // background: {
    //   default: '#F7F9FE' // grey[50]
    // }
  },
  shape: {
    borderRadius: 2
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '.875rem'
      }
    },
    MuiButton: {
      containedPrimary: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        }
      },
      containedSecondary: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        }
      },
      contained: {
        '&:active': {
          boxShadow: 'none'
        }
      }
    }
  },
  props: {
    // MuiButton: {
    //   disableRipple: !hasTouch
    // },
    // MuiTab: {
    //   disableRipple: !hasTouch
    // }
  }
});

export const LayoutComponents = {
  // Not used for anything yet, probably should delete
  h1: ({ children, ...props }) => (
    <p {...props}>
      {children}
    </p>
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
