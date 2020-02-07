/**
 * Since this file is shared with NetlifyCMS it must be .jsx
 */

import React  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import * as UI from '@material-ui/core';

const theme = createMuiTheme();

export const LayoutComponents = {
  h1: ({ children, ...props }) => (
    <h1 {...props}>
      {children}
    </h1>
  ),
}

export const UIComponents = {
  ...UI,
  // TODO: include additional custom components here, eg:
  Jank: props => <UI.TextField {...props} placeholder={'jank'} />
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
